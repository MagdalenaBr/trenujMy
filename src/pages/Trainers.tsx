import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainer from "../features/trainer/AddTrainer";
import { useTrainers } from "../features/trainer/useTrainers";
import TableNoContent from "../ui/TableNoContent";

function Trainers() {
	const { trainerIsLoading, error } = useTrainers();
	if (trainerIsLoading) return <Spinner />;
	if (error) return <TableNoContent />;

	return (
		<MainContainer title='Trenerzy'>
			<TrainersTable />
			<AddTrainer />
		</MainContainer>
	);
}

export default Trainers;
