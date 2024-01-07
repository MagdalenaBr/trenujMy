import TableNoContent from "../../ui/TableNoContent";
import TrainerOptions from "../../ui/TrainerOptions";
import Table from "../../ui/Table";
import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../../services/apiTrainers";
import { ShowFormContext } from "../../pages/Trainers";
import { useContext, useState } from "react";
import AddTrainerForm from "./AddTrainerForm";
import TrainerRow from "./TrainerRow";

function TrainersTable() {
	// const [showForm, onCloseForm] = useState(false);
	const { data: trainers } = useQuery({
		queryKey: ["trainers"],
		queryFn: getTrainers,
	});
	return (
		<Table>
			{/* <Table.Header>
				<p className='col-[1_/_2]'>Trener</p>
				<p>Kategoria</p>
				<p>Cena</p>
			</Table.Header> */}
			{trainers ? (
				trainers.map(trainer => (
					<Table.Row key={trainer.id}>
						<div className='col-[1_/_2] flex items-center gap-3 '>
							<img
								src={trainer.image}
								alt='trener'
								className='h-28 w-20 object-cover'
							/>
							<h2>{trainer.name}</h2>
						</div>
						<p>{trainer.category}</p>
						<p>{trainer.price} zł</p>
						<TrainerOptions trainer={trainer}/>
						{/* {showForm && <AddTrainerForm trainer={trainer} />} */}
					</Table.Row>
				))
			) : (
				<TableNoContent />
			)}
		</Table>
	);
}

export default TrainersTable;
