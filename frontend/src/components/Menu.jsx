import './Menu.css';
import { Link } from 'react-router-dom';
import useSession from "./Session";

export default function Menu() {
  const session = useSession();

  function logout() {
    localStorage.removeItem('session');
    session.setIsLoggedIn(false);
  }

  return (
    <nav
      className="menu"
    >
      <ul>
        <li><Link to="/">Inicio</Link></li>
        {session.isLoggedIn && <>
          {session.user?.roles?.includes('admin') && <li><Link to="/usuarios">Usuarios</Link></li>}
          <li><Link to="#" onClick={logout}>Salir</Link></li>
        </>}
        <li><Link to="/about">Acerca de</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
}