import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface BookingTypes {
	created_at: string;
	date: string;
	id: number;
	memberId: number;
	members: {
		name: string;
		phone: string;
	};
	status: string;
	trainerId: number;
	trainers: {
		name: string;
	};
}


export default function MemberClassesStats({
	memberBookings
}: {memberBookings: BookingTypes[]}) {
	console.log(memberBookings);
	if (!memberBookings) return [];
	const unconfirmedClasses = memberBookings.filter(
		el => el.status === "niepotwierdzona"
	).length;
	const complitedClasses = memberBookings.filter(
		el => el.status === "zrealizowana"
	).length;
	const canceledClasses = memberBookings.filter(
		el => el.status === "anulowana"
	).length;

	const data = [
		{ name: "niepotwierdzona", value: unconfirmedClasses },
		{ name: "zrealizowana", value: complitedClasses },
		{ name: "anulowana", value: canceledClasses },
	];

	const colors = ["#434cc247", "#13c51c9d", "#cf6b6b"];
	const checkIfDataExists = Boolean(
		unconfirmedClasses > 0 || complitedClasses > 0 || canceledClasses > 0
	);

	return (
		<ResponsiveContainer width='50%' height={250}>
			<PieChart>
				{checkIfDataExists ? (
					<>
						<Legend
							height={36}
							layout='vertical'
							align='right'
							verticalAlign='middle'
							iconType='circle'
						/>
						<Pie
							data={data}
							cx='50%'
							cy='50%'
							labelLine={false}
							outerRadius={80}
							fill='#13c51c9d'
							nameKey='name'
							dataKey='value'
							label>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={colors[index]} />
							))}
						</Pie>
					</>
				) : (
					<>
						<Legend
							height={36}
							layout='vertical'
							align='right'
							verticalAlign='middle'
							iconType='circle'
						/>
						<Pie
							data={[{ name: "brak rezerwacji", value: 100 }]}
							cx='50%'
							cy='50%'
							labelLine={false}
							outerRadius={80}
							fill='#13c51c9d'
							nameKey='name'
							dataKey='value'>
							<Cell key={`cell`} fill='#b7cab99d' />
						</Pie>
					</>
				)}
			</PieChart>
		</ResponsiveContainer>
	);
}
