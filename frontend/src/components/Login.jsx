import { useState } from 'react';
import Form from './Form.jsx';
import TextField from './TextField.jsx';
import { useModal } from './Modal.jsx';

export default function Login() {
  const [username, setUsername] = useState('1');
  const [password, setPassword] = useState('2');
  const { open: openModal } = useModal();

  function submit() {
    openModal('Ingresando');
    /*setTimeout(
      () => modal.close(),
      2500
    );*/
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