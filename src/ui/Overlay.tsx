type Props = {
  children: React.ReactNode;
};

function Overlay({ children }: Props) {
  return (
    <div className="fixed inset-0 h-screen w-screen bg-neutral-500 bg-opacity-80 ">
      <div className="flex h-full items-center justify-center">{children}</div>
    </div>
  );
}

export default Overlay;
