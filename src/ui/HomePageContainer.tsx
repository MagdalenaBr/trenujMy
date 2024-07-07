export default function HomePageContainer({
  children,
  colGrid,
  width,
}: {
  children: React.ReactNode;
  colGrid?: string;
  width?: string
}) {
  return (
    <div
      className={`${colGrid} ${width} h-80 overflow-auto border-2 border-slate-900 bg-slate-900 px-4 pt-4 shadow-2xl shadow-slate-900 xl:w-auto `}
    >
      {children}
    </div>
  );
}
