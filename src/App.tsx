import React, { useMemo } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  MiniMap, 
  useNodesState, 
  useEdgesState, 
} from '@xyflow/react';

import '@xyflow/react/dist/style.css'; 
import './index.css';

// Components & Data
import { MathNode } from './components/MathNode';
import { initialNodes } from './data/initialData';
import { nodesToGraph } from './utils/graphAdapter';
import { Overlay } from './components/Overlay';
import { COLORS } from './styles/theme';


// Alias output to avoid shadowing conflict
const { nodes: nodes0, edges: edges0 } = nodesToGraph(initialNodes);

const App: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(nodes0);
  const [edges, , onEdgesChange] = useEdgesState(edges0);

  const nodeTypes = useMemo(() => ({
    mathNode: MathNode, 
  }), []);

  return (
    <div className="mathverse-canvas">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={20} color="#333" />
        <Controls />
        <MiniMap 
          nodeColor={(node) => COLORS[node.data?.status as keyof typeof COLORS]||'#eee'}
        />
      </ReactFlow>
      <Overlay />
    </div>
  );
};

export default App;
