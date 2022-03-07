import { Post } from "./fetch.ts";

export const format = (post: Post) => ({
  userId: post.userId,
  id: post.id,
  title: post.title,
  body: "Hello",
});
