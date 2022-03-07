import { Context, helpers, Status } from "https://deno.land/x/oak/mod.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";

const apiUrl = "https://jsonplaceholder.typicode.com";

export const getPosts = async (context: Context): Promise<void> => {
  const { data } = await axiod.get(`${apiUrl}/posts`);
  context.response.body = data;
};

export const getPostById = async (context: Context): Promise<void> => {
  const { id } = helpers.getQuery(context, { mergeParams: true });

  const { data } = await axiod.get(`${apiUrl}/posts/${id}`);
  if (Object.keys(data).length > 0) {
    context.response.body = data;
  } else {
    context.throw(Status.NotFound, "Not found user");
  }
};
