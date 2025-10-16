import React from 'react';
import { createRoot } from 'react-dom/client';
import RemoteApp from './RemoteApp';

// Get the root element
const container = document.getElementById('root');

if (container) {
  // Create root and render the app (only if running as standalone)
  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <div style={{ padding: '2rem' }}>
        <h1>🔗 Remote App - Standalone Mode</h1>
        <p>Esta aplicação está rodando de forma independente na porta 3001</p>
        <hr style={{ margin: '2rem 0' }} />
        <RemoteApp />
      </div>
    </React.StrictMode>
  );
}