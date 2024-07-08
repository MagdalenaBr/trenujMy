import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <button
      onClick={(e) => handleClick(e)}
      className="absolute top-1 right-1 border-2 border-slate-300  xl:border-accentColor2 px-1 xl:text-accentColor2 xl:ltop-2 xl:right-2"
    >
      <HiOutlineArrowSmallLeft className="text-3xl" />
    </button>
  );
}

export default BackButton;
