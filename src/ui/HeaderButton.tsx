export default function HeaderButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="rounded-md border-2 border-transparent px-1 py-1 text-2xl hover:border-accentColor2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
