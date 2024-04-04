import dotenv from "dotenv";
dotenv.config({ path: "/server/.env" });
import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", serveStatic({ root: "../client/dist/" }));

console.log(`Server running on port ${process.env.PORT}`);

export default {
  fetch: app.fetch,
  port: process.env.PORT,
};
