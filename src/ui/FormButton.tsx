type Props = {
  children: React.ReactNode;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  px?: string;
  py?: string;
  type?: "submit" | "reset";
};

export default function FormButton({
  handleClick,
  children,
  px = "2",
  py = "1",
  type,
}: Props) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={` border-2 px-2 py-1 text-[10px] text-slate-200 lg:self-center xl:text-sm md:px-${px} md:py-${py} font-semibold uppercase tracking-wider shadow-md  hover:scale-105 ${type === "reset" ? "border-accentColor1  bg-slate-900" : "border-accentColor1 bg-accentColor1 "}`}
    >
      {children}
    </button>
  );
}
