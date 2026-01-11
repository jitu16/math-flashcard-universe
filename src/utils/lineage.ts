/* src/utils/lineage.ts */
import type { MathNode, Axiom, Theorem } from '../types';

export interface CumulativeLineage {
  inheritedAxioms: Axiom[];
  inheritedTheorems: Theorem[];
  localAxiom?: Axiom;
  localTheorems: Theorem[];
}

export const getCumulativeLineage = (
  currentNodeId: string,
  allNodes: MathNode[],
  allAxioms: Axiom[],
  allTheorems: Theorem[]
): CumulativeLineage => {
  const result: CumulativeLineage = {
    inheritedAxioms: [],
    inheritedTheorems: [],
    localTheorems: allTheorems.filter(t => t.nodeId === currentNodeId)
  };

  const currentNode = allNodes.find(n => n.id === currentNodeId);
  result.localAxiom = allAxioms.find(a => a.id === currentNode?.axiomId);

  // Traverse parent chain for inheritance [cite: 4]
  let parentPointer = currentNode?.parentId;
  while (parentPointer) {
    const parentNode = allNodes.find(n => n.id === parentPointer);
    if (!parentNode) break;

    const axiom = allAxioms.find(a => a.id === parentNode.axiomId);
    if (axiom) result.inheritedAxioms.unshift(axiom);

    const theorems = allTheorems.filter(t => t.nodeId === parentNode.id);
    result.inheritedTheorems.unshift(...theorems);

    parentPointer = parentNode.parentId;
  }

  return result;
};
