type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="relative mx-auto flex w-[80%] flex-col  gap-10  border-2 shadow-md shadow-slate-900 border-slate-900 bg-containerBg p-4 text-textLightmode">
      {children}
    </div>
  );
}

export default Container;
