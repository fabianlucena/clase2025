import { useState, useEffect } from 'react';
import * as userService from '../services/userService.js';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    userService.get()
      .then(setUsuarios);
  }, []);

  return <table className="data-table"
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
          </td>
        </tr>)}
      </tbody>
    </table>;
}