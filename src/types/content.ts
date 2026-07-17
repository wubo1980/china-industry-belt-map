export type RegionSlug =
  | "pearl-river-delta"
  | "yangtze-river-delta"
  | "beijing-tianjin-hebei"
  | "central-china"
  | "sichuan-chongqing"
| "fujian-coast"
;

export type IndustrySlug =
  | "electronics"
  | "textile-apparel"
  | "auto-machinery"
  | "furniture-home"
  | "food-agri"
  | "raw-materials";

export type BlogSlug =
  | "china-inland-manufacturing-shift-2026"
  | "how-to-visit-yiwu-market-guide"
  | "top-10-sourcing-mistakes-china"
  | "plan-10-day-factory-tour-china"
  | "china-factory-vetting-by-region"
  | "canton-fair-autumn-2026-buyer-preparation-guide"
  | "quality-control-when-sourcing-from-china"
  | "uflpa-compliance-china-sourcing-2026"
  | "sourcing-chengdu-chongqing-guide"
  | "shipping-from-china-to-us-2026-guide"
  | "china-counter-sanctions-compliance-risks-2026"
  | "chinas-new-supply-chain-regulations-2026-3-compliance-risks-foreign-companies-must-know"
  | "gallium-germanium-rare-earth-china-supply-chain-trump-cards-2026"
  | "jia-zhe-xi-tu-zhong-guo-gong-ying-lian-de-wang-pai-hai-you-na-xie";

export interface StatItem {
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SisterSite {
  label: string;
  href: string;
  description: string;
}

export interface CityRow {
  name: string;
  industries: string;
  anchors: string;
  sourcingEdge: string;
}

export interface IndustryHighlight {
  title: string;
  summary: string[];
}

export interface PracticalInfoGroup {
  title: string;
  items: string[];
}

export interface RegionEntry {
  slug: RegionSlug;
  name: string;
  shortLabel: string;
  regionLine: string;
  tagline: string;
  heroSummary: string;
  seoTitle: string;
  seoDescription: string;
  tags: string[];
  heroStats: StatItem[];
  overview: string[];
  cities: CityRow[];
  industryHighlights: IndustryHighlight[];
  practicalInfo: PracticalInfoGroup[];
  relatedRegionSlugs: RegionSlug[];
  relatedIndustrySlugs: IndustrySlug[];
}

export interface IndustryCoverage {
  regionSlug: RegionSlug;
  label: string;
  note: string;
}

export interface IndustryComparisonRow {
  regionSlug: RegionSlug;
  strengths: string;
  limits: string;
  fit: string;
}

export interface TrendItem {
  title: string;
  detail: string;
}

export interface IndustryEntry {
  slug: IndustrySlug;
  name: string;
  tagline: string;
  heroSummary: string;
  seoTitle: string;
  seoDescription: string;
  heroStats: StatItem[];
  coverage: IndustryCoverage[];
  comparisonRows: IndustryComparisonRow[];
  sourcingTips: string[];
  trendItems: TrendItem[];
  relatedRegionSlugs: RegionSlug[];
  relatedBlogSlugs: BlogSlug[];
  sources: string[];
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface BlogPostEntry {
  slug: BlogSlug;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  heroKicker: string;
  sections: BlogSection[];
  relatedPostSlugs: BlogSlug[];
}

export interface ProvinceMapNode {
  id: string;
  province: string;
  regionSlug: RegionSlug;
  industries: string[];
  density: 1 | 2 | 3 | 4;
  x: number;
  y: number;
  width: number;
  height: number;
}
