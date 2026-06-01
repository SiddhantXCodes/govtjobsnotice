export function buildExamSchema(
    post: any
) {

    const seo =
        post.overview?.seo || {};

    return {

        "@context":
            "https://schema.org",

        "@type":
            "Article",

        headline:
            seo.title ||
            post.feed_title ||
            post.title,

        description:
            seo.description ||
            "",

        datePublished:
            post.published_at,

        dateModified:
            post.date_updated ||
            post.date_created,

        author: {
            "@type": "Organization",
            name: "GovtJobsNotice"
        },

        publisher: {
            "@type": "Organization",
            name: "GovtJobsNotice",

            logo: {
                "@type": "ImageObject",
                url: "https://govtjobsnotice.com/logo.png"
            }
        },

        mainEntityOfPage: {
            "@type": "WebPage",

            "@id":
                `https://govtjobsnotice.com/exam/${post.slug}/`
        },

        url:
            `https://govtjobsnotice.com/exam/${post.slug}/`,

        image:
            post.featured_image_url ||
            "https://govtjobsnotice.com/default-featured-image.jpg"

    };

}