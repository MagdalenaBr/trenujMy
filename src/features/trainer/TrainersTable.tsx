import TableNoContent from "../../ui/TableNoContent";
import Table from "../../ui/Table";
import { useTrainers } from "./useTrainers";
import TrainerRow from "./TrainerRow";

function TrainersTable() {
	const { trainers } = useTrainers();
	return (
		<Table>
			{trainers ? (
				trainers.map(trainer => (
					<Table.Row key={trainer.id}>
						<TrainerRow trainer={trainer}/>
					</Table.Row>
				))
			) : (
				<TableNoContent />
			)}
		</Table>
	);
}

export default TrainersTable;
