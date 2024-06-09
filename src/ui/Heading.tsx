export default function Heading({children}: {children:React.ReactNode}) {
  return (
    <h2 className="text-lg font-semibold uppercase tracking-wider ">
      {children}
    </h2>
  );
}
