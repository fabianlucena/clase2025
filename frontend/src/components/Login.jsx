import { useState } from 'react';
import Form from './Form.jsx';
import TextField from './TextField.jsx';
import { login } from '../services/loginService.js';
import * as api from '../libs/api.js';
//import { useModal } from './Modal.jsx';
import { useSnackbar } from './Snackbar.jsx';

export default function Login() {
  const [username, setUsername] = useState('1');
  const [password, setPassword] = useState('2');
  //const { open: openModal } = useModal();
  const snackbar = useSnackbar();

  async function submit() {
    try {
      const data = await login(username, password);
      if (data.token) {
        api.headers.Authorization = `Bearer ${data.token}`;
        
        snackbar.enqueue('Ingreso OK', { variant: 'success', timeout: 6000 });
        snackbar.enqueue(data.token, { variant: 'success', timeout: 6000 });
      } else {
        snackbar.enqueue('Error de ingreso', { variant: 'error', timeout: 6500 });
      }
    } catch (err) {
      snackbar.enqueue(`Ha ocurrido un error: ${err.message}`, { variant: 'error', timeout: 6500 });
    }
  }

  return (
    <Form
      title="Iniciar sesión"
      action={submit}
    >
      <TextField
        label="Nombre de usuario"
        name="username"
        required={true}
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        label="Contraseña"
        name="password"
        type="password"
        required={true}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </Form>
  )
}