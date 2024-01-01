import supabase, { supabaseUrl } from "./supabase";
import { v4 as uuidv4 } from "uuid";

type TrainersType = {
	id: number;
	name: string;
	category: string;
	price: string;
	phone: number;
	image: File | null;
};

export async function getTrainers(): Promise<TrainersType[]> {
	const { data: trainers, error } = await supabase.from("trainers").select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return trainers;
}

export async function addTrainers(newTrainer: TrainersType) {
	if (newTrainer.image === null) return;
	const imageName = uuidv4() + newTrainer.image.name;
	const imagePath = `${supabaseUrl}/storage/v1/object/public/trainersimage/${imageName}`;

	const { data, error } = await supabase
		.from("trainers")
		.insert([{ ...newTrainer, image: imagePath }]);

	if (error) throw new Error("Wystąpił błąd, dane trenera nie zostały dodane.");

	///upload image
	const { error: storageError } = await supabase.storage
		.from("trainersimage")
		.upload(imageName, newTrainer.image);

	if (storageError)
		throw new Error("Wystąpił błąd, zdjęcie nie zostało dodane.");
	return data;
}

export async function deleteTrainer(id) {
	console.log(id);
	const { error } = await supabase.from("trainers").delete().eq("id", id);
	if (error) {
		console.log(error);
		throw new Error("Trener nie mógł zostać usunięty");
	}
}
