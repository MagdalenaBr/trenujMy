


export default function UserFormContainer({ children }: {children: React.ReactNode}) {
  return (
    <div className="w-full rounded-md bg-slate-900/70 py-6 ">
      <div className="mx-auto w-4/6">{children}</div>
    </div>
  );
}
