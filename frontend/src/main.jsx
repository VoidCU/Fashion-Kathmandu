import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductsProvider } from './context/ProductsContext.jsx';

document.cookie = '_ga=value; SameSite=None; Secure';
document.cookie = '_ga_21SLH4J369=value; SameSite=None; Secure';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>
);
