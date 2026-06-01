export function buildEventSchema(
  event: any,
  exam: any,
  cycle: any
) {

  return {

    "@context":
      "https://schema.org",

    "@type":
      "NewsArticle",

    headline:
      event.seo_title ||
      event.title,

    description:
      event.seo_description ||
      event.summary,

    datePublished:
      event.published_at ||
      event.created_at,

    dateModified:
      event.updated_at ||
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
        "GovtJobsNotice",

      logo: {

        "@type":
          "ImageObject",

        url:
          "https://govtjobsnotice.com/logo.png"

      }

    },

    image:
      event.featured_image_url,

    url:
      `https://govtjobsnotice.com/exam/${exam.slug}/${cycle.year}/${event.event_type}/`,

    mainEntityOfPage: {

      "@type":
        "WebPage",

      "@id":
        `https://govtjobsnotice.com/exam/${exam.slug}/${cycle.year}/${event.event_type}/`

    }

  };

}