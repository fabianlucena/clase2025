import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Form from "./Form";
import TextField from './TextField';
import MultiSelect from './MultiSelectField.jsx';
import * as userService from '../services/userService.js';
import { useSnackbar } from './Snackbar.jsx';
import { useNavigate } from 'react-router-dom';

export default function Usuario() {
  const { uuid } = useParams();
  const [data, setData] = useState({});
  const snackbar = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    userService.get({ uuid })
      .then(data => setData(data[0] || {}));
  }, [uuid]);

  function submit(e) {
    e.preventDefault();
    if (uuid) {
      userService.patch(uuid, data)
        .then(() => {
          snackbar.enqueue('Usuario actualizado', { variant: 'success' });
          navigate('/usuarios');
        })
        .catch(err => {
          snackbar.enqueue(`Error al actualizar el usuario: ${err.message}`, { variant: 'error' });
        });
    } else {
      userService.post(data)
        .then(() => {
          snackbar.enqueue('Usuario creado', { variant: 'success' });
          navigate('/usuarios');
        })
        .catch(err => {
          snackbar.enqueue(`Error al crear el usuario: ${err.message}`, { variant: 'error' });
        });
    }
  }

  return <Form
      title="Editar usuario"
      onSubmit={submit}
    >
      <TextField
        label="Nombre completo"
        name="fullName"
        required={true}
        value={data.fullName || ''}
        onChange={e => setData({ ...data, fullName: e.target.value })}
      />

      <TextField
        label="Nombre de usuario"
        name="username"
        required={true}
        value={data.username || ''}
        onChange={e => setData({ ...data, username: e.target.value })}
      />

      <TextField
        label="Correo electrónico"
        name="email"
        required={true}
        value={data.email || ''}
        onChange={e => setData({ ...data, email: e.target.value })}
      />

      <MultiSelect
        label="Roles"
        name="roles"
        options={[
          { value: 'admin',    label: 'Administrador' },
          { value: 'operator', label: 'Operador' },
        ]}
        value={data.roles || []}
        onChange={selected => setData({ ...data, roles: selected })}
      />

      <TextField
        label="Cambiar contraseña"
        name="password"
        type="password"
        value={data.password || ''}
        onChange={e => setData({ ...data, password: e.target.value })}
      />
    </Form>;
}