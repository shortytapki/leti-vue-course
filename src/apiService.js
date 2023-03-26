import axios from 'axios';

export const getLatestPosts = async () => {
  const response = await axios.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
  );

  const postIds = response.data.slice(0, 10);

  let posts = [];
  for (const id of postIds) {
    const response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    const post = response.data;
    posts.push(post);
  }

  return posts;
};
