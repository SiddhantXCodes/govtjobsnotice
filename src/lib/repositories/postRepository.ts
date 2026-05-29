
import { supabase } from "../supabase";

/* =========================================
   BASE QUERY
========================================= */

const baseQuery = () =>
  supabase
    .from("posts")
    .select("*")
    .eq("status", "published");

/* =========================================
   ALL POSTS
========================================= */

export async function getAllPosts() {

  const { data, error } = await baseQuery()
    .order("published_at", {
      ascending: false,
    });

  if (error) {

    console.error(
      "getAllPosts Error:",
      error
    );

    return [];

  }

  return data || [];

}

/* =========================================
   SINGLE POST
========================================= */

export async function getPostBySlug(
  slug: string
) {

  const { data, error } = await baseQuery()
    .eq("slug", slug)
    .single();

  if (error) {

    console.error(
      "getPostBySlug Error:",
      error
    );

    return null;

  }

  return data;

}

/* =========================================
   LATEST POSTS
========================================= */

export async function getLatestPosts(
  limit = 10
) {

  const { data, error } = await baseQuery()
    .order("published_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {

    console.error(
      "getLatestPosts Error:",
      error
    );

    return [];

  }

  return data || [];

}

/* =========================================
   FEATURED POSTS
========================================= */

export async function getFeaturedPosts(
  limit = 8
) {

  const { data, error } = await baseQuery()
    .eq("is_featured", true)
    .order("published_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {

    console.error(
      "getFeaturedPosts Error:",
      error
    );

    return [];

  }

  return data || [];

}

/* =========================================
   POSTS BY CATEGORY
========================================= */

export async function getPostsByCategory(
  category: string,
  limit = 10
) {

  const { data, error } = await baseQuery()
    .eq("category", category)
    .order("published_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {

    console.error(
      "getPostsByCategory Error:",
      error
    );

    return [];

  }

  return data || [];

}

/* =========================================
   POSTS BY TYPE
========================================= */

export async function getPostsByType(
  type: string,
  limit = 10
) {

  const { data, error } = await baseQuery()
    .eq("post_type", type)
    .order("published_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {

    console.error(
      "getPostsByType Error:",
      error
    );

    return [];

  }

  return data || [];

}

/* =========================================
   SEARCH POSTS
========================================= */

export async function searchPosts(
  query: string,
  limit = 20
) {

  const cleanQuery = query.trim();

  if (!cleanQuery) {
    return [];
  }

  const { data, error } = await baseQuery()
    .ilike(
      "title",
      `%${cleanQuery}%`
    )
    .order("published_at", {
      ascending: false,
    })
    .limit(limit);

  if (error) {

    console.error(
      "searchPosts Error:",
      error
    );

    return [];

  }

  return data || [];

}

/* =========================================
   POSTS BY TAG
========================================= */

export async function getPostsByTag(
  tag: string,
  limit = 10
) {

  const normalizedTag =
    tag
      .trim()
      .toLowerCase();

  const { data, error } = await baseQuery()
    .order("published_at", {
      ascending: false,
    });

  if (error) {

    console.error(
      "getPostsByTag Error:",
      error
    );

    return [];

  }

  if (!data?.length) {
    return [];
  }

  const filtered = data.filter(
    (post: any) => {

      if (
        !post?.tags ||
        !Array.isArray(post.tags)
      ) {

        return false;

      }

      return post.tags.some(
        (item: string) =>

          item
            ?.trim()
            ?.toLowerCase()
          === normalizedTag

      );

    }
  );

  return filtered.slice(0, limit);

}
