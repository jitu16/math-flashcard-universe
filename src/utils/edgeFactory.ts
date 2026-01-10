import { MarkerType, type Edge } from '@xyflow/react';
import { COLORS } from '../styles/theme';

export const createParentEdge = (parentId: string, childId: string): Edge => ({
  id: `e-${parentId}-${childId}`,
  source: parentId,
  target: childId,
  type: 'smoothstep',
  markerEnd: { type: MarkerType.ArrowClosed },
  style: { stroke: COLORS.parentLine },
});

export const createDuplicateEdge = (sourceId: string, targetId: string): Edge => ({
  id: `dup-${sourceId}-${targetId}`,
  source: sourceId,
  target: targetId,
  type: 'straight',
  animated: true,
  style: { stroke: COLORS.duplicateLine, strokeDasharray: 5 },
  label: 'Duplicate',
});
