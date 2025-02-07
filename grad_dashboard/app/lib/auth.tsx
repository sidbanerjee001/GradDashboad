import { supabase } from "../lib/supabaseClient";

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const getUser = async () => {
  const { data } = await supabase.auth.getUser();
  return data.user;
};

export const signOut = async () => {
    await supabase.auth.signOut();
  };
  