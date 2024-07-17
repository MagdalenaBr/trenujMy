function TableNoContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="row"
      className="flex h-40 items-center justify-center font-semibold text-noDataColor"
    >
      {children}
    </div>
  );
}

export default TableNoContent;
