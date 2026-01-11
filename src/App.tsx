/* src/App.tsx */
import React, { useState } from 'react';
import { AlgebraicStructureExplorer } from './components/AlgebraicStructureExplorer';


const App: React.FC = () => {
  const [view] = useState<'menu' | 'explorer'>('explorer');

  return (
    <main className="app-root">
      {view === 'explorer' ? (
        <AlgebraicStructureExplorer />
      ) : (
	<div className="menu-placeholder">
        <h1>Main Menu</h1>
	  <p>Select an Algebraic Structure to explore</p>
	</div>
      )}
    </main>
  );
};

export default App;
