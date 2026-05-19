export const TAGLINES = [
  "Writing software, quietly. Shipping it, intently.",
  "Small studio of one — building well-made tools.",
  "Backend by trade, design by appetite.",
]

export const WORK = [
  { id: 1, num: "001", name: "Halcyon", kind: "banking core", year: 2025, tags: ["Go", "Ledger", "gRPC"], blurb: "A double-entry ledger that ran a 9-figure book without breaking a sweat." },
  { id: 2, num: "002", name: "Marble", kind: "editorial CMS", year: 2024, tags: ["TypeScript", "Next.js", "Founding"], blurb: "Founding engineer — built the CMS, the pipeline, and most of the brand." },
  { id: 3, num: "003", name: "Field Notes", kind: "travel journal", year: 2024, tags: ["Swift", "CRDT", "iOS"], blurb: "Local-first travel log with peer sync — a quiet weekend obsession." },
  { id: 4, num: "004", name: "Lantern", kind: "developer tool", year: 2023, tags: ["Rust", "CLI", "OSS"], blurb: "A tiny log-search CLI used by ~3k engineers a month." },
  { id: 5, num: "005", name: "Pinecone", kind: "health platform", year: 2023, tags: ["React Native", "Node", "Contract"], blurb: "Built the mobile app and onboarding flow for a Series-A health startup." },
  { id: 6, num: "006", name: "Aarany", kind: "web concept", year: 2022, tags: ["Web", "Personal"], blurb: "Hospitality concept site — typography study + light CMS." },
]

export const EXPERIENCE = [
  { year: "2025 — Now", role: "Senior Software Engineer", co: "Halcyon Banking", loc: "Bengaluru, IN" },
  { year: "2023 — 2025", role: "Founding Engineer", co: "Marble (acq. 2025)", loc: "Remote" },
  { year: "2021 — 2023", role: "Product Engineer", co: "Pinecone Health", loc: "Mumbai, IN" },
  { year: "2019 — 2021", role: "Software Engineer", co: "Studio of Two", loc: "Bengaluru, IN" },
  { year: "2015 — 2019", role: "B.Tech, Computer Science", italic: true, co: "Indian Institute of Technology", loc: "Bombay, IN" },
]

export const NOW = [
  { tag: "Building", date: "This week", title: "A query planner for an embedded KV store.", body: "Slow work, fun work. The kind of project where every commit is one perf graph at a time." },
  { tag: "Reading", date: "Apr 2026", title: "Designing Data-Intensive Applications,", titleSuffix: "second pass.", body: "Different book the second time. The chapter on consistency models finally clicked." },
  { tag: "Listening", date: "Lately", title: "Khruangbin, mostly.", body: "Some Arvo Pärt on focused mornings. A lot of brown noise at 2am." },
  { tag: "Learning", date: "May 2026", title: "Rust async &", titleSuffix: "io_uring.", body: "Building a tiny HTTP server with raw rings. It's faster than I expected, slower than I'd like." },
  { tag: "Place", date: "Q3 2026", title: "Bengaluru →", titleSuffix: "Goa.", body: "Working remote for a month, then returning. Bringing the keyboard, leaving the meetings." },
  { tag: "Writing", date: "Coming soon", title: "A short note on", titleSuffix: "calm software.", body: "Halfway through draft three. It still feels slightly too earnest. That might be the point." },
]

export const SKILLS = [
  { name: "TypeScript", years: 6, italic: false, related: ["Node", "Bun", "Deno"] },
  { name: "Go", years: 4, italic: true, related: ["Fiber", "gRPC", "Cobra"] },
  { name: "Rust", years: 2, italic: false, related: ["Tokio", "Axum", "Serde"] },
  { name: "Python", years: 7, italic: true, related: ["FastAPI", "Pandas", "Ruff"] },
  { name: "Postgres", years: 7, italic: false, related: ["Logical replication", "pgx", "pgvector"] },
  { name: "Redis", years: 5, italic: true, related: ["Pub/sub", "Streams"] },
  { name: "React", years: 6, italic: false, related: ["Next.js", "Remix", "Tailwind"] },
  { name: "Infra", years: 5, italic: true, related: ["Docker", "K8s", "Terraform", "AWS"] },
]

export const MAX_YEARS = 7
