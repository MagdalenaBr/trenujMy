type Props = {
  children: React.ReactNode;
  styleType?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset";
  styles?: string;
};

function StyledButton({
  children,
  styleType,
  type,
  handleClick,
  styles,
}: Props) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`my-4 self-start rounded-md px-6 py-2 font-semibold tracking-wider hover:scale-105 ${styles} ${
        styleType === "add"
          ? "bg-accentColor1 border-2 border-accentColor1 px-12 text-violet-100 "
          : "border-2 border-accentColor1 bg-slate-900/80 text-slate-200"
      } `}
    >
      {children}
    </button>
  );
}

export default StyledButton;
