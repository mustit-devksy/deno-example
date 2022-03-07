import { Context, Router } from "https://deno.land/x/oak/mod.ts";

import * as posts from "./posts.ts";

const router = new Router();

router
  .get("/", (context: Context) => {
    context.response.body = "Hello deno, oak";
  })
  .get("/posts", posts.getPosts)
  .get("/posts/:id", posts.getPostById);

export default router;
