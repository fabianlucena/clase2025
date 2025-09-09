import { useState } from 'react';
import Form from './Form.jsx';
import TextField from './TextField.jsx';
import { login } from '../services/loginService.js';
import * as api from '../libs/api.js';
import { useSnackbar } from './Snackbar.jsx';
import { useSession } from './Session.jsx';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const snackbar = useSnackbar();
  const session = useSession();

  async function submit() {
    try {
      const data = await login(username, password);
      if (data.token) {
        localStorage.setItem('session', JSON.stringify(data));

        api.headers.Authorization = `Bearer ${data.token}`;
        session.setIsLoggedIn(true);
        session.setUser(data.user);

        snackbar.enqueue('Ingreso OK', { variant: 'success', timeout: 6000 });
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
      submitLabel="Ingresar"
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