type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="mx-auto flex w-[80%] flex-col  gap-10 overflow-hidden rounded border border-slate-700 bg-slate-900/70 p-4 h-[90%] overflow-y-auto">
      {children}
    </div>
  );
}

export default Container;
