export default function UserFormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-bgTableWithSpacing py-6 border-2 border-slate-900 shadow-lg shadow-slate-900">
      <div className="mx-auto w-4/6">{children}</div>
    </div>
  );
}
