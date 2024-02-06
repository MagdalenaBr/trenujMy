import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";

function BackButton() {
	const navigate = useNavigate();
	function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		navigate(-1);
	}

	return (
		<StyledButton styles='self-start' handleClick={e => onClick(e)}>
			<HiOutlineArrowSmallLeft className='text-2xl' />
		</StyledButton>
	);
}

export default BackButton;
