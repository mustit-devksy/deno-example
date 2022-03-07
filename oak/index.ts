// deno run --allow-net oak/index.ts
// deno bundle ./oak/index.ts server.bundle.js
// deno compile --unstable --allow-read --allow-net index.ts -p 8080

import { Application } from "https://deno.land/x/oak/mod.ts";

import router from "./routes/index.ts";
import logger from "./middleware/logger.ts";
import timing from "./middleware/timing.ts";

const app = new Application();

app.use(logger);
app.use(timing);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is listening on port 8080`);
await app.listen({ port: 8080 });
