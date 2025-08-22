import Button from './Button.jsx';

export default function Form({
  children,
  title,
  submitLabel,
  ...props
}) {
  return (
    <form
      className="form"
      {...props}
    >
      { title && <h2>{title}</h2> }
      {children}
      <Button type="submit">{submitLabel || 'Enviar'}</Button>
    </form>
  )
}