export default function MemberDataConainer({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div className="divide-divideColor">
      <div className="flex items-center justify-center py-5">
        <hr className="mx-3 w-[17rem]  border-divideColor " />
        <h3 className="font-semibold text-base md:text-lg uppercase">{name}</h3>
        <hr className="mx-3 w-[17rem]  border-divideColor" />
      </div>
      {children}
    </div>
  );
}
