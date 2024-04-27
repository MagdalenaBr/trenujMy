
type Props = {
  name: string;
  label: string;
  children: React.ReactNode;
};

function FormRow({ name, label, children }: Props) {
  return (
    <label htmlFor={name} className={`grid grid-cols-4 font-semibold`}>
      {label}
      <div className=" col-start-2 col-end-5 grid grid-cols-6 gap-3">
        {children}
      </div>
    </label>
  );
}

export default FormRow;
