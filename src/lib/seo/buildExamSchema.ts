export function buildExamSchema(
    exam: any
) {

    return {

        "@context":
            "https://schema.org",

        "@type":
            "Article",

        headline:
            exam.seo_title || exam.title,

        description:
            exam.seo_description,

        author: {
            "@type": "Organization",
            name: "GovtJobsNotice"
        },

        publisher: {
            "@type": "Organization",
            name: "GovtJobsNotice"
        },

        mainEntityOfPage: {
            "@type": "WebPage",

            "@id":
                `https://govtjobsnotice.com/exam/${exam.slug}/`
        }

    };

}