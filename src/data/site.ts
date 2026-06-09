import type { IndustrySlug, NavItem, SisterSite } from "@/src/types/content";

export const siteUrl = "https://china-industry-belt-map.vercel.app";
export const siteName = "China Industry Belt Map";

export const navigationItems: NavItem[] = [
  { label: "Map", href: "/" },
  { label: "Regions", href: "/#regions" },
  { label: "Industries", href: "/#industries" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const sisterSites: SisterSite[] = [
  {
    label: "China Sourcing Guide",
    href: "https://china-sourcing-guide-wubos-projects-aa8f60e6.vercel.app",
    description: "Practical sourcing workflows, factory vetting, and negotiation basics.",
  },
  {
    label: "Job Hunting Guide",
    href: "https://job-hunting-guide-wubos-projects-aa8f60e6.vercel.app",
    description: "Career and market-entry research content with the same report-style density.",
  },
  {
    label: "Personal Finance Guide",
    href: "https://personal-finance-beginners-guide.vercel.app",
    description: "Another editorial-style resource site built for trust and long-form utility.",
  },
];

export const quickFilters: Array<{ label: string; slug: IndustrySlug }> = [
  { label: "Electronics & Tech", slug: "electronics" },
  { label: "Textile & Apparel", slug: "textile-apparel" },
  { label: "Auto & Machinery", slug: "auto-machinery" },
  { label: "Furniture & Home", slug: "furniture-home" },
  { label: "Food & Agri", slug: "food-agri" },
  { label: "Raw Materials", slug: "raw-materials" },
];
