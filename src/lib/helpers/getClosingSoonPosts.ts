
export function getClosingSoonPosts(
  posts: any[]
) {

  const today = new Date();

  return posts

    .map((post) => {

      const endDateString =
        post?.important_dates
          ?.application_end
          ?.date;

      if (!endDateString) {
        return null;
      }

      const endDate =
        new Date(endDateString);

      const diffDays =
        Math.ceil(
          (
            endDate.getTime() -
            today.getTime()
          ) / 86400000
        );


      return {
        post,
        diffDays,
      };
    })
    .filter(Boolean)
    .filter(
      (item: any) =>
        item.diffDays >= 0
    )
    .sort(
      (a: any, b: any) =>
        a.diffDays - b.diffDays
    )
    .slice(0, 10);
}
