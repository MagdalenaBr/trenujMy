import { FallbackProps } from "react-error-boundary";

export default function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex translate-y-56 flex-col gap-4 text-center text-textLightMode">
      <h2 className="text-3xl uppercase">Wystąpił błąd 🌋</h2>
      <p className="text-sm">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="self-center border-2 border-red-800 bg-iconsColor px-4 py-2 font-semibold uppercase tracking-wider text-slate-900"
      >
        Strona główna
      </button>
    </div>
  );
}
