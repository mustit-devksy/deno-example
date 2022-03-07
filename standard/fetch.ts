// deno run --allow-net standard/fetch.ts

// 상대경로
import { format } from "./fetch-format.ts";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Top-level await
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data: Post[] = await res.json();
console.log(data.map(format));
