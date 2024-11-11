import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ProductProvider } from './contexts/productsContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Asegúrate de usar 'createRoot' correctamente
root.render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
