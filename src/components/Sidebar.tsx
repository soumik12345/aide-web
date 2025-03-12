import { DragEvent } from 'react';

export type NodeData = {
  type: string;
  label: string;
};

type SidebarProps = {
  onDragStart: (event: DragEvent, nodeData: NodeData) => void;
};

const Sidebar = ({ onDragStart }: SidebarProps) => {
  const operationNodes = [
    { type: 'add', label: 'Add' },
    { type: 'subtract', label: 'Subtract' },
    { type: 'multiply', label: 'Multiply' },
    { type: 'divide', label: 'Divide' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">Operations</div>
      <div className="sidebar-nodes">
        {operationNodes.map((node) => (
          <div
            key={node.type}
            className="sidebar-node"
            onDragStart={(event) => onDragStart(event, node)}
            draggable
          >
            {node.label}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar; 