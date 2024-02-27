import supabase from "./supabase";

export async function getSchedule() {
	const { data: schedule, error } = await supabase
		.from("schedule")
		.select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return schedule;
}