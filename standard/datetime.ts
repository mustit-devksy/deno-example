// deno lint standard/datetime

import { parse } from "https://deno.land/std/datetime/mod.ts";
let date = parse("2022-03-06", "yyyy-mm-dd");

console.log(date);
