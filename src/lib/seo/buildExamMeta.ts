export function buildExamMeta(exam: any) {

  const title =
    exam.seo_title ||
    exam.title;

  const description =
    exam.seo_description ||
    `${exam.short_name || exam.title} exam details including eligibility, syllabus, exam pattern, selection process, important dates, salary, latest updates and official notification information.`;

  const keywords = [

    exam.title,
    exam.short_name,
    exam.category,
    exam.organization,

    "government exam",
    "government jobs",
    "sarkari exam",
    "exam notification"

  ]
    .filter(Boolean)
    .join(", ");

  return {

    title,

    description,

    canonical:
      `/exam/${exam.slug}/`,

    keywords

  };

}