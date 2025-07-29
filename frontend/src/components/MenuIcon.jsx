export default function MenuIcon({
  onClick
}) {
  function onClickHandler(event) {
    event.stopPropagation();
    onClick && onClick();
  }

  return (
    <img
      src="./lista.png"
      alt="Menú"
      style={{
        height: '1.5em',
        backgroundColor: 'white',
        padding: '0.5em',
        borderRadius: '0.5em',
        margin: '.3em',
      }}
      onClick={onClickHandler}
    />
  );
}