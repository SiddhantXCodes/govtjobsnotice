export function buildEventSchema(
  event: any,
  exam: any,
  cycle: any
) {

  return {

    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline:
      event.title,

    description:
      event.summary,

    datePublished:
      event.created_at,

    dateModified:
      event.created_at,

    author: {

      "@type":
        "Organization",

      name:
        "GovtJobsNotice"

    },

    publisher: {

      "@type":
        "Organization",

      name:
        "GovtJobsNotice"

    },

    mainEntityOfPage: {

      "@type":
        "WebPage",

      "@id":
        `/exam/${exam.slug}/${cycle.year}/${event.event_type}`

    }

  };

}