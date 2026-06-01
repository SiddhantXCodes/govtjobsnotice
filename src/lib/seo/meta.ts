export function buildEventMeta(
  event: any,
  exam: any,
  cycle: any
) {

  const title =
    event.seo_title ||
    `${event.title} ${cycle.year} - ${exam.short_name}`;

  const description =
    event.seo_description ||
    event.summary ||
    `${event.title} for ${exam.short_name} ${cycle.year}. Check important dates, eligibility, selection process, exam pattern, syllabus, admit card, result and latest updates.`;

  const canonical =
    `/exam/${exam.slug}/${cycle.year}/${event.event_type}/`;

  const keywords = [

    exam.name,
    exam.short_name,

    event.title,

    `${exam.short_name} ${cycle.year}`,

    `${exam.short_name} ${event.event_type}`,

    `${exam.short_name} notification`,
    `${exam.short_name} admit card`,
    `${exam.short_name} result`,
    `${exam.short_name} answer key`,
    `${exam.short_name} exam date`,

    "government jobs",
    "latest govt jobs",
    "sarkari result"

  ].join(", ");

  return {

    title,
    description,
    canonical,
    keywords

  };

}