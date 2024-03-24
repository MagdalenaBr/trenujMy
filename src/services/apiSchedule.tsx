import supabase from "./supabase";

interface ScheduleDataTypes extends NewScheduleTypes{
	created_at: string;
	id: number;
	trainers:{
		name: string
	}
}
interface NewClassesTypes {
	date: string;
	name: string;
	numOfPlaces: number;
	trainerId: number 
}
interface NewScheduleTypes extends NewClassesTypes{
	created_at: string;
	id: number;
}

export async function getSchedule(): Promise<ScheduleDataTypes[]> {
	const { data: schedule, error } = await supabase
		.from("schedule")
		.select("*, trainers(name)");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return schedule;
}

export async function addOrEditSchedule(newClasses: NewClassesTypes, id?: number): Promise<NewScheduleTypes> {
	let query;
	if (!id) query = supabase.from("schedule").insert([{ ...newClasses }]);

	if (id)
		query = supabase
			.from("schedule")
			.update({ ...newClasses })
			.eq("id", id);

	if (query === undefined)
		throw new Error("Wystąpił błąd, zajęcia nie zostały dodane.");

	const { data: schedule, error } = await query.select().single();
	if (error) {
		throw new Error("Wystąpił błąd, zajęcia nie zostały dodaane.");
	}
	return schedule;
}
