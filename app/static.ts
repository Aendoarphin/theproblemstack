export const industryOptions = [
  { value: "aerospace_defense", label: "Aerospace & Defense" },
  { value: "agriculture", label: "Agriculture" },
  { value: "automotive", label: "Automotive" },
  { value: "banking_finance", label: "Banking & Finance" },
  { value: "biotechnology", label: "Biotechnology" },
  { value: "chemicals", label: "Chemicals" },
  { value: "construction_engineering", label: "Construction & Engineering" },
  { value: "consumer_goods", label: "Consumer Goods" },
  { value: "education", label: "Education" },
  { value: "energy_utilities", label: "Energy & Utilities" },
  { value: "entertainment_media", label: "Entertainment & Media" },
  { value: "environmental_services", label: "Environmental Services" },
  { value: "food_beverage", label: "Food & Beverage" },
  { value: "healthcare_services", label: "Healthcare Services" },
  { value: "hospitality_tourism", label: "Hospitality & Tourism" },
  { value: "information_technology", label: "Information Technology" },
  { value: "insurance", label: "Insurance" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "mining_metals", label: "Mining & Metals" },
  { value: "pharmaceuticals", label: "Pharmaceuticals" },
  { value: "real_estate", label: "Real Estate" },
  { value: "retail_ecommerce", label: "Retail & E-commerce" },
  { value: "software_saas", label: "Software & SaaS" },
  { value: "telecommunications", label: "Telecommunications" },
  { value: "transportation_logistics", label: "Transportation & Logistics" }
];

export const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "most_popular", label: "Most Popular" },
  { value: "least_popular", label: "Least Popular" }
];

export const mockProblems = [
  {
    id: 1,
    title: "OCR Tool for handwritten Construction Logs",
    description: "Site managers still use physical clipboards for daily logs. We need a mobile-first app that scans handwriting and converts it into structured JSON data for project management software (Procore, Autodesk) via API.",
    industry: "construction_engineering",
    industryLabel: "Construction & Engineering",
    upvotes: 342,
    comments: 15,
    solutions: 2,
    date: "2 days ago"
  },
  {
    id: 2,
    title: "GDPR/Compliance 'Cookie' Crawler for Small Agencies",
    description: "Small marketing agencies manage hundreds of client sites but can't manually check if cookies are compliant. A tool is needed that crawls a list of domains and generates a 'Risk Report' of non-compliant tracking scripts.",
    industry: "software_saas",
    industryLabel: "Software & SaaS",
    upvotes: 89,
    comments: 24,
    solutions: 5,
    date: "5 days ago"
  },
  {
    id: 3,
    title: "Inventory Par-Level Prediction for Independent Cafes",
    description: "Existing POS systems track sales but don't predict waste well for perishables (milk, pastries). A plugin is needed that uses local weather and historical sales data to suggest exact ordering quantities to reduce food waste.",
    industry: "food_beverage",
    industryLabel: "Food & Beverage",
    upvotes: 1205,
    comments: 89,
    solutions: 1,
    date: "1 week ago"
  },
  {
    id: 4,
    title: "Universal Tenant Portal for Small Landlords",
    description: "Mom-and-pop landlords with 2-5 units resort to text messages for maintenance requests. They need a lightweight, free-tier web app where tenants can upload photos of leaks/issues and track repair status without enterprise bloat.",
    industry: "real_estate",
    industryLabel: "Real Estate",
    upvotes: 56,
    comments: 4,
    solutions: 1,
    date: "1 week ago"
  }
];