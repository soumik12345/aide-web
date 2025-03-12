import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type AddNode = Node<{ label: string }, 'add'>;
export type SubtractNode = Node<{ label: string }, 'subtract'>;
export type MultiplyNode = Node<{ label: string }, 'multiply'>;
export type DivideNode = Node<{ label: string }, 'divide'>;
export type AppNode = BuiltInNode | PositionLoggerNode | AddNode | SubtractNode | MultiplyNode | DivideNode;
