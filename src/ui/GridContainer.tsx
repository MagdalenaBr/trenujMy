export default function GridContainer({
  children, gridWidth ='2'
}: {
  children: React.ReactNode;
  gridWidth?: string
}) {
  return <div className={`grid grid-cols-${gridWidth}  text-start gap-4`}>{children}</div>;
}
