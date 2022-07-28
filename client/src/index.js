import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {StrictMode} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ContextStore } from './ContextStore';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextStore>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ContextStore>
  );