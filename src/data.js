export const TAGLINES = [
  "Backend systems that stay correct under load.",
  "FastAPI, PostgreSQL, and the queues in between.",
  "From query plans to React dashboards — end to end.",
]

export const WORK = [
  {
    id: 1, num: "001", name: "Salary Increment Platform", kind: "payroll rules engine", year: "2025", tags: ["FastAPI", "PostgreSQL", "SQS"],
    metric: "< 1 day", metricLabel: "policy rollout, down from ~2 months",
    points: [
      "Rules engine for eligibility, hike slabs, approvals, and effective-dated salary revisions",
      "Async approval workflows on Amazon SQS with retries and idempotent consumers",
      "Row-level locking and optimistic concurrency; point-in-time payroll reconstruction",
    ],
  },
  {
    id: 2, num: "002", name: "Faceted Query Framework", kind: "analytics API layer", year: "2024–25", tags: ["FastAPI", "PostgreSQL"],
    metric: "11", metricLabel: "analytics modules on one framework",
    points: [
      "Dynamic filtering with tri-state select/exclude semantics",
      "Server-side facet aggregation",
      "Spans 12 PostgreSQL schemas and 120+ tables",
    ],
  },
  {
    id: 3, num: "003", name: "Scanner Modules", kind: "pharma intelligence", year: "2024–25", tags: ["React", "FastAPI"],
    metric: "30K+", metricLabel: "active pharmaceutical products",
    points: [
      "Company, Product, and Disease scanners covering 2,621 companies and 5,035 diseases",
      "70+ FastAPI endpoints, including NDC-level generics",
      "Filtering, comparison, and CSV/Excel export across 20+ attributes",
    ],
  },
  {
    id: 4, num: "004", name: "Hybrid Pagination", kind: "clinical trials search", year: "2024–25", tags: ["PostgreSQL", "Keyset"],
    metric: "~50ms", metricLabel: "deep-page latency, down from ~1.8s",
    points: [
      "Keyset pagination for sequential browsing over 300K+ clinical trial records",
      "Offset pagination for indexed page navigation",
    ],
  },
  {
    id: 5, num: "005", name: "Clinical RAG", kind: "LLM retrieval pipeline", year: "2024–25", tags: ["Llama 3", "FAISS", "OpenAI"],
    metric: "RAG", metricLabel: "over proprietary pharma knowledge bases",
    points: [
      "Llama 3 generation with OpenAI embeddings",
      "Semantic retrieval backed by FAISS",
      "Surfaces relevant clinical context for analysts",
    ],
  },
  {
    id: 6, num: "006", name: "Distributor Portals", kind: "HealthAssure", year: "2022–24", tags: ["Node.js", "React", "AWS"],
    metric: "~45%", metricLabel: "faster average API response",
    points: [
      "Distributor and Internal Manager portals serving 500+ distributors",
      "Rider add-ons, renewals, upgrades, lead-gen workflows, and agent dashboards",
      "Migrated from DigitalOcean and Heroku to AWS with Terraform",
    ],
  },
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
