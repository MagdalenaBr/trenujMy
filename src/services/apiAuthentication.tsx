import supabase from "./supabase";

export async function userLogIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Wystąpił problem z logowaniem, spróbuj ponownie");

  return data;
}

export async function loggedUser() {
  const { data: currentSession } = await supabase.auth.getSession();

  if (!currentSession) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error)
    throw new Error("Wystąpił błąd podczas pobierania danych użytkownika");

  return user;
}

export async function userLogOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error("Wystąpił błąd podczas wylogowywania.");
}

export async function userSigUp(email, password, name) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userName: name,
      },
    },
  });

  if (error)
    throw new Error("Wystąpił błąd podczas dodawania nowego użytkownika.");
  return data;
}
