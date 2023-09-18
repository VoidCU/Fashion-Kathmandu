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
            <meta
              name="description"
              content="Nepal-based company making an honest effort to make a brand name on Nepalese hand tailored dress"
            />
            <meta property="og:image" content="images/webLogo.png" />
            <meta property="og:title" content="Fashion Kathmandu" />
            <meta
              property="og:description"
              content="Nepal-based company making an honest effort to make a brand name on Nepalese hand tailored dress"
            />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Fashion Kathmandu" />
            <meta name="twitter:image" content="images/webLogo.png" />
          </Helmet>
        </App>
      </ProductsProvider>
    </HelmetProvider>
  </React.StrictMode>
);
