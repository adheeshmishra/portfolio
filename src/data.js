export const TAGLINES = [
  "Backend systems that stay correct under load.",
  "FastAPI, PostgreSQL, and the queues in between.",
  "From query plans to React dashboards — end to end.",
]

export const WORK = [
  { id: 1, num: "001", name: "Salary Increment Platform", kind: "payroll rules engine", year: "2025", tags: ["FastAPI", "PostgreSQL", "SQS"], blurb: "A configurable rules engine that replaced Excel-driven workflows and cut policy rollout from ~2 months to under a day." },
  { id: 2, num: "002", name: "Faceted Query Framework", kind: "analytics API layer", year: "2024–25", tags: ["FastAPI", "PostgreSQL", "255+ endpoints"], blurb: "Reusable filtering with tri-state select/exclude and server-side facet aggregation across 11 analytics modules." },
  { id: 3, num: "003", name: "Scanner Modules", kind: "pharma intelligence", year: "2024–25", tags: ["React", "FastAPI", "30K+ products"], blurb: "Company, Product, and Disease scanners covering 2,621 companies, 30K+ products, and 5,035 diseases." },
  { id: 4, num: "004", name: "Hybrid Pagination", kind: "clinical trials search", year: "2024–25", tags: ["PostgreSQL", "Keyset", "1.8s → 50ms"], blurb: "Keyset plus offset pagination over 300K+ clinical trial records; deep-page latency from ~1.8s to ~50ms." },
  { id: 5, num: "005", name: "Clinical RAG", kind: "LLM retrieval pipeline", year: "2024–25", tags: ["Llama 3", "FAISS", "Embeddings"], blurb: "Semantic retrieval over proprietary pharmaceutical knowledge bases, surfacing clinical context for analysts." },
  { id: 6, num: "006", name: "Distributor Portals", kind: "insurance platform", year: "2022–24", tags: ["Node.js", "React", "AWS"], blurb: "Distributor and Internal Manager portals serving 500+ distributors; API response times down ~45%." },
]

export const EXPERIENCE = [
  { year: "Oct 2025 — Now", role: "Senior Software Engineer", co: "PharmaACE Pvt Ltd", meta: "FastAPI · PostgreSQL · SQS" },
  { year: "2024 — 2025", role: "Software Engineer", co: "PharmaACE Pvt Ltd", meta: "FastAPI · React · RAG" },
  { year: "2022 — 2024", role: "Software Engineer", co: "HealthAssure Pvt Ltd", meta: "Node.js · React · AWS" },
  { year: "2018 — 2022", role: "B.Tech", italic: true, co: "SGSITS", meta: "Indore, IN" },
]

export const SKILLS = [
  { name: "Languages", italic: false, related: ["Java", "Python", "TypeScript", "JavaScript", "SQL"] },
  { name: "Frameworks", italic: true, related: ["FastAPI", "Node.js", "Express.js", "React.js", "Redux", "REST APIs", "GraphQL"] },
  { name: "Databases", italic: false, related: ["PostgreSQL", "MongoDB", "Redis"] },
  { name: "Cloud", italic: true, related: ["AWS (EC2, ECS, Lambda, RDS, S3, API Gateway, IAM, SQS, SNS, CloudWatch)", "Docker", "Nginx"] },
  { name: "Core CS", italic: false, related: ["System Design", "Distributed Systems", "Event-Driven Architecture", "Concurrency Control", "Database Design", "Performance Optimization"] },
]
