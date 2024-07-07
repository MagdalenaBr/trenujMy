export default function MemberDataConainer({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-5">
        <hr className="mx-3 w-[17rem]" />
        <h3 className="font-semibold uppercase">{name}</h3>
        <hr className="mx-3 w-[17rem]" />
      </div>
      {children}
    </div>
  );
}
