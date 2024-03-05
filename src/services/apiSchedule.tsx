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

export async function addSchedule(newClasses: ClassesType): Promise<ClassesType> {
	const { data: schedule, error } = await supabase
		.from("schedule")
		.insert([{ ...newClasses }])
		.select()
		.single();
	if (error) {
		throw new Error("Wystąpił błąd, zajęcia nie zostały dodaane.");
	}
	return schedule;
}
