import supabase from "./supabase";

export async function getOpenHours() {
	const { data: openHours, error } = await supabase
		.from("openHours")
		.select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return openHours;
}

export async function editOpenHours(newHours, id) {
	console.log(newHours, id);
	const { data, error } = await supabase
		.from("openHours")
		.update({ ...newHours })
		.eq('id', id)
		.select()
		.single();
	if (error) {
		throw new Error("Wystąpił błąd, godziny otwarcia nie zostały zmienione.");
	}
	return data;
}
