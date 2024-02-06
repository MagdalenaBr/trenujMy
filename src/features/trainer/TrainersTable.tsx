import TableNoContent from "../../ui/TableNoContent";
import TrainerOptions from "../../ui/TrainerOptions";
import Table from "../../ui/Table";
import { useQuery } from "@tanstack/react-query";
import { getTrainers } from "../../services/apiTrainers";


function TrainersTable() {
	const { data: trainers } = useQuery({
		queryKey: ["trainers"],
		queryFn: getTrainers,
	});
	console.log(trainers);
	return (
		<Table>
			{trainers?.length !== 0 ? (
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
						<TrainerOptions trainer={trainer} />
					</Table.Row>
				))
			) : (
				<TableNoContent />
			)}
		</Table>
	);
}

export default TrainersTable;
