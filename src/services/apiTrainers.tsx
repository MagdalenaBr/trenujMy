import supabase, { supabaseUrl } from "./supabase";
import { v4 as uuidv4 } from "uuid";

interface TrainersDataTypes {
  id: number;
  image: string;
  name: string;
  phone: string;
  price: number;
  category: string;
  created_at: string;
}
interface NewTrainerDataTypes {
  image: string | FileList;
  name: string;
  phone: string;
  price: number;
  category: string;
}

export async function getTrainers(sortValue: {
  name: string;
  value: string | null;
}) {
  let query = supabase.from("trainers");

  //   if (sortValue) query = query.select().eq(sortValue.name, sortValue.value);
  //   if (!sortValue) query = query.select("*");

  //   const { data: trainers, error } = await query;
  console.log(sortValue);

  if (sortValue.value !== null) {
    const { data: trainers, error } = await supabase
      .from("trainers")
      .select()
      .eq(sortValue.name, sortValue.value);
    if (error) throw new Error("Dane nie mogą zostać załadowane.");
    return trainers;
  } else {
    const { data: trainers, error } = await supabase
      .from("trainers")
      .select("*");
    if (error) throw new Error("Dane nie mogą zostać załadowane.");
    return trainers;
  }
  // console.log(sortValue);
  //   if (sortValue.value === null) {
  //     const { data: trainers, error } = await supabase
  //       .from("trainers")
  //       .select("*");
  //     if (error) throw new Error("Dane nie mogą zostać załadowane.");
  //     return trainers;
  //   }
}

export async function addOrEditTrainers(
  newTrainer: NewTrainerDataTypes,
  id?: number,
): Promise<TrainersDataTypes> {
  const hasImage = typeof newTrainer.image === "string";
  let imageName;
  if (newTrainer.image instanceof File) {
    imageName = uuidv4() + newTrainer?.image?.name;
    ///upload image

    const { error: storageError } = await supabase.storage
      .from("trainersimage")
      .upload(imageName, newTrainer.image);
    if (storageError)
      throw new Error("Wystąpił błąd, zdjęcie nie zostało dodane.");
  }
  const imagePath = hasImage
    ? newTrainer.image
    : `${supabaseUrl}/storage/v1/object/public/trainersimage/${imageName}`;

  let query;
  //ADD TRAINER
  if (!id)
    query = supabase
      .from("trainers")
      .insert([{ ...newTrainer, image: imagePath }]);
  //EDIT TRAINER
  if (id)
    query = supabase
      .from("trainers")
      .update({ ...newTrainer, image: imagePath })
      .eq("id", id);

  if (query === undefined)
    throw new Error("Wystąpił błąd, dane trenera nie zostały dodane.");

  const { data, error } = await query.select().single();
  if (error) throw new Error("Wystąpił błąd, dane trenera nie zostały dodane.");
  return data;
}

export async function deleteTrainer(id: number) {
  const { error } = await supabase.from("trainers").delete().eq("id", id);
  if (error) {
    throw new Error("Wystapił błąd. Trener nie został usunięty.");
  }
}

// export async function getOneTrainer(id: number) {
// 	// if (!id) return null;
// 	const { data: trainers, error } = await supabase
// 		.from("trainers")
// 		.select("id, name")
// 		.eq("id", id)
// 		.single();
// 	if (error) throw new Error("Trener nie został znaleziony.");
// 	return trainers;
// }
