import { supabase } from "../supabase";

export async function getFooterExams() {

  const { data, error } =
    await supabase
      .from("exams")
      .select(`
        title,
        short_name,
        slug,
        category,
        current_year
      `)
      .eq("status", "published");

  if (error) {

    console.error(error);

    return [];

  }

  return data || [];

}