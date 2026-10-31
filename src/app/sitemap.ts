import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/projects";
import { nav, site } from "@/content/site";
import { work } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...nav.map((item) => item.href),
    ...work.map((item) => `/work/${item.slug}`),
    ...caseStudies.map((item) => `/projects/${item.slug}`),
  ];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
