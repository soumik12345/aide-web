import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AddNode, SubtractNode, MultiplyNode, DivideNode } from './MathNodes';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'add': AddNode,
  'subtract': SubtractNode,
  'multiply': MultiplyNode,
  'divide': DivideNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
