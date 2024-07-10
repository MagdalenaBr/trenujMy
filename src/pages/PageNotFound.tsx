import { HiArrowUturnLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex w-screen translate-y-56 flex-col items-center gap-10 text-slate-300">
      <h1 className="text-3xl font-bold">Nie znaleziono strony.</h1>
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-3 border-2 border-accentColor2 px-2 py-2 font-semibold uppercase tracking-wider"
      >
        <span className="text-2xl">
          <HiArrowUturnLeft />
        </span>
        Strona główna
      </button>
    </div>
  );
}

export default PageNotFound;
