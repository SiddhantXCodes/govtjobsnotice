export function getClosingSoonPosts(posts: any[]) {

  const today = new Date();

  return posts
    .map(post => {

      const data =
        typeof post?.posts_data_json === "string"
          ? JSON.parse(post.posts_data_json)
          : post?.posts_data_json;

      const dates =
        data?.important_dates || [];

      const lastDate = dates.find(
        (d: any) => d.key === "last_date"
      );

      if (!lastDate?.datetime) {
        return null;
      }

      const lastDateObj =
        new Date(lastDate.datetime);

      const diffDays =
        Math.ceil(
          (
            lastDateObj.getTime() -
            today.getTime()
          ) / (1000 * 60 * 60 * 24)
        );

      return {
        post,
        diffDays,
      };

    })

    .filter(Boolean)

    // only upcoming / active
    .filter((item: any) =>
      item.diffDays >= 0
    )

    // nearest date first
    .sort((a: any, b: any) =>
      a.diffDays - b.diffDays
    )

    // limit 10
    .slice(0, 10);
}