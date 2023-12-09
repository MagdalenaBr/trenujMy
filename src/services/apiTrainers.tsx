import supabase from "./supabase";

type TrainersType = {
	category: string;
	image: string;
	id: number;
	name: string;
	phone: number;
	price: number;
}[];

export async function getTrainers(): Promise<TrainersType> {
	const { data: trainers, error } = await supabase.from("trainers").select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return trainers;
}

export async function addTrainers(newTrainer) :Promise<TrainersType> {
	console.log(newTrainer);
	const { data, error } = await supabase
		.from("trainers")
		.insert([newTrainer])
		.select();

	if (error) throw new Error("Dane nie mogą zostać dodane.");
	return data;
}
