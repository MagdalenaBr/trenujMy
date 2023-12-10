import supabase, { supabaseUrl } from "./supabase";

type TrainersType = {
	name: string;
	category: string;
	price: string;
	phone: number;
	photo: string;
}[];

export async function getTrainers(): Promise<TrainersType> {
	const { data: trainers, error } = await supabase.from("trainers").select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return trainers;
}

export async function addTrainers(
	newTrainer: TrainersType
): Promise<TrainersType> {

	const imagePath = `${supabaseUrl}/storage/v1/object/public/trainers-image/`
	const { data, error } = await supabase
		.from("trainers")
		.insert([newTrainer])
		.select();

	if (error) throw new Error("Dane nie mogą zostać dodane.");
	return data;
}
