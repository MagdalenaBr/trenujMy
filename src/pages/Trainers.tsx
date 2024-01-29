import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../services/apiTrainers";
import Spinner from "../ui/Spinner";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";
import AddTrainer from "../features/trainer/AddTrainer";

function Trainers() {
	const { isLoading } = useQuery({
		queryKey: ["trainers"],
		queryFn: getTrainers,
	});

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
