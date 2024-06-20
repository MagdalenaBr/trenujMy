export default function HomePageContainer({
  children,
  colGrid,
}: {
  children: React.ReactNode;
  colGrid: string;
}) {
  return (
    <div
      className={`${colGrid} h-72 overflow-auto border-2 border-slate-900 bg-slate-900 px-4 pt-4 shadow-2xl shadow-slate-900`}
    >
      {children}
    </div>
  );
}
