/* src/components/Flashcard.tsx */
import React from 'react';
import styles from './Flashcard.module.css'; // 
import type { MathNode, Axiom, Theorem } from '../types';
import { getCumulativeLineage } from '../utils/lineage';

interface FlashcardProps {
  node: MathNode;
  allNodes: MathNode[];
  allAxioms: Axiom[];
  allTheorems: Theorem[];
  onClose: () => void;
}

export const Flashcard: React.FC<FlashcardProps> = ({ node, allNodes, allAxioms, allTheorems, onClose }) => {
  const { inheritedAxioms, inheritedTheorems, localAxiom, localTheorems } = 
    getCumulativeLineage(node.id, allNodes, allAxioms, allTheorems);

  return (
    <div className={styles.panel}> {/* [cite: 37, 40] */}
      <button onClick={onClose} style={{ float: 'right' }}>×</button>
      
      {/* 1. HERITAGE SECTION (Collapsible logic could go here) [cite: 37] */}
      <section className={styles.sectionInherited}>
        <h4>Heritage</h4>
        <div>
          <strong>Axioms:</strong>
          {inheritedAxioms.map(ax => <span key={ax.id} className={styles.badge}>{ax.canonicalName}</span>)}
        </div>
        {inheritedTheorems.length > 0 && (
          <div style={{ marginTop: '10px' }}>
            <strong>Inherited Theorems:</strong>
            {inheritedTheorems.map(t => <div key={t.id}>• {t.statementLatex}</div>)}
          </div>
        )}
      </section>

      {/* 2. LOCAL DISCOVERY SECTION [cite: 38] */}
      <section className={styles.sectionCurrent}>
        <h3>Current: {localAxiom?.canonicalName}</h3>
        <p><em>Formula: {node.displayLatex}</em></p>
        
        <h4>Local Theorems</h4>
        {localTheorems.length > 0 ? (
          localTheorems.map(t => (
            <div key={t.id} className={styles.theoremItem}>
               <strong>{t.statementLatex}</strong>
               <p style={{ fontSize: '0.8rem' }}>Proof: {t.proofLatex}</p>
            </div>
          ))
        ) : (
          <p>No theorems proven here yet.</p>
        )}
      </section>
    </div>
  );
};
