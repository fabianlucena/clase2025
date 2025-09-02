export default function MultiSelectField({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return <fieldset>
      <legend>{label}</legend>
      {options.map(option => (
        <label
          key={option.value}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}
        >
          <input
            type="checkbox"
            name={name}
            checked={value?.includes(option.value)}
            onChange={e => {
              const checked = e.target.checked;
              const newValue = checked
                ? [...value, option.value]
                : value.filter(v => v !== option.value);
              onChange(newValue);
            }}
          />
          { option.label }
        </label>
      ))}
    </fieldset>;
}