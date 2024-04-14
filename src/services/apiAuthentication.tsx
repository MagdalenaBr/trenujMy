import supabase from "./supabase";

export async function userLogIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Wystąpił problem z logowaniem, spróbuj ponownie");

  return data;
}
