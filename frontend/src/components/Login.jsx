import { useState } from 'react';
import Form from './Form.jsx';
import TextField from './TextField.jsx';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
   alert(`Llamar al backend con { username:"${username}", password:"${password}" }`);
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