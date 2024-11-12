import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductContext from '../../contexts/productsContext';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProductForm() {
  const { products, addProduct, updateProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({ name: '', description: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const existingProduct = products.find((p) => p.id === parseInt(id, 10));
      if (existingProduct) setProduct(existingProduct);
    }
  }, [id, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    navigate('/productos');
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">{id ? 'Editar Producto' : 'Crear Producto'}</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="productName">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                placeholder="Ingrese el nombre del producto"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="productDescription">
              <Form.Label>Descripción del producto</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                placeholder="Ingrese la descripción del producto"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-3">
          {id ? 'Actualizar' : 'Guardar'}
        </Button>
        <Button variant="secondary" onClick={() => navigate('/productos')} className="mt-3 ms-2">
          Cancelar
        </Button>
      </Form>
    </Container>
  );
}

// PropTypes para la estructura esperada de los props en ProductForm
ProductForm.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  )
};

export default ProductForm;
