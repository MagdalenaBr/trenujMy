export default function Input({
  label,
  type,
  id,
}: {
  label: string;
  id: string;
  type: string;
}) {
  return (
    <div className="flex w-4/6 justify-between">
      <label htmlFor={id} className="text-lg">
        {label}:
      </label>
      <input
        id={id}
        type={type}
        className="w-4/6 rounded-lg border-2 border-violet-300 bg-serchInputBg px-2 py-1 pr-2 text-slate-900 focus:border-slate-300 focus:bg-slate-300 focus:text-slate-800 focus:shadow-md focus:outline-none"
      />
    </div>
  );
}
