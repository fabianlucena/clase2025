import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Head from './components/Head.jsx';
import Body from './components/Body.jsx';
import { ModalProvider } from './components/Modal.jsx';
import { SnackbarProvider } from './components/Snackbar.jsx';
import * as api from './libs/api.js';
import { useSession } from './components/Session.jsx';

export default function App() {
  const [menuShowed, setMenuShowed] = useState(true);
    const session = useSession();

  useEffect(() => {
    const sessionText = localStorage.getItem('session');
    if(!sessionText)
      return;

    const sessionData = JSON.parse(sessionText);

    if (sessionData.token) {
      api.headers.Authorization = `Bearer ${sessionData.token}`;
      session.setIsLoggedIn(true);
      session.setUser(sessionData.user);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SnackbarProvider>
      <ModalProvider>
        <BrowserRouter>
          <Head
            setMenuShowed={setMenuShowed}
          />
          <Body
              menuShowed={menuShowed}
          />
        </BrowserRouter>
      </ModalProvider>
    </SnackbarProvider>
  )
}
