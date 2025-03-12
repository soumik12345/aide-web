import { Handle, Position, type NodeProps } from '@xyflow/react';
import { type AddNode, type SubtractNode, type MultiplyNode, type DivideNode } from './types';

export function AddNode({ data }: NodeProps<AddNode>) {
  return (
    <div className="react-flow__node-default">
      <div>{data.label || 'Add'}</div>
      <Handle type="source" position={Position.Left} id="num_1" style={{ top: '35%' }}/>
      <Handle type="source" position={Position.Left} id="num_2" style={{ top: '65%' }}/>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export function SubtractNode({ data }: NodeProps<SubtractNode>) {
  return (
    <div className="react-flow__node-default">
      <div>{data.label || 'Subtract'}</div>
      <Handle type="source" position={Position.Left} id="num_1" style={{ top: '35%' }}/>
      <Handle type="source" position={Position.Left} id="num_2" style={{ top: '65%' }}/>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export function MultiplyNode({ data }: NodeProps<MultiplyNode>) {
  return (
    <div className="react-flow__node-default">
      <div>{data.label || 'Multiply'}</div>
      <Handle type="source" position={Position.Left} id="num_1" style={{ top: '35%' }}/>
      <Handle type="source" position={Position.Left} id="num_2" style={{ top: '65%' }}/>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export function DivideNode({ data }: NodeProps<DivideNode>) {
  return (
    <div className="react-flow__node-default">
      <div>{data.label || 'Divide'}</div>
      <Handle type="source" position={Position.Left} id="num_1" style={{ top: '35%' }}/>
      <Handle type="source" position={Position.Left} id="num_2" style={{ top: '65%' }}/>
      <Handle type="source" position={Position.Right} />
    </div>
  );
} 