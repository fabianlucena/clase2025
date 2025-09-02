import MenuIcon from './MenuIcon.jsx';
import { useSession } from './Session.jsx';

export default function Head({
  setMenuShowed,
}) {
  const session = useSession();

  return (
    <div
      className="head"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#444',
      }}
    >
      <MenuIcon
        onClick={() => setMenuShowed(value => !value)}
      />
      <h1
        style={{
          margin: 0,
        }}
      >
        TUDS - DA - 2025
      </h1>
      <div>
        {session.user?.fullName}
      </div>
    </div>
  );
}