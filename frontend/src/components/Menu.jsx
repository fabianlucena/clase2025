import useSession from "./Session";

export default function Menu() {
  const session = useSession();

  return (
    <nav
      className="menu"
    >
      <ul>
        <li><a href="/">Inicio</a></li>
        {session.isLoggedIn && <li><a href="#" onClick={() => session.setIsLoggedIn(false)}>Salir</a></li>}
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
    </nav>
  );
}