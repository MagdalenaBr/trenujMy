import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTrainers } from "../services/apiTrainers";
import Spinner from "../ui/Spinner";
import AddTrainerForm from "../features/trainer/AddTrainerForm";
import Button from "../ui/Button";
import TrainersTable from "../features/trainer/TrainersTable";

function Trainers() {
	// const trainers = getTrainers();
	// console.log(trainers);

	const [showForm, setShowForm] = useState(false);

	const { isLoading } = useQuery({
		queryKey: ["trainers"],
		queryFn: getTrainers,
	});

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<TrainersTable />
					<Button type='add' handleClick={() => setShowForm(!showForm)}>
						Dodaj trenera
					</Button>
				</>
			)}

			{showForm && <AddTrainerForm showForm={showForm} setShowForm={setShowForm}/>}
		</>

		// <AddTrainerForm />
	);
}

export default Trainers;
