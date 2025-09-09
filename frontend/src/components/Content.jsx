import Login from './Login.jsx';
import Router from './Router.jsx';
import { useSession } from './Session.jsx';

export default function Content() {
  const session = useSession();

  return (
    <div
      className="content"
      style={{
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      {!session.isLoggedIn ?
        <Login />
      : <Router /> }
    </div>
  );
}