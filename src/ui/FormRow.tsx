type Props = {
  name: string;
  label: string;
  children: React.ReactNode;
};

function FormRow({ name, label, children }: Props) {
  return (
    <>
      <label htmlFor={name} className="font-semibold text-textLight">
        {label}
      </label>
      {children}
    </>
  );
}

export default FormRow;
