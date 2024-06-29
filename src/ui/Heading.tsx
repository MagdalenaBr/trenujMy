export default function Heading({children}: {children:React.ReactNode}) {
  return (
    <h2 className="text-lg text-start px-4 lg:text-center font-semibold uppercase tracking-wider pb-2 ">
      {children}
    </h2>
  );
}
