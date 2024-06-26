interface PropsType {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function BookingTypeButton({
  handleClick,
  children,
}: PropsType) {
  return (
    <button
      onClick={handleClick}
      className="self-center border-2 border-accentColor2 px-2 py-2"
    >
      {children}
    </button>
  );
}
