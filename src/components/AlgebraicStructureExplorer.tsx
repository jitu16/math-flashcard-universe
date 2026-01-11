/* src/components/AlgebraicStructureExplorer.tsx */
import React, { useMemo, useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, MiniMap, useNodesState, useEdgesState } from '@xyflow/react';
import { MathNode } from './MathNode';
import { Overlay } from './Overlay';
import { Flashcard } from './Flashcard'; // Import the new component
import { initialNodes, initialAxioms, initialTheorems } from '../data/initialData';
import { nodesToGraph } from '../utils/graphAdapter';
import { COLORS } from '../styles/theme';

import '@xyflow/react/dist/style.css';

const { nodes: nodes0, edges: edges0 } = nodesToGraph(initialNodes);

export const AlgebraicStructureExplorer: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(nodes0);
  const [edges, , onEdgesChange] = useEdgesState(edges0);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const nodeTypes = useMemo(() => ({ mathNode: MathNode }), []);

  // Use MathNode interface from types to find the selected data object
  const selectedNodeData = useMemo(() => 
    initialNodes.find(n => n.id === selectedNodeId), 
  [selectedNodeId]);

  const onNodeClick = useCallback((_: React.MouseEvent, node: any) => {
    setSelectedNodeId(node.id);
  }, []);

  return (
    <div className="explorer-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={20} color="#333" />
        <Controls />
        <MiniMap nodeColor={(node) => COLORS[node.data?.status as keyof typeof COLORS] || '#eee'} />
      </ReactFlow>
      
      <Overlay structureName="Abelian Group Evolution" />

      {/* Render Flashcard if a node is selected  */}
      {selectedNodeData && (
        <Flashcard 
          node={selectedNodeData}
          allNodes={initialNodes}
          allAxioms={initialAxioms}
          allTheorems={initialTheorems}
          onClose={() => setSelectedNodeId(null)}
        />
      )}
    </div>
  );
};
