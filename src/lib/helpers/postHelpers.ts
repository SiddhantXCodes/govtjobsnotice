export function getFeedTitle(post: any) {

  const overview =
    typeof post?.posts_data_json === "string"
      ? JSON.parse(post.posts_data_json)?.overview
      : post?.posts_data_json?.overview;

  const shortName =
    overview?.short_name ||
    overview?.short_title ||
    post?.title ||
    "";

  let currentStage = "";

  // CASE 1: object
  if (
    post?.current_stage &&
    typeof post.current_stage === "object"
  ) {
    currentStage =
     
      post.current_stage.value ||
      "";
  }

  // CASE 2: string
  else if (
    typeof post?.current_stage === "string"
  ) {
    currentStage = post.current_stage;
  }

  const totalPosts =
    overview?.total_posts;

 let title = shortName;

if (
  totalPosts &&
  totalPosts !== "Not Applicable"
) {
  title += ` (${totalPosts} Posts)`;
}

if (currentStage) {
  title += ` - ${currentStage}`;
}

  return title.trim();
}
/*===================================
   SAFE POST DATA PARSER
========================================= */

export function parsePostData(post: any) {

  try {

    return typeof post?.posts_data_json === "string"
      ? JSON.parse(post.posts_data_json)
      : post?.posts_data_json || {};

  } catch (error) {

    return {};

  }

}

/* =========================================
   OVERVIEW
========================================= */

export function getOverview(post: any) {

  return parsePostData(post)?.overview || {};

}

/* =========================================
   SHORT NAME
========================================= */

export function getShortName(post: any) {

  return (
    getOverview(post)?.short_name
    || getOverview(post)?.title
    || post?.title
    || ""
  );

}

/* =========================================
   SEO TITLE
========================================= */

export function getSeoTitle(post: any) {

  return (
    getOverview(post)?.seo?.title
    || getOverview(post)?.title
    || post?.title
    || ""
  );

}

/* =========================================
   SEO DESCRIPTION
========================================= */

export function getSeoDescription(post: any) {

  return (
    getOverview(post)?.seo?.description
    || post?.excerpt
    || ""
  );

}

/* =========================================
   IMPORTANT DATES
========================================= */

export function getImportantDates(post: any) {

  return (
    parsePostData(post)?.important_dates
    || []
  );

}

/* =========================================
   SINGLE IMPORTANT DATE
========================================= */

export function getImportantDate(
  post: any,
  key: string
) {

  return getImportantDates(post)
    .find(
      (item: any) => item.key === key
    );

}

/* =========================================
   APPLICATION START DATE
========================================= */

export function getApplicationStartDate(post: any) {

  return getImportantDate(
    post,
    "apply_start"
  );

}

/* =========================================
   APPLICATION END DATE
========================================= */

export function getApplicationEndDate(post: any) {

  return getImportantDate(
    post,
    "last_date"
  );

}

/* =========================================
   EXAM DATE
========================================= */

export function getExamDate(post: any) {

  return getImportantDate(
    post,
    "exam_date"
  );

}

/* =========================================
   RESULT DATE
========================================= */

export function getResultDate(post: any) {

  return getImportantDate(
    post,
    "result"
  );

}

/* =========================================
   ADMIT CARD DATE
========================================= */

export function getAdmitCardDate(post: any) {

  return getImportantDate(
    post,
    "admit_card"
  );

}

/* =========================================
   ANSWER KEY DATE
========================================= */

export function getAnswerKeyDate(post: any) {

  return getImportantDate(
    post,
    "answer_key"
  );

}

/* =========================================
   APPLICATION FEE
========================================= */

export function getApplicationFee(post: any) {

  return (
    parsePostData(post)?.application_fee
    || null
  );

}

/* =========================================
   AGE LIMIT
========================================= */

export function getAgeLimit(post: any) {

  return (
    parsePostData(post)?.age_limit
    || null
  );

}

/* =========================================
   VACANCIES
========================================= */

export function getVacancies(post: any) {

  return (
    parsePostData(post)?.vacancies
    || null
  );

}

/* =========================================
   ELIGIBILITY
========================================= */

export function getEligibility(post: any) {

  return (
    parsePostData(post)?.eligibility
    || null
  );

}

/* =========================================
   SELECTION PROCESS
========================================= */

export function getSelectionProcess(post: any) {

  return (
    parsePostData(post)?.selection_process
    || null
  );

}

/* =========================================
   HOW TO APPLY
========================================= */

export function getHowToApply(post: any) {

  return (
    parsePostData(post)?.how_to_apply
    || null
  );

}

/* =========================================
   IMPORTANT LINKS
========================================= */

export function getImportantLinks(post: any) {

  return (
    parsePostData(post)?.important_links
    || []
  );

}

/* =========================================
   FAQ
========================================= */

export function getFaq(post: any) {

  return (
    parsePostData(post)?.faq
    || []
  );

}
