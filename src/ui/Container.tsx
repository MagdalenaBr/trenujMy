type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="relative mx-auto flex w-[80%]  flex-col  gap-5 overflow-auto  border border-slate-700 bg-slate-900/70 p-4 text-slate-300">
      {children}
    </div>
  );
}

export default Container;
