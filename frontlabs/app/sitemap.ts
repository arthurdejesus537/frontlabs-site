import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

const routes = ["", "/how-it-works", "/what-you-get", "/pricing", "/questions"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly", priority: path ? 0.8 : 1 }));
}
