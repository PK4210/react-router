import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../axiosConfig'; // Usando el axiosInstance que configuraste
import { Form, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function UserForm() {
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Si estamos en modo edición, cargar los datos del usuario existente
    if (id) {
      axios.get(`/users/${id}`).then(response => {
        setUser(response.data.data);
      }).catch(error => console.error("Error fetching user:", error));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Si hay un ID, actualizar el usuario existente
        await axios.put(`/users/${id}`, user);
      } else {
        // Si no hay un ID, crear un nuevo usuario
        await axios.post('/users', user);
        console.log('Creando usuario');
      }
      navigate('/');
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">{id ? 'Editar Usuario' : 'Crear Usuario'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="userFirstName" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            placeholder="Ingrese el nombre"
            required
          />
        </Form.Group>

        <Form.Group controlId="userLastName" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            value={user.last_name}
            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            placeholder="Ingrese el apellido"
            required
          />
        </Form.Group>

        <Form.Group controlId="userEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Ingrese el correo electrónico"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          {id ? 'Actualizar' : 'Guardar'}
        </Button>
        <Button variant="secondary" onClick={() => navigate('/')} className="mt-3 ms-2">
          Cancelar
        </Button>
      </Form>
    </Container>
  );
}

// PropTypes para la estructura esperada del usuario
UserForm.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default UserForm;
