import { NewClassesTypes, NewScheduleTypes, ScheduleDataTypes } from "../types/scheduleTypes";
import supabase from "./supabase";

export async function getSchedule(
  scheduleDataType?: string,
): Promise<ScheduleDataTypes[]> {
  const currentDate = new Date().toJSON().slice(0, 19);
 
  let query = supabase
    .from("schedule")
    .select("*, trainers(name, category)")
    .order("date", { ascending: true });

  if (scheduleDataType) query = query.gte("date", currentDate);
  const { data: schedule, error } = await query;
  if (error) throw new Error("Dane nie mogą zostać załadowane.");
  return schedule;
}

export async function addOrEditSchedule(
  newClasses: NewClassesTypes,
  id?: string,
): Promise<NewScheduleTypes> {
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
