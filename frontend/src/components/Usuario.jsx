import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Form from "./Form";
import TextField from './TextField';
import MultiSelect from './MultiSelectField.jsx';
import * as userService from '../services/userService.js';

export default function Usuario() {
  const { uuid } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    userService.get({ uuid })
      .then(data => setData(data[0]));
    }, [uuid]);

  return <Form
      title="Editar usuario"
    >
      <TextField
        label="Nombre completo"
        name="fullName"
        required={true}
        value={data.fullName}
        onChange={e => setData({ ...data, fullName: e.target.value })}
      />

      <TextField
        label="Nombre de usuario"
        name="username"
        required={true}
        value={data.username}
        onChange={e => setData({ ...data, username: e.target.value })}
      />

      <TextField
        label="Correo electrónico"
        name="email"
        required={true}
        value={data.email}
        onChange={e => setData({ ...data, email: e.target.value })}
      />

      <MultiSelect
        label="Roles"
        name="roles"
        options={[
          { value: 'admin',    label: 'Administrador' },
          { value: 'operator', label: 'Operador' },
        ]}
        value={data.roles}
        onChange={selected => setData({ ...data, roles: selected })}
      />

      <TextField
        label="Cambiar contraseña"
        name="password"
        required={true}
        type="password"
        value={data.password}
        onChange={e => setData({ ...data, password: e.target.value })}
      />

    </Form>;
}