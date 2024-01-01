import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTrainers } from "../services/apiTrainers";
import Spinner from "../ui/Spinner";
import AddTrainerForm from "../features/trainer/AddTrainerForm";
import Button from "../ui/Button";
import TrainersTable from "../features/trainer/TrainersTable";
import MainContainer from "../ui/MainContainer";

function Trainers() {
	// const trainers = getTrainers();
	// console.log(trainers);

	const [showForm, setShowForm] = useState(false);

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
					<Button styleType='add' handleClick={() => setShowForm(!showForm)}>
						Dodaj trenera
					</Button>
				</>
			)}

			{showForm && (
				<AddTrainerForm showForm={showForm} setShowForm={setShowForm} />
			)}
		</MainContainer>

		// <AddTrainerForm />
	);
}

export default Trainers;
