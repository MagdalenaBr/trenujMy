import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainer from "../features/trainer/AddTrainer";
import { useTrainer } from "../features/trainer/useTrainer";

function Trainers() {
	const { isLoading } = useTrainer();

	return (
		<MainContainer title='Trenerzy'>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<TrainersTable />
					<AddTrainer />
				</>
			)}
		</MainContainer>
	);
}

export default Trainers;
