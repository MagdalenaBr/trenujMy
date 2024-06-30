export default function GridContainer({
  children, gridWidth ='grid-cols-2'
}: {
  children: React.ReactNode;
  gridWidth?: string
}) {
  return <div className={`grid ${gridWidth}  text-start gap-4`}>{children}</div>;
}
