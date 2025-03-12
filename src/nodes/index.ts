import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AddNode, SubtractNode, MultiplyNode, DivideNode } from './MathNodes';
import { IntegerNodeComponent } from './IntegerNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'add': AddNode,
  'subtract': SubtractNode,
  'multiply': MultiplyNode,
  'divide': DivideNode,
  'integer': IntegerNodeComponent,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
