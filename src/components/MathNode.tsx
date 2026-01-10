/* src/components/MathNode.tsx */
import React, { useEffect, useRef } from 'react';
// We need 'Node' and 'NodeProps' from the library
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import katex from 'katex';
import type { MathNode as MathNodeData } from '../types'; //

type MathNodeDataWithIndex = MathNodeData & Record<string, unknown>;

export const MathNode: React.FC<NodeProps<Node<MathNodeDataWithIndex, 'mathNode'>>> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && data.displayLatex) {
      katex.render(data.displayLatex, containerRef.current, {
        throwOnError: false,
        displayMode: false
      });
    }
  }, [data.displayLatex]);

  const containerClass = `math-node-container status-${data.status}`;

  return (
    <div className={containerClass}>
      <Handle type="target" position={Position.Top} />
      
      <div ref={containerRef} className="math-display-area" />
      
      <div className="math-node-stats">
        <span className="stat-green">▲ {data.stats.greenVotes}</span>
        <span className="stat-black">▼ {data.stats.blackVotes}</span>
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
