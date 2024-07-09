interface PropsType {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ChangeOpenHoursButton({ handleClick }: PropsType) {
  return (
    <button
      onClick={handleClick}
      className="border-2 border-accentColor1 bg-slate-700 px-2 py-1 font-semibold uppercase tracking-wider shadow-md  hover:scale-105"
    >
      Zmień godziny otwarcia
    </button>
  );
}
