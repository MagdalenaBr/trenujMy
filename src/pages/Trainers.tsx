import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainer from "../features/trainer/AddTrainer";
import { useTrainer } from "../features/trainer/useTrainer";
import TableNoContent from "../ui/TableNoContent";

function Trainers() {
	const { isLoading, error } = useTrainer();
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
