export default function StatusButton({
  children,
  onClick,
  status,
  width,
  disabled,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  status: "cancel" | "confirm";
  width?: string;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg border text-[11px] font-semibold uppercase ${status === "cancel" && !disabled ? " border-red-500" : !disabled && " border-lime-500"} ${width} ${disabled ? "border-gray-600 bg-gray-600 text-slate-900" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
