interface PropsType {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ChangeOpenHoursButton({ handleClick }: PropsType) {
  return (
    <button
      onClick={handleClick}
      className="rounded-md border-2 border-primaryTextColor px-2 py-1 font-bold uppercase w-[15rem]"
    >
      Zmień godziny otwarcia
    </button>
  );
}
