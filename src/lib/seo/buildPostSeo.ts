export function buildPostSeo(post: any) {
    const seoTitle =
        post?.overview?.seo?.title ||
        post?.seo_title ||
        post?.title;

    const description =
        post?.overview?.seo?.description ||
        post?.seo_description ||
        post?.summary ||
        post?.title;

    const canonical =
        `/${post.slug}/`;

    const fullUrl =
        `https://govtjobsnotice.com${canonical}`;

    const schemas: any[] = [];

    /* ARTICLE SCHEMA */

    schemas.push({
        "@context": "https://schema.org",

        "@type": "NewsArticle",

        headline: seoTitle,

        description,

        image: post?.featured_image_url
            ? [post.featured_image_url]
            : [],

        datePublished:
            post?.published_at,

        dateModified:
            post?.date_updated ||
            post?.published_at,

        articleSection:
            post?.category,

        author: {
            "@type": "Organization",

            name: "GovtJobsNotice",
        },

        publisher: {
            "@type": "Organization",

            name: "GovtJobsNotice",

            logo: {
                "@type": "ImageObject",

                url: "https://govtjobsnotice.com/logo.png",
            },
        },

        url: fullUrl,

        mainEntityOfPage: {
            "@type": "WebPage",

            "@id": fullUrl,
        },
    });

    /* BREADCRUMB SCHEMA */

    schemas.push({
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        itemListElement: [
            {
                "@type": "ListItem",

                position: 1,

                name: "Home",

                item: "https://govtjobsnotice.com/",
            },

            {
                "@type": "ListItem",

                position: 2,

                name:
                    post?.category
                        ?.replaceAll("-", " ")
                        ?.replace(/\b\w/g, (c: string) =>
                            c.toUpperCase(),
                        ) || "Category",

                item:
                    `https://govtjobsnotice.com/${post.category}/`,
            },

            {
                "@type": "ListItem",

                position: 3,

                name: post.title,

                item: fullUrl,
            },
        ],
    });

    return {
        title:
            `${seoTitle} | GovtJobsNotice`,

        description,

        canonical,

        ogType: "article",

        ogImage:
            post?.featured_image_url?.replace(
                "/upload/",
                "/upload/f_auto,q_auto/",
            ) ||
            "https://govtjobsnotice.com/default-og.jpg",

        publishedTime:
            post?.published_at,

        modifiedTime:
            post?.date_updated ||
            post?.published_at,

        schema: schemas,
    };
}