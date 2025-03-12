import { useState } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { type IntegerNode } from './types';

export function IntegerNodeComponent({ data }: NodeProps<IntegerNode>) {
  const [value, setValue] = useState(data.value || 0);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setValue(newValue);
      // Update node data if needed
      if (data.value !== undefined) {
        data.value = newValue;
      }
    }
  };

  return (
    <div className="react-flow__node-default">
      <div>{data.label || 'Integer'}</div>
      <div className="integer-node-input">
        <input 
          type="number" 
          value={value} 
          onChange={handleValueChange}
          className="integer-input"
        />
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}