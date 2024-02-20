import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainer from "../features/trainer/AddTrainer";
import { useTrainers } from "../features/trainer/useTrainers";
import TableNoContent from "../ui/TableNoContent";

function Trainers() {
	const { isLoading, error } = useTrainers();
	if (isLoading) return <Spinner />;
	if (error) return <TableNoContent />;

	return (
		<MainContainer title='Trenerzy'>
			<TrainersTable />
			<AddTrainer />
		</MainContainer>
	);
}

export default Trainers;
