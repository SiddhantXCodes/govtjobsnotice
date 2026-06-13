export function buildArchiveSeo({
    title,
    description,
    canonical,
}: {
    title: string;
    description: string;
    canonical: string;
}) {
    const fullUrl =
        `https://govtjobsnotice.com${canonical}`;

    return {
        title,

        description,

        canonical,

        ogType: "website",

        ogImage:
            "https://govtjobsnotice.com/default-og.jpg",

        schema: [
            {
                "@context": "https://schema.org",

                "@type": "CollectionPage",

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
    };
}