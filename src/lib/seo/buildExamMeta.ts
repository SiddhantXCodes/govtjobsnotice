export function buildExamMeta(
    exam: any
) {

    return {

        title:
            exam.seo_title || exam.title,

        description:
            exam.seo_description,

        canonical:
            `/exam/${exam.slug}/`,

        keywords: [

            exam.title,

            exam.short_name,

            `${exam.short_name} syllabus`,

            `${exam.short_name} eligibility`,

            `${exam.short_name} salary`,

            `${exam.short_name} exam pattern`,

            "government jobs",

            "latest govt jobs",

            "sarkari result"

        ].join(", ")

    };

}