
/* =========================================
   FEED TITLE
========================================= */

export function getFeedTitle(post: any) {

  const shortName =
    post?.feed_title ||
    post?.overview?.organization?.short_name ||
    post?.overview?.post_name ||
    post?.title ||
    "";

  const totalPosts =
    post?.total_posts;

  let title = shortName;

  // if (
  //   totalPosts &&
  //   totalPosts !== "Not Applicable"
  // ) {

  //   title += ` (${totalPosts} Posts)`;

  // }

  // if (post?.current_stage) {

  //   title += ` - ${post.current_stage}`;

  // }

  return title.trim();

}

/* =========================================
   SEO TITLE
========================================= */

export function getSeoTitle(
  post: any
) {

  return (

    post?.overview?.seo?.title ||

    post?.title ||

    ""

  );

}

/* =========================================
   SEO DESCRIPTION
========================================= */

export function getSeoDescription(
  post: any
) {

  return (

    post?.overview?.seo?.description ||

    post?.excerpt ||

    ""

  );

}

/* =========================================
   ORGANIZATION
========================================= */

export function getOrganization(
  post: any
) {

  return (
    post?.overview?.organization ||
    {}
  );

}

/* =========================================
   SHORT NAME
========================================= */

export function getShortName(
  post: any
) {

  return (

    post?.overview?.organization?.short_name ||

    post?.overview?.organization?.name ||

    post?.title ||

    ""

  );

}

/* =========================================
   IMPORTANT DATES
========================================= */

export function getImportantDates(
  post: any
) {

  return Object.values(
    post?.important_dates || {}
  );

}

/* =========================================
   SECTIONS
========================================= */

export function getSections(
  post: any
) {

  return (
    post?.sections || []
  );

}

/* =========================================
   SECTION BY TITLE
========================================= */

export function getSectionByTitle(
  post: any,
  title: string
) {

  return (
    post?.sections?.find(
      (section: any) =>
        section.title === title
    ) || null
  );

}

/* =========================================
   APPLICATION FEE
========================================= */

export function getApplicationFee(
  post: any
) {

  return (
    post?.application_fee ||
    null
  );

}

/* =========================================
   AGE LIMIT
========================================= */

export function getAgeLimit(
  post: any
) {

  return (
    post?.age_limit ||
    null
  );

}

/* =========================================
   IMPORTANT LINKS
========================================= */

export function getImportantLinks(
  post: any
) {

  return (
    post?.important_links ||
    null
  );

}

/* =========================================
   FAQ
========================================= */

export function getFaq(
  post: any
) {

  return getSectionByTitle(
    post,
    "FAQ"
  );

}

/* =========================================
   TOTAL POSTS
========================================= */

export function getTotalPosts(
  post: any
) {

  return (
    post?.total_posts ||
    null
  );

}
