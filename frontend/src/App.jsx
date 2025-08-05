import { useState } from 'react';
import './App.css';
import Head from './components/Head.jsx';
import Body from './components/Body.jsx';
import { ModalProvider } from './components/Modal.jsx';

export default function App() {
  const [menuShowed, setMenuShowed] = useState(false);

  return (
    <ModalProvider>
      <Head
        setMenuShowed={setMenuShowed}
      />
      <Body
        menuShowed={menuShowed}
      />
    </ModalProvider>
  )
}
