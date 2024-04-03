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
      className={`my-4 rounded-xl px-6 py-3 font-semibold tracking-wider self-start hover:scale-105 ${styles} ${
        styleType === "add"
          ? "bg-accentColor1 px-12 text-violet-100 "
          : "border-2 border-accentColor1 bg-violet-100/60 text-accentColor1"
      } `}
    >
      {children}
    </button>
  );
}

export default StyledButton;
