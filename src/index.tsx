import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';

const el = document.getElementById("root");
 
const root = ReactDOM.createRoot(el!);
 
root.render(<App />);