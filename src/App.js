// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import UsersPage from './components/pages/userPage';
import ProductsPage from './components/pages/productsPage';
import UserForm from './components/forms/userForm';
import ProductForm from './components/forms/productsForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user/new" element={<UserForm />} />
        <Route path="/user/edit/:id" element={<UserForm />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/producto/new" element={<ProductForm />} />
        <Route path="/producto/edit/:id" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
