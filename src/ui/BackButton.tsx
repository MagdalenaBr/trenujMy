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
      className="xl:top-2 absolute right-1 top-1 border-2  px-1 xl:right-2 border-iconsColor text-iconsColor"
    >
      <HiOutlineArrowSmallLeft className="text-3xl" />
    </button>
  );
}

export default BackButton;
