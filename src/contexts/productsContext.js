import React, { createContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', description: 'Una laptop potente para trabajo y entretenimiento' },
    { id: 2, name: 'Smartphone', description: 'Un smartphone con cámara de alta resolución y buena batería' },
    { id: 3, name: 'Auriculares', description: 'Auriculares inalámbricos con cancelación de ruido' },
    { id: 4, name: 'Teclado Mecánico', description: 'Teclado mecánico con retroiluminación RGB' },
    { id: 5, name: 'Monitor', description: 'Monitor Full HD de 24 pulgadas con tecnología IPS' },
  ]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
