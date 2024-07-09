export default function StatusButton({
  children,
  onClick,
  status,
  width,
  disabled,
  paddingX = "px-2",
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  status: "cancel" | "confirm";
  width?: string;
  disabled?: boolean;
  paddingX?: string;
}) {
  return (
    <button
      disabled={disabled}
      className={` border text-[11px]  font-semibold uppercase ${paddingX} ${status === "cancel" && !disabled ? " border-red-500" : !disabled && " border-lime-500"} ${width} ${disabled ? "border-gray-600 bg-gray-600 text-slate-900" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
