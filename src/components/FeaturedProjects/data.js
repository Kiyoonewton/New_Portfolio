export const featuredProjects = [
  {
    id: "subtrackr",
    name: "SubTrackr",
    role: "Project Lead & Full-Stack Engineer",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Drizzle ORM"],
    problem:
      "Subscription spend is scattered across bills with no way to see it as a whole, or compare it to how other people spend.",
    solution:
      "Led development end-to-end — architected the full data model and API layer, and built a behavioral identity engine that classifies users into spending personas from normalized monthly category spend, with explainable \"why\" breakdowns and cohort-based benchmarking by city, country, and identity segment.",
    impact:
      "Diagnosed and resolved a production-blocking database migration conflict (ambiguous Drizzle table rename across 3 candidate tables), restoring a clean migration path with zero data loss.",
    image: "/projects/subtrackr.png",
    imagePosition: "top right",
    href: "https://new-subtrackr.kiyoo.online",
  },
  {
    id: "namy",
    name: "Namy",
    role: "Founder & Full-Stack Engineer",
    stack: [
      "Next.js",
      "Capacitor",
      "NestJS",
      "Apollo GraphQL",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "AWS",
    ],
    problem:
      "Restaurants needed a way to run targeted promo campaigns and reward repeat diners, without building separate web, iOS, and Android apps.",
    solution:
      "Built a dual-sided restaurant discovery and coupon app with gamified rewards from a single Next.js codebase wrapped in Capacitor and shipped to web, iOS, and Android. Owned the architecture end-to-end — GraphQL API design, Prisma schema and migrations, JWT auth, and a promotional push notification system built on Novu with deep-linking across all three platforms.",
    impact:
      "Integrated Stripe payments, Google APIs, and AWS S3/SES into a NestJS/Prisma backend, with CI quality gates (lint, typecheck, test) protecting every deploy.",
    image: "/projects/namy.png",
    href: "https://namyapp.com",
  },
  {
    id: "wazobia-ai",
    name: "AI Content Engine — Wazobia Technologies",
    role: "Software Engineer & Team Lead",
    stack: ["Python", "LlamaIndex", "OpenAI API", "Qdrant", "Kafka"],
    problem:
      "Editorial and media-brand platforms needed smarter content recommendations and tagging at a scale manual curation couldn't match.",
    solution:
      "Developed semantic vector search and RAG pipelines using LlamaIndex, plus LLM-powered content generation and tagging with the OpenAI API, backed by Qdrant for vector storage and Kafka-based event-driven workflows for scalable, decoupled processing.",
    impact: "Drove a 30% increase in content engagement and click-through.",
    image: null,
    href: null,
  },
  {
    id: "jungle-creations",
    name: "Jungle Creations",
    role: "Software Engineer & Team Lead",
    stack: ["React", "Next.js", "Node.js", "GraphQL", "DatoCMS"],
    problem:
      "Multiple editorial and media-brand sites (Vt.co, Twistedfood, CraftFactory, Fournine) needed a faster publishing workflow and a more maintainable frontend.",
    solution:
      "Optimized the content management system with React and Node.js, and built a custom CMS comparable to Contentful/DatoCMS to give content creators more control and cut production time.",
    impact:
      "Improved article publishing efficiency by 30%, cut CMS production time by 25%, and drove a 20% increase in organic traffic across the brand portfolio.",
    image: "/projects/jungle-creations.png",
    href: "https://vt.co/",
  },
  {
    id: "afrilearn",
    name: "Afrilearn — Future of Learning",
    role: "Software Engineer",
    stack: ["Next.js", "Node.js", "React Native", "MySQL", "Prometheus"],
    problem:
      "An ed-tech platform needed to turn UI designs into a fast, reliable product that could scale to a large, active user base across web and mobile.",
    solution:
      "Transformed UI designs into fully functional Next.js/Node.js websites, contributed to a React-based frontend architecture built to scale, and shipped companion cross-platform mobile apps in React Native.",
    impact:
      "Improved website performance by 50% and cut load times by 40%; frontend architecture scaled to 100,000+ active users; mobile app saw a 25% increase in user retention.",
    image: "/projects/afrilearn.png",
    href: "https://www.myafrilearn.com/",
  },
];
