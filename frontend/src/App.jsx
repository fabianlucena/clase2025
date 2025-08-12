import { useState } from 'react';
import './App.css';
import Head from './components/Head.jsx';
import Body from './components/Body.jsx';
import { ModalProvider } from './components/Modal.jsx';
import { SnackbarProvider } from './components/Snackbar.jsx';

export default function App() {
  const [menuShowed, setMenuShowed] = useState(false);

  return (
    <SnackbarProvider>
      <ModalProvider>
        <Head
          setMenuShowed={setMenuShowed}
        />
        <Body
          menuShowed={menuShowed}
        />
      </ModalProvider>
    </SnackbarProvider>
  )
}
