import React from 'react';
import { STATUS_MAP } from '../styles/theme';

export const Overlay: React.FC = () => {
  return (
    <div className="mathverse-overlay">
      <h2>The Mathverse (Alpha)</h2>
      {Object.entries(STATUS_MAP).map(([key, info]) => (
        <p key={key}>
          {key === 'verified' ? '✅' : key === 'deprecated' ? '⚠️' : '•'} {info.label}
        </p>
      ))}
      <p>🔵 Duplicate Link: Dashed Blue Line</p>
    </div>
  );
};
