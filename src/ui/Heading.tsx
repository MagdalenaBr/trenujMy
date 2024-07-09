export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="px-4 pb-2 text-start text-lg font-semibold uppercase tracking-wider lg:text-center ">
      {children}
    </h2>
  );
}
