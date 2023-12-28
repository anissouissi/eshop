export interface FormRowProps {
  label: string;
  error: string;
  children: React.ReactElement;
}

export function FormRow({ label, error, children }: FormRowProps) {
  return (
    <div className="grid items-center gap-10">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span>{error}</span>}
    </div>
  );
}

export default FormRow;
