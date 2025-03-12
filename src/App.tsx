import { useCallback, useRef, DragEvent, KeyboardEvent } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  ReactFlowProvider,
  getConnectedEdges,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import Sidebar, { NodeData } from './components/Sidebar';
import { AppNode } from './nodes/types';

let id = 0;
const getId = () => `node-${id++}`;

export default function App() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const onDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDragStart = useCallback((event: DragEvent, nodeData: NodeData) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeData));
    event.dataTransfer.effectAllowed = 'move';
  }, []);

  const onDrop = useCallback(
    (event: DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
      if (!reactFlowBounds || !event.dataTransfer) return;

      try {
        const dataStr = event.dataTransfer.getData('application/reactflow');
        const { type, label, value } = JSON.parse(dataStr) as NodeData;

        const position = {
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        };

        const newNode = {
          id: getId(),
          type,
          position,
          data: { label, ...(value !== undefined ? { value } : {}) },
        } as AppNode;

        setNodes((nds) => nds.concat(newNode));
      } catch (error) {
        console.error('Error creating node:', error);
      }
    },
    [setNodes]
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Only handle Backspace key
      if (event.key === 'Backspace') {
        // Get selected nodes
        const selectedNodes = nodes.filter((node) => node.selected);
        
        if (selectedNodes.length > 0) {
          // Get all edges connected to selected nodes
          const connectedEdges = getConnectedEdges(selectedNodes, edges);
          
          // Edge IDs to remove
          const edgeIdsToRemove = connectedEdges.map((edge) => edge.id);
          
          // Node IDs to remove
          const nodeIdsToRemove = selectedNodes.map((node) => node.id);
          
          // Remove connected edges
          setEdges((eds) => eds.filter((edge) => !edgeIdsToRemove.includes(edge.id)));
          
          // Remove selected nodes
          setNodes((nds) => nds.filter((node) => !nodeIdsToRemove.includes(node.id)));
        }
      }
    },
    [nodes, edges, setNodes, setEdges]
  );

  return (
    <div className="app-container">
      <ReactFlowProvider>
        <Sidebar onDragStart={onDragStart} />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            edges={edges}
            edgeTypes={edgeTypes}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onKeyDown={onKeyDown}
            fitView
          >
            <Background />
            <MiniMap />
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}
