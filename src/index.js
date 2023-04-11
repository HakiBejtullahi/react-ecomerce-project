import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const apiKey = process.env.REACT_APP_AUTHO_KEY;
const apiDomain = process.env.REACT_APP_AUTHO_KEY;
console.log(apiKey);

root.render(
  <Auth0Provider
<<<<<<< HEAD
    domain={apiDomain}
    clientId={apiKey}
=======
    domain=''
    clientId=''
>>>>>>> c43f692febf5c682b82693bdd876011cb581439d
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
