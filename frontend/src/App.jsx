import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Head from './components/Head.jsx';
import Body from './components/Body.jsx';
import { ModalProvider } from './components/Modal.jsx';
import { SnackbarProvider } from './components/Snackbar.jsx';
import { SessionProvider } from './components/Session.jsx';

export default function App() {
  const [menuShowed, setMenuShowed] = useState(true);

  return (
    <SnackbarProvider>
      <ModalProvider>
        <SessionProvider>
          <BrowserRouter>
            <Head
              setMenuShowed={setMenuShowed}
            />
            <Body
                menuShowed={menuShowed}
            />
          </BrowserRouter>
        </SessionProvider>
      </ModalProvider>
    </SnackbarProvider>
  )
}
