import { supabase }
    from "../supabase";

/* ALL EXAMS */

export async function getAllExams() {

    const { data, error } =
        await supabase
            .from("exams")
            .select("*")
            .eq("status", "published")
            .order("title", {
                ascending: true
            });

    if (error) {

        console.error(error);

        return [];

    }

    return data || [];

}

/* SINGLE EXAM */

export async function getExamBySlug(
    slug: string
) {

    const { data, error } =
        await supabase
            .from("exams")
            .select("*")
            .eq("slug", slug)
            .eq("status", "published")
            .single();

    if (error) {

        console.error(error);

        return null;

    }

    return data;

}

/* EXAM POSTS */

export async function getExamPosts(
    examId: string,
    limit = 20
) {

    const { data, error } =
        await supabase
            .from("posts")
            .select("*")
            .eq("status", "published")
            .eq("related_exam", examId)
            .order(
                "published_at",
                {
                    ascending: false
                }
            )
            .limit(limit);

    if (error) {

        console.error(error);

        return [];

    }

    return data || [];

}