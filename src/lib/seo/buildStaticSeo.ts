export function buildStaticSeo({
    title,
    description,
    slug,
    type = "WebPage",
}: {
    title: string;
    description: string;
    slug: string;
    type?: string;
}) {
    const canonical = `/${slug}/`;

    const fullUrl =
        `https://govtjobsnotice.com${canonical}`;

    return {
        title,

        description,

        canonical,

        schema: [
            {
                "@context": "https://schema.org",

                "@type": type,

                name: title,

                description,

                url: fullUrl,

                publisher: {
                    "@type": "Organization",

                    name: "GovtJobsNotice",
                },
            },

            {
                "@context": "https://schema.org",

                "@type": "BreadcrumbList",

                itemListElement: [
                    {
                        "@type": "ListItem",

                        position: 1,

                        name: "Home",

                        item:
                            "https://govtjobsnotice.com/",
                    },

                    {
                        "@type": "ListItem",

                        position: 2,

                        name: title,

                        item: fullUrl,
                    },
                ],
            },
        ],

        ogType: "website",

        ogImage:
            "https://govtjobsnotice.com/default-og.jpg",
    };
}