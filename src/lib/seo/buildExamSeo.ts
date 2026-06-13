export function buildExamSeo(exam: any) {
    const canonical = `/exam/${exam.slug}/`;

    const title =
        exam.seo_title ||
        `${exam.short_name || exam.title} ${exam.current_year || ""} | GovtJobsNotice`;

    const description =
        exam.seo_description ||
        `${exam.short_name || exam.title} exam details including eligibility, syllabus, exam pattern, selection process, salary, important dates and latest updates.`;

    const schema = [
        {
            "@context": "https://schema.org",

            "@type": "EducationalOccupationalProgram",
educationalCredentialAwarded:
  "Graduate Level Government Recruitment",
  occupationalCategory:
  exam.category,
            name: exam.title,

            description,

            provider: {
                "@type": "Organization",

                name: exam.organization,
            },

            url: `https://govtjobsnotice.com${canonical}`,

            sameAs: exam.official_website,
        },

        {
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
                    name: exam.short_name || exam.title,
                    item: `https://govtjobsnotice.com${canonical}`,
                },
            ],
        },
    ];

    return {
        title,
        description,
        canonical,

        ogType: "article",

        ogImage:
            exam.featured_image ||
            "https://govtjobsnotice.com/default-og.jpg",
        publishedTime:
            exam.published_at,
        modifiedTime:
            exam.date_updated ||
            exam.published_at,

        schema,
    };
}