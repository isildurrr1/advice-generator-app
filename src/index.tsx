import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import './vendor/normalize.sass'
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  //  </React.StrictMode> 
);

