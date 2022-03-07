// deno test --allow-read standard/hello-test.ts

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("title", () => {
  const h1 = "Hello Deno";
  assertEquals(h1, "Hello Deno");
});

Deno.test({ name: "hello world #5", permissions: { read: true } }, () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});
