export function buildExamMeta(
    post: any
) {

    const seo =
        post.overview?.seo || {};

    const title =
        seo.title ||
        post.feed_title ||
        post.title ||
        "";

    const description =
        seo.description ||
        post.intro_content?.replace(/<[^>]*>/g, "")
            ?.substring(0, 160) ||
        "";

    const keywords = [

        post.title,

        post.feed_title,

        ...(post.tags || []),

        "government jobs",
        "latest govt jobs",
        "sarkari result",
        "govt jobs 2026",
        "online form",
        "recruitment"

    ]
        .filter(Boolean)
        .join(", ");

    return {

        title,

        description,

        canonical:
            `/exam/${post.slug}/`,

        keywords

    };

}