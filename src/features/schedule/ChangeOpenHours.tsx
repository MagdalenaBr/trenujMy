interface PropsType {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ChangeOpenHours({ handleClick }: PropsType) {
  return (
    <button
      onClick={handleClick}
      className="mb-4 self-center rounded-md border-2 border-cyan-800 px-2 py-1 font-bold uppercase text-cyan-800"
    >
      Zmień godziny otwarcia
    </button>
  );
}
export default ChangeOpenHours;
