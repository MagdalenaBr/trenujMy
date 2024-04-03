type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="mx-auto flex w-[80%] text-slate-300  flex-col  gap-10 rounded border border-slate-700 bg-slate-900/70 p-4 overflow-auto relative">
      {children}
    </div>
  );
}

export default Container;
