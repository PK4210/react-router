# Tarea de React Router

## Instrucciones
Crear un proyecto nuevo que incluya un navbar para navegar entre las siguientes páginas:

### Página 1 - Users (Página por defecto)
- Mostrar un listado de usuarios.
- Incluir el avatar de cada usuario en la tabla.
- Para esto, realizar llamadas al API de [reqres.in](https://reqres.in) (users).
- Funcionalidades:
  - **Crear**: Permitir la creación de usuarios, redireccionando a otra página.
  - **Eliminar**: Permitir la eliminación de usuarios desde la lista.
  - **Editar**: Permitir la edición de usuarios. La edición debe:
    - Redireccionar a otra página.
    - Recibir el ID del usuario en la ruta.
    - Hacer una llamada al API para obtener los datos específicos de ese usuario.

### Página 2 - Productos
- Mostrar un listado de productos.
- Los productos deben estar almacenados en memoria (no usar una API externa).
- Funcionalidades:
  - **Crear**: Permitir la creación de productos, redireccionando a otra página.
  - **Eliminar**: Permitir la eliminación de productos desde la lista.
  - **Editar**: Permitir la edición de productos. La edición debe:
    - Redireccionar a otra página.
    - Utilizar el contexto (Context) para cargar los datos del producto actual.

## Puntaje

| Criterio                       | Puntaje |
|--------------------------------|---------|
| Proyecto Funcionando           | 40 pts  |
| Uso de PropTypes               | 10 pts  |
| Uso de Estilos                 | 10 pts  |
| Uso de Configuración base para axios | 10 pts  |

## Guía
[Routing en React](https://hygraph.com/blog/routing-in-react)
