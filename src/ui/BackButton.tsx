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
      className="xl:ltop-2 absolute right-1 top-1 border-2  border-slate-300 px-1 xl:right-2 xl:border-accentColor2 xl:text-accentColor2"
    >
      <HiOutlineArrowSmallLeft className="text-3xl" />
    </button>
  );
}

export default BackButton;
