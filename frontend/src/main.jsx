import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductsProvider } from './context/ProductsContext.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';

document.cookie = '_ga=value; SameSite=None; Secure';
document.cookie = '_ga_21SLH4J369=value; SameSite=None; Secure';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ProductsProvider>
        <App>
          <Helmet>
            <title>Fashion Kathmandu</title>
          </Helmet>
        </App>
      </ProductsProvider>
    </HelmetProvider>
  </React.StrictMode>
);
