import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'styles/fonts.css';
import 'styles/variables.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/fix_all'>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
