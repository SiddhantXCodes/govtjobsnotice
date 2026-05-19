import { supabase } from "../supabase";

/* ALL POSTS */

export async function getAllPosts() {

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("latest_status_date", {
      ascending: false
    });

  if (error) {

    console.error(error);
    return [];

  }

  return data || [];

}

/* SINGLE POST */

export async function getPostBySlug(
  slug: string
) {

  const { data, error } = await supabase
    .from("posts")
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

/* LATEST POSTS */

export async function getLatestPosts(
  limit = 10
) {

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("latest_status_date", {
      ascending: false
    })
    .limit(limit);

  if (error) {

    console.error(error);
    return [];

  }

  return data || [];

}

/* FEATURED POSTS */

export async function getFeaturedPosts(
  limit = 8
) {

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("is_featured", true)
    .order("latest_status_date", {
      ascending: false
    })
    .limit(limit);

  if (error) {

    console.error(error);
    return [];

  }

  return data || [];

}

/* POSTS BY CATEGORY */

export async function getPostsByCategory(
  category: string,
  limit = 10
) {

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("category", category)
    .order("latest_status_date", {
      ascending: false
    })
    .limit(limit);

  if (error) {

    console.error(error);
    return [];

  }

  return data || [];

}

/* POSTS BY TYPE */

export async function getPostsByType(
  type: string,
  limit = 10
) {

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("post_type", type)
    .order("latest_status_date", {
      ascending: false
    })
    .limit(limit);

  if (error) {

    console.error(error);
    return [];

  }

  return data || [];

}

/* SEARCH POSTS */

export async function searchPosts(
  query: string,
  limit = 20
) {

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .ilike("title", `%${query}%`)
    .order("latest_status_date", {
      ascending: false
    })
    .limit(limit);

  if (error) {

    console.error(error);
    return [];

  }

  return data || [];

}

/* POSTS BY TAG */

export async function getPostsByTag(
  tag: string,
  limit = 10
) {

  const { data, error } =
    await supabase
      .from("posts")
      .select("*")
      .eq("status", "published")
      .order(
        "latest_status_date",
        {
          ascending:false
        }
      )
      .limit(limit);

  if(error){

    console.error(error);

    return [];

  }

  if(!data){
    return [];
  }

  /* FILTER TAGS MANUALLY */

  return data.filter((post:any)=>{

    if(!post.tags){
      return false;
    }

    /* ARRAY */

    if(Array.isArray(post.tags)){

      return post.tags.some(
        (item:string)=>

          item
            .trim()
            .toLowerCase()
            === tag.toLowerCase()

      );

    }

    return false;

  });

}