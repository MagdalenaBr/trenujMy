import supabase from "./supabase";

interface NewHoursTypes {
	openHour: string;
	closeHour: string;
}
interface HoursTypes extends NewHoursTypes {
	created_at: string;
	id: number;
}

export async function getOpenHours(): Promise<HoursTypes[]> {
	const { data: openHours, error } = await supabase
		.from("openHours")
		.select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	console.log(openHours);
	return openHours;
}

export async function editOpenHours(
	newHours: NewHoursTypes,
	id: number
): Promise<HoursTypes> {
	const { data, error } = await supabase
		.from("openHours")
		.update({ ...newHours })
		.eq("id", id)
		.select()
		.single();
	if (error) {
		throw new Error("Wystąpił błąd, godziny otwarcia nie zostały zmienione.");
	}
	return data;
}
