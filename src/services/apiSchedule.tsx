import supabase from "./supabase";

type ClassesType = {
	id?: number;
	name: string;
	numOfPlaces: number;
	trainerId: number;
	date: string;
};

export async function getSchedule() {
	const { data: schedule, error } = await supabase
		.from("schedule")
		.select("*, trainers(name)");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return schedule;
}

export async function addOrEditSchedule(
	newClasses: ClassesType,
	id?: number
): Promise<ClassesType> {
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
