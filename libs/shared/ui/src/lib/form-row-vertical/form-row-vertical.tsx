export interface FormRowVerticalProps {
  label?: string;
  error?: string;
  children: React.ReactElement;
}

export function FormRowVertical({
  label,
  error,
  children,
}: FormRowVerticalProps) {
  return (
    <div className="flex flex-col gap-2 py-1 w-full">
      {label && (
        <label className="text-sm" htmlFor={children?.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-error">{error}</span>}
    </div>
  );
}

export default FormRowVertical;
