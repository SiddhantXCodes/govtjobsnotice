export function buildExamSchema(
  exam: any
) {

  return {

    "@context":
      "https://schema.org",

    "@type":
      "EducationalOccupationalProgram",

    name:
      exam.title,

    description:
      exam.seo_description ||
      exam.title,

    provider: {

      "@type":
        "Organization",

      name:
        exam.organization

    },

    url:
      `https://govtjobsnotice.com/exam/${exam.slug}/`

  };

}