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
      className={` border text-[11px]  font-semibold uppercase ${paddingX} ${status === "cancel" && !disabled ? " border-cancelStatus" : !disabled && " border-confirmStatus"} ${width} ${disabled ? "border-none  text-slate-400" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
