export function buildEventMeta(
  event: any,
  exam: any,
  cycle: any
) {

  const title =
    `${event.title} | ${exam.short_name}`;

  const description =
    event.summary ||
    `${event.title} latest update`;

  const canonical =
    `/exam/${exam.slug}/${cycle.year}/${event.event_type}`;

  const keywords = [

    exam.short_name,
    event.title,
    `${exam.short_name} ${cycle.year}`,
    `${event.event_type} update`,
    "government jobs",
    "latest govt jobs"

  ].join(", ");

  return {

    title,
    description,
    canonical,
    keywords

  };

}