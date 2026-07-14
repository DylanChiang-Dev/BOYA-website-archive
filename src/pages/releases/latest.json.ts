import type { APIRoute } from "astro";
import { releaseManifest } from "../../data/release";

export const prerender = true;

export const GET: APIRoute = () => new Response(JSON.stringify(releaseManifest, null, 2), {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=300",
  },
});
