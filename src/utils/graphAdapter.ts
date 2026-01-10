//import { MarkerType } from '@xyflow/react';
import type { Node, Edge } from '@xyflow/react';
import type { MathNode } from '../types'; 
import { createParentEdge, createDuplicateEdge } from './edgeFactory';

export const nodesToGraph = (mathNodes: MathNode[]): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  const levelCounts: Record<number, number> = {}; 

  mathNodes.forEach((mn) => {
    const level = mn.parentId ? 2 : 1; 
    if (!levelCounts[level]) levelCounts[level] = 0;
    
    const xPos = levelCounts[level] * 250;
    const yPos = (level - 1) * 200;
    levelCounts[level]++;

    nodes.push({
      id: mn.id,
      position: { x: xPos, y: yPos },
      type: 'mathNode', 
      data: { ...mn }, 
    });

    if (mn.parentId) {edges.push(createParentEdge(mn.parentId,mn.id));}

    if (mn.duplicateOfId) {edges.push(createDuplicateEdge(mn.id,mn.duplicateOfId));}
  });

  return { nodes, edges };
};
