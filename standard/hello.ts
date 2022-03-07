// deno run --allow-read --allow-net standard/hello.ts

import { config } from "https://deno.land/x/dotenv/mod.ts";

const listener = Deno.listen({ port: parseInt(config()["PORT"]) });
console.log("listening on port 8080 !");

for await (const conn of listener) {
  (async () => {
    const requests = Deno.serveHttp(conn);
    for await (const { respondWith } of requests) {
      respondWith(new Response("Hello Deno !!"));
    }
  })();
}
