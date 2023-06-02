import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Reset from './assets/components/styles/Reset.js';
import GlobalStyle from './assets/components/styles/GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
