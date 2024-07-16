export default function HomePageContainer({
  children,
  colGrid,
  width,
}: {
  children: React.ReactNode;
  colGrid?: string;
  width?: string;
}) {
  return (
    <div
      className={`${colGrid} ${width} h-80 overflow-auto bg-containerBg px-4 py-4 shadow-lg shadow-slate-900 xl:w-auto border-2 border-slate-900 `}
    >
      {children}
    </div>
  );
}
