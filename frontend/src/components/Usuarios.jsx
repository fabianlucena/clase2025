import { useState, useEffect } from 'react';
import * as userService from '../services/userService.js';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';
import useModal from './Modal.jsx';
import { useSnackbar } from './Snackbar.jsx';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const modal = useModal();
  const snackbar = useSnackbar();

  useEffect(() => {
    userService.get()
      .then(setUsuarios);
  }, []);

  function deleteUsuario(uuid) {
    modal.open(
      '¿Confirma que desea eliminar este usuario?',
      'Confirmar eliminación',
      {
        onYes: () => {
          userService.deleteUser(uuid)
            .then(() => {
              snackbar.enqueue('Usuario eliminado', { variant: 'success' });4
              userService.get()
                .then(setUsuarios);
            })
            .catch(err => {
              snackbar.enqueue(`Error al eliminar el usuario: ${err.message}`, { variant: 'error' });
            });

          modal.close();
        },
      }
    );
  }

  return <>
    <h3>Usuarios</h3>
    <Button>
      <Link to={`/usuario`}>
        Agregar
      </Link>
    </Button>
    <table className="data-table"
    >
      <thead>
        <tr>
          <th>Nombre de usuario</th>
          <th>Nombre completo</th>
          <th>Email</th>
          <th>Roles</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => <tr key={usuario.uuid}>
          <td>{usuario.username}</td>
          <td>{usuario.fullName}</td>
          <td>{usuario.email}</td>
          <td>{usuario.roles.join(", ")}</td>
          <td>
            <Button>
              <Link to={`/usuario/${usuario.uuid}`}>
                Editar
              </Link>
            </Button>
            <Button
              onClick={() => deleteUsuario(usuario.uuid)}
            >
              Eliminar
            </Button>
          </td>
        </tr>)}
      </tbody>
    </table>
  </>;
}