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
      className="absolute top-2 rounded-md border-2 border-accentColor2 px-2 py-2 text-accentColor2 right-2"
    >
      <HiOutlineArrowSmallLeft className="text-3xl" />
    </button>
  );
}

export default BackButton;
