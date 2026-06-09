import type { IndustryEntry, IndustrySlug } from "@/src/types/content";

export const industrySlugs: IndustrySlug[] = [
  "electronics",
  "textile-apparel",
  "auto-machinery",
  "furniture-home",
  "food-agri",
  "raw-materials",
];

export const industries: Record<IndustrySlug, IndustryEntry> = {
  electronics: {
    slug: "electronics",
    name: "Electronics",
    tagline: "From components and prototyping to inland scale assembly.",
    heroSummary:
      "Electronics sourcing in China is no longer a single-city story. Shenzhen still dominates speed and components, but inland and delta regions now serve very different buyer priorities across cost, engineering, and scale.",
    seoTitle: "Electronics sourcing regions in China | China Industry Belt Map",
    seoDescription:
      "Compare China's electronics manufacturing regions, from Shenzhen and Dongguan to Chengdu, Zhengzhou, and Suzhou.",
    heroStats: [
      { label: "Category role", value: "China's core export engine" },
      { label: "PRD weight", value: "35% of national electronics exports" },
      { label: "Buyer question", value: "Speed vs. cost vs. process" },
      { label: "Best use of page", value: "Match product type to region" },
    ],
    coverage: [
      {
        regionSlug: "pearl-river-delta",
        label: "Shenzhen-Dongguan",
        note: "Best for component access, prototyping, wearables, and consumer devices.",
      },
      {
        regionSlug: "yangtze-river-delta",
        label: "Suzhou-Kunshan",
        note: "Better for industrial electronics, process discipline, and upstream engineering.",
      },
      {
        regionSlug: "central-china",
        label: "Zhengzhou-Hefei",
        note: "Useful for scale assembly, displays, and inland cost rebalancing.",
      },
      {
        regionSlug: "sichuan-chongqing",
        label: "Chengdu-Chongqing",
        note: "Strong for assembly diversification and western logistics.",
      },
    ],
    comparisonRows: [
      {
        regionSlug: "pearl-river-delta",
        strengths: "Fast sampling, deep component access, dense subcontractor network",
        limits: "Higher labor cost and intense supplier competition",
        fit: "Consumer electronics, accessories, fast private label launches",
      },
      {
        regionSlug: "yangtze-river-delta",
        strengths: "Engineering depth, cleaner process control, stronger industrial documentation",
        limits: "Less flexible for ultra-fast informal iteration",
        fit: "Industrial electronics, higher-spec assemblies, component systems",
      },
      {
        regionSlug: "central-china",
        strengths: "Scalable inland assembly and improving logistics",
        limits: "Less component-market immediacy than Shenzhen",
        fit: "Large programs where cost balance matters",
      },
      {
        regionSlug: "sichuan-chongqing",
        strengths: "Talent pool, western diversification, electronics assembly depth",
        limits: "Narrower supplier visibility for small buyers than PRD",
        fit: "Diversification and assembly-heavy sourcing plans",
      },
    ],
    sourcingTips: [
      "Separate projects that need rapid prototyping from those that need stable scale production. They may belong in different regions.",
      "Check certification pathways early for power electronics, wireless products, and battery-linked items.",
      "Ask suppliers where their PCB, battery, housing, and packaging inputs originate. The answer often reveals the real supply-chain center of gravity.",
      "For MOQ negotiation, inland assembly regions may be more flexible on labor-intensive builds than upstream component ecosystems.",
    ],
    trendItems: [
      {
        title: "Diversification beyond Shenzhen",
        detail:
          "Buyers increasingly split prototyping in the PRD and mass programs inland or in the YRD.",
      },
      {
        title: "More compliance-heavy procurement",
        detail:
          "Retailers and platforms keep pushing for traceable testing, battery safety, and documentation discipline.",
      },
      {
        title: "Automation reshapes supplier mix",
        detail:
          "Factories with stronger process automation are gaining ground in mid-to-high complexity categories.",
      },
      {
        title: "Regional specialization is increasing",
        detail:
          "The winning question is not where electronics are made, but which part of the electronics stack belongs in which corridor.",
      },
    ],
    relatedRegionSlugs: [
      "pearl-river-delta",
      "yangtze-river-delta",
      "central-china",
      "sichuan-chongqing",
    ],
    relatedBlogSlugs: ["china-inland-manufacturing-shift-2026", "top-10-sourcing-mistakes-china"],
    sources: [
      "General Administration of Customs of China",
      "Municipal industry reports",
      "Trade fair publications",
    ],
  },
  "textile-apparel": {
    slug: "textile-apparel",
    name: "Textile & Apparel",
    tagline: "A mix of scale, speed, and material sourcing depth.",
    heroSummary:
      "Textile sourcing depends on whether a buyer prioritizes fabric access, trend response, technical textiles, or lower inland production cost.",
    seoTitle: "Textile and apparel sourcing in China | China Industry Belt Map",
    seoDescription:
      "Compare China's textile and apparel corridors across Guangdong, Fujian, and the Yangtze River Delta.",
    heroStats: [
      { label: "YRD share", value: "40% of national textile exports" },
      { label: "PRD role", value: "Fast fashion and leather goods" },
      { label: "Fujian role", value: "Footwear and sportswear" },
      { label: "Buyer focus", value: "Fabric depth and speed" },
    ],
    coverage: [
      {
        regionSlug: "pearl-river-delta",
        label: "Guangzhou apparel markets",
        note: "Strong for trend-driven categories and flexible merchandising.",
      },
      {
        regionSlug: "yangtze-river-delta",
        label: "Shanghai-Suzhou textile corridor",
        note: "Useful for scale and higher-spec material management.",
      },
      {
        regionSlug: "fujian-coast",
        label: "Quanzhou-Jinjiang footwear belt",
        note: "High relevance for sportswear and shoe sourcing.",
      },
    ],
    comparisonRows: [
      {
        regionSlug: "pearl-river-delta",
        strengths: "Fast response and dense sourcing markets",
        limits: "Quality spread can be wide",
        fit: "Fashion-led or flexible private label programs",
      },
      {
        regionSlug: "yangtze-river-delta",
        strengths: "Material stability and stronger process control",
        limits: "Often less informal and less fast than Guangzhou",
        fit: "Technical textile and scale apparel programs",
      },
      {
        regionSlug: "fujian-coast",
        strengths: "Footwear and sports manufacturing specialization",
        limits: "Less broad outside core categories",
        fit: "Shoes, sportswear, and adjacent accessories",
      },
    ],
    sourcingTips: [
      "Audit fabric and trim sourcing, not just final sewing capacity.",
      "Confirm wash, colorfastness, and packaging standards early.",
      "For footwear, review tooling ownership and outsole material consistency before price discussions.",
    ],
    trendItems: [
      {
        title: "Sportswear remains resilient",
        detail:
          "Performance apparel and footwear ecosystems continue to outperform generic fashion categories.",
      },
      {
        title: "Smaller runs need faster ecosystems",
        detail:
          "Buyers with trend-sensitive assortments still prefer market-led sourcing zones.",
      },
      {
        title: "Documentation pressure is rising",
        detail:
          "Retail and platform buyers are asking for stronger social and material compliance records.",
      },
    ],
    relatedRegionSlugs: ["pearl-river-delta", "yangtze-river-delta", "fujian-coast"],
    relatedBlogSlugs: ["how-to-visit-yiwu-market-guide"],
    sources: ["China customs trade summaries", "Shanghai and Guangdong textile fair materials"],
  },
  "auto-machinery": {
    slug: "auto-machinery",
    name: "Auto & Machinery",
    tagline: "Engineering capability and process control matter more than showroom density.",
    heroSummary:
      "For auto parts and machinery, China sourcing is usually about choosing the right engineering corridor rather than simply finding the lowest offer.",
    seoTitle: "Auto and machinery sourcing in China | China Industry Belt Map",
    seoDescription:
      "Compare automotive and machinery sourcing regions across the Yangtze Delta, Central China, and Sichuan-Chongqing.",
    heroStats: [
      { label: "YRD role", value: "Core precision and auto cluster" },
      { label: "Central role", value: "Heavy equipment and assembly" },
      { label: "Chongqing role", value: "Major automotive production base" },
      { label: "Buyer focus", value: "Tolerance, QA, lead time" },
    ],
    coverage: [
      {
        regionSlug: "yangtze-river-delta",
        label: "Suzhou-Wuxi-Shanghai",
        note: "Best fit for precision and supplier process maturity.",
      },
      {
        regionSlug: "central-china",
        label: "Changsha-Wuhan-Luoyang",
        note: "Strong for heavy machinery and equipment production.",
      },
      {
        regionSlug: "sichuan-chongqing",
        label: "Chongqing automotive basin",
        note: "Relevant for auto systems and inland supply strategies.",
      },
      {
        regionSlug: "beijing-tianjin-hebei",
        label: "Northern industrial corridor",
        note: "Useful for selected technical and government-linked projects.",
      },
    ],
    comparisonRows: [
      {
        regionSlug: "yangtze-river-delta",
        strengths: "Process control, engineering teams, documentation",
        limits: "Higher operating costs",
        fit: "Precision components, industrial systems",
      },
      {
        regionSlug: "central-china",
        strengths: "Heavy industry, inland cost position, scalable assembly",
        limits: "Less dense specialized export services",
        fit: "Equipment and construction-related procurement",
      },
      {
        regionSlug: "sichuan-chongqing",
        strengths: "Automotive scale and inland logistics",
        limits: "Less breadth for niche subcategories",
        fit: "Vehicle systems and diversification plans",
      },
      {
        regionSlug: "beijing-tianjin-hebei",
        strengths: "Knowledge-intensive technical support",
        limits: "Not optimized for broad category sourcing",
        fit: "Advanced technical projects",
      },
    ],
    sourcingTips: [
      "Review inspection plans, tooling control, and tolerance documentation before comparing only on price.",
      "Confirm where critical subcomponents are produced. The final assembly city may not tell the full story.",
      "For machinery, ask how service parts and replacement cycles are handled across export markets.",
    ],
    trendItems: [
      {
        title: "Automation keeps rising",
        detail:
          "Suppliers with higher automation are better positioned on consistency and labor risk.",
      },
      {
        title: "Inland auto ecosystems deepen",
        detail: "Central and western clusters are handling more of the production load.",
      },
      {
        title: "Documentation is a differentiator",
        detail: "Buyers increasingly choose suppliers based on process visibility and traceability.",
      },
    ],
    relatedRegionSlugs: [
      "yangtze-river-delta",
      "central-china",
      "sichuan-chongqing",
      "beijing-tianjin-hebei",
    ],
    relatedBlogSlugs: ["china-inland-manufacturing-shift-2026"],
    sources: ["Industry fair publications", "Municipal manufacturing reports"],
  },
  "furniture-home": {
    slug: "furniture-home",
    name: "Furniture & Home",
    tagline: "Showroom-led sourcing still matters for bulky export categories.",
    heroSummary:
      "Furniture and home goods sourcing becomes more efficient when buyers can compare many suppliers in person, making cluster geography especially important.",
    seoTitle: "Furniture and home sourcing in China | China Industry Belt Map",
    seoDescription:
      "See how Foshan, Ningbo, and inland clusters compare for furniture and home goods sourcing in China.",
    heroStats: [
      { label: "PRD strength", value: "40% of national furniture exports" },
      { label: "Buyer method", value: "Showroom comparison" },
      { label: "Logistics note", value: "Bulky cargo favors port-ready clusters" },
      { label: "Core concern", value: "Consistency and packaging" },
    ],
    coverage: [
      {
        regionSlug: "pearl-river-delta",
        label: "Foshan-Shunde",
        note: "Best known for furniture showrooms, home appliances, and supplier density.",
      },
      {
        regionSlug: "yangtze-river-delta",
        label: "Ningbo and surrounding cities",
        note: "Useful for home goods, plastics, and export loading efficiency.",
      },
      {
        regionSlug: "central-china",
        label: "Selected inland furniture and materials sites",
        note: "Relevant for cost-driven programs with tighter margin pressure.",
      },
    ],
    comparisonRows: [
      {
        regionSlug: "pearl-river-delta",
        strengths: "Showroom density and export maturity",
        limits: "Higher operating costs",
        fit: "Retail, project furniture, home assortment building",
      },
      {
        regionSlug: "yangtze-river-delta",
        strengths: "Port efficiency and mixed home-goods ecosystems",
        limits: "Less concentrated than Foshan for furniture-only tours",
        fit: "Mixed home and household sourcing",
      },
      {
        regionSlug: "central-china",
        strengths: "Cost position",
        limits: "Less mature showroom and export-support environment",
        fit: "Margin-sensitive categories with stable specs",
      },
    ],
    sourcingTips: [
      "Test export packaging and drop performance early for bulky items.",
      "For furniture, ask which components are in-house versus subcontracted.",
      "Compare supplier readiness for mixed-container and repeat-order programs.",
    ],
    trendItems: [
      {
        title: "Mixed home assortments are growing",
        detail:
          "Buyers often combine furniture with lighting, decor, and packaged household items from the same trip.",
      },
      {
        title: "Packaging quality is under more scrutiny",
        detail: "Damage reduction is increasingly a margin issue, not just an operations issue.",
      },
      {
        title: "Smaller retailers need flexible MOQs",
        detail:
          "Suppliers that support lower complexity customization are easier to scale with.",
      },
    ],
    relatedRegionSlugs: ["pearl-river-delta", "yangtze-river-delta", "central-china"],
    relatedBlogSlugs: ["top-10-sourcing-mistakes-china"],
    sources: ["Furniture market operators", "Customs and regional trade sources"],
  },
  "food-agri": {
    slug: "food-agri",
    name: "Food & Agri",
    tagline: "Certification, traceability, and local specialization are the real filters.",
    heroSummary:
      "Food and agri sourcing in China is less about general factory density and more about choosing regions with the right agricultural base, processing strength, and compliance discipline.",
    seoTitle: "Food and agri sourcing in China | China Industry Belt Map",
    seoDescription:
      "Compare Central China and Fujian for food processing, tea, and agriculture-linked sourcing in China.",
    heroStats: [
      { label: "Central role", value: "Food processing corridor" },
      { label: "Fujian role", value: "Tea and specialty products" },
      { label: "Buyer risk", value: "Certification and traceability" },
      { label: "Core fit", value: "Ingredient and processed categories" },
    ],
    coverage: [
      {
        regionSlug: "central-china",
        label: "Henan-Hubei-Hunan",
        note: "Good for ingredient processing and inland agricultural scale.",
      },
      {
        regionSlug: "fujian-coast",
        label: "Fujian tea and food corridor",
        note: "Useful for tea and selected specialty categories.",
      },
      {
        regionSlug: "pearl-river-delta",
        label: "Export packaging and trading support",
        note: "Helpful for mixed-category export operations.",
      },
    ],
    comparisonRows: [
      {
        regionSlug: "central-china",
        strengths: "Agri base and large processing capacity",
        limits: "Lower English support than major coastal hubs",
        fit: "Ingredients, packaged food, industrial food inputs",
      },
      {
        regionSlug: "fujian-coast",
        strengths: "Specialized categories like tea and export-facing private firms",
        limits: "Narrower category range",
        fit: "Tea, specialty foods, giftable export products",
      },
      {
        regionSlug: "pearl-river-delta",
        strengths: "Trading support and export execution",
        limits: "Not the main origin for many agri categories",
        fit: "Mixed sourcing baskets needing logistics support",
      },
    ],
    sourcingTips: [
      "Validate certification scope, not just a scanned certificate file.",
      "Review traceability and batch documentation for any ingestible category.",
      "Clarify whether the supplier is a processor, exporter, or actual upstream producer.",
    ],
    trendItems: [
      {
        title: "Ingredient transparency matters more",
        detail:
          "Retailers and distributors increasingly ask for origin visibility and process records.",
      },
      {
        title: "Specialty categories stay regional",
        detail:
          "Tea and localized food products remain tied to regional ecosystems rather than broad industrial hubs.",
      },
      {
        title: "Export packaging quality is part of product quality",
        detail: "Damage, contamination, and labeling errors remain avoidable failure points.",
      },
    ],
    relatedRegionSlugs: ["central-china", "fujian-coast", "pearl-river-delta"],
    relatedBlogSlugs: ["top-10-sourcing-mistakes-china"],
    sources: ["Provincial agri reports", "Trade show summaries", "Customs data references"],
  },
  "raw-materials": {
    slug: "raw-materials",
    name: "Raw Materials",
    tagline: "Industrial materials sourcing is driven by processing ecosystems and transport access.",
    heroSummary:
      "When buyers source chemicals, stone, metals, or industrial inputs, the right region is usually the one that combines processing capacity with the logistics profile needed for heavy or regulated cargo.",
    seoTitle: "Raw materials sourcing in China | China Industry Belt Map",
    seoDescription:
      "Assess China's regional strengths for stone, chemicals, industrial materials, and related export logistics.",
    heroStats: [
      { label: "YRD role", value: "Chemicals and industrial materials" },
      { label: "Fujian role", value: "Stone and granite" },
      { label: "Central role", value: "Heavy industrial inputs" },
      { label: "Buyer focus", value: "Transport and compliance" },
    ],
    coverage: [
      {
        regionSlug: "yangtze-river-delta",
        label: "Shanghai-Ningbo materials corridor",
        note: "Strong for chemicals and industrial inputs.",
      },
      {
        regionSlug: "fujian-coast",
        label: "Stone and building materials",
        note: "Useful for granite and related construction sourcing.",
      },
      {
        regionSlug: "central-china",
        label: "Traditional heavy-industry base",
        note: "Relevant for selected industrial materials and upstream inputs.",
      },
      {
        regionSlug: "beijing-tianjin-hebei",
        label: "Northern industrial chain",
        note: "Useful for some specialized material and technical categories.",
      },
    ],
    comparisonRows: [
      {
        regionSlug: "yangtze-river-delta",
        strengths: "Port access and strong industrial processing",
        limits: "Higher operating costs",
        fit: "Chemicals and sophisticated industrial inputs",
      },
      {
        regionSlug: "fujian-coast",
        strengths: "Stone specialization and export awareness",
        limits: "More category-specific than diversified",
        fit: "Stone, granite, and building materials",
      },
      {
        regionSlug: "central-china",
        strengths: "Heavy-industry base and inland cost position",
        limits: "Longer export chains for some buyers",
        fit: "Industrial materials with stable recurring demand",
      },
      {
        regionSlug: "beijing-tianjin-hebei",
        strengths: "Technical and northern industrial links",
        limits: "Not a broad-spectrum raw materials market",
        fit: "Project-led or technical procurement",
      },
    ],
    sourcingTips: [
      "Transport mode and port access can change landed cost more than the factory quote itself.",
      "Check packaging, handling, and dangerous-goods requirements early for chemical-related categories.",
      "For stone and bulky materials, inspect loading and breakage controls before approving shipments.",
    ],
    trendItems: [
      {
        title: "Freight logic still matters",
        detail: "Raw materials remain highly sensitive to handling cost and route efficiency.",
      },
      {
        title: "Buyers ask for more process visibility",
        detail: "Traceability expectations are expanding beyond finished goods.",
      },
      {
        title: "Regional specialization remains strong",
        detail:
          "Stone, chemicals, and industrial inputs stay anchored to different corridors for structural reasons.",
      },
    ],
    relatedRegionSlugs: [
      "yangtze-river-delta",
      "fujian-coast",
      "central-china",
      "beijing-tianjin-hebei",
    ],
    relatedBlogSlugs: ["china-inland-manufacturing-shift-2026"],
    sources: ["Customs data references", "Regional industrial reports", "Trade associations"],
  },
};
