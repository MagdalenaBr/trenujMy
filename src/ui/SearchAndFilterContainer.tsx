export default function SearchAndFiltterContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col content-center gap-1 lg:flex-row lg:items-center lg:gap-4">
      {children}
    </div>
  );
}
