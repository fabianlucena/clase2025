import { Routes, Route } from 'react-router-dom';
import useSession from "./Session";
import Home from './Home.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';
import Usuarios from './Usuarios.jsx';
import Usuario from './Usuario.jsx';

export default function Router() {
  const session = useSession();

  return <Routes>
      <Route path="/" element={<Home />} />
      {session.user?.roles?.includes('admin') && <>
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuario/:uuid" element={<Usuario />} />
      </>}
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>;
}