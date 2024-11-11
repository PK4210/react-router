import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';
import ProductContext from '../../contexts/productsContext';

function ProductsPage() {
  const { products, deleteProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="my-4">Productos</h1>
      <Button variant="primary" onClick={() => navigate('/producto/new')} className="mb-3">Crear Producto</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                <Button variant="warning" onClick={() => navigate(`/producto/edit/${product.id}`)} className="me-2">Editar</Button>
                <Button variant="danger" onClick={() => deleteProduct(product.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductsPage;
