import supabase, { supabaseUrl } from "./supabase";
import { v4 as uuidv4 } from "uuid";

type TrainersType = {
	id?: number;
	name: string;
	category: string;
	price: string;
	phone: string;
	image: string;
};

export async function getTrainers(): Promise<TrainersType[]> {
	const { data: trainers, error } = await supabase.from("trainers").select("*");
	if (error) throw new Error("Dane nie mogą zostać załadowane.");
	return trainers;
}

export async function addOrEditTrainers(newTrainer: TrainersType, id?: number) {
	const hasImage = typeof newTrainer.image === "string";
	const imageName = uuidv4() + newTrainer?.image?.name;

	const imagePath = hasImage
		? newTrainer.image
		: `${supabaseUrl}/storage/v1/object/public/trainersimage/${imageName}`;

	let query = supabase.from("trainers");

	//ADD TRAINER
	if (!id) query = query.insert([{ ...newTrainer, image: imagePath }]);
	//EDIT TRAINER
	if (id)
		query = query.update({ ...newTrainer, image: imagePath }).eq("id", id);

	const { data, error } = await query.select().single();

	if (error) throw new Error("Wystąpił błąd, dane trenera nie zostały dodane.");

	if (hasImage) return data;

	///upload image
	if (newTrainer.image === undefined) return;
	const { error: storageError } = await supabase.storage
		.from("trainersimage")
		.upload(imageName, newTrainer.image);

	if (storageError)
		throw new Error("Wystąpił błąd, zdjęcie nie zostało dodane.");
	return data;
}

export async function deleteTrainer(id: number) {
	const { error } = await supabase.from("trainers").delete().eq("id", id);
	if (error) {
		throw new Error("Wystapił błąd. Trener nie został usunięty.");
	}
}
