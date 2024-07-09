export default function GridContainer({
  children,
  gridWidth = "grid-cols-2",
}: {
  children: React.ReactNode;
  gridWidth?: string;
}) {
  return (
    <div className={`grid ${gridWidth}  gap-4 text-start`}>{children}</div>
  );
}
