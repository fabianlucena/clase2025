import { useState } from 'react';
import './App.css';
import Head from './components/Head.jsx';
import Body from './components/Body.jsx';

export default function App() {
  const [menuShowed, setMenuShowed] = useState(false);

  return (
    <>
      <Head
        setMenuShowed={setMenuShowed}
      />
      <Body
        menuShowed={menuShowed}
      />
    </>
  )
}
