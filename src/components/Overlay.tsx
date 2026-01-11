/* src/components/Overlay.tsx */
import React from 'react';
import { STATUS_MAP } from '../styles/theme';
import styles from './Overlay.module.css';

interface OverlayProps {
  structureName?: string;
}

export const Overlay: React.FC<OverlayProps> = ({ structureName = "Algebraic Structure (Alpha)" }) => {
  return (
    <div className= {styles.overlay}>
      <h2>{structureName}</h2>
      
      <div className={styles.legend}>
        <p>✅ {STATUS_MAP.verified.label}: Green</p>
        <p>⚠️ {STATUS_MAP.deprecated.label}: Flashing Yellow</p>
        <p>🔵 Duplicate Link: Dashed Blue Line</p>
        <p>⚪ {STATUS_MAP.unverified.label}: Red</p>
      </div>
    </div>
  );
};
