// deno run --allow-net third-party/axiod.ts

import axiod from "https://deno.land/x/axiod/mod.ts";

const { data } = await axiod.get(
  "https://jsonplaceholder.typicode.com/posts/1"
);
console.log("data > ", data);
