export default function TextField({
  label,
  name,
  value,
  onChange,
  ...props
}) {
  return (
    <label>
      { label }
      <input
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </label>
  );
}