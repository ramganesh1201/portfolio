export interface CaseStudyData {
  id: string;
  name: string;
  shortDescription: string;
  url: string;
  githubUrl?: string;
  overview: {
    whatItDoes: string;
    purpose: string;
    targetUsers: string;
  };
  problemStatement: string;
  goals: string[];
  techStack: string[];
  keyFeatures: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  developmentProcess: {
    phase: string;
    description: string;
  }[];
  lessonsLearned: string[];
}

export const caseStudies: CaseStudyData[] = [
  {
    id: "shopease",
    name: "Shopease",
    shortDescription: "A modern, responsive e-commerce platform.",
    url: "https://shopeasec.netlify.app/",
    overview: {
      whatItDoes: "An intuitive e-commerce frontend allowing users to browse products, filter by categories, and manage a shopping cart.",
      purpose: "To provide a seamless, performant, and accessible online shopping experience.",
      targetUsers: "Online shoppers looking for an easy-to-use retail interface."
    },
    problemStatement: "Many e-commerce websites suffer from slow load times and cluttered interfaces, making it frustrating for users to find and purchase products on mobile devices.",
    goals: [
      "Responsive and mobile-first design",
      "Fast page load performance",
      "Modern, clean UI",
      "Reusable, modular components"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    keyFeatures: [
      "Responsive Product Grid",
      "Category Filtering",
      "Shopping Cart Management",
      "Performance Optimized Loading"
    ],
    challenges: [
      {
        challenge: "State Management for Shopping Cart",
        solution: "Implemented a robust context-based state management system to ensure cart data remains consistent across different views without prop-drilling."
      },
      {
        challenge: "Image Optimization",
        solution: "Utilized modern image formats and lazy loading techniques to ensure the product grid loads instantly, even on slower connections."
      }
    ],
    developmentProcess: [
      { phase: "Planning", description: "Defined core user flows and feature requirements." },
      { phase: "Design", description: "Created wireframes and finalized the UI components and color scheme." },
      { phase: "Development", description: "Built the responsive layout and integrated the cart logic." },
      { phase: "Testing", description: "Conducted cross-browser and mobile device testing." },
      { phase: "Deployment", description: "Deployed to Netlify with continuous integration." }
    ],
    lessonsLearned: [
      "Deepened understanding of React Context API for complex state.",
      "Improved skills in designing mobile-first e-commerce layouts.",
      "Learned optimization techniques for handling numerous high-res product images."
    ]
  },
  {
    id: "insurance-chat",
    name: "Insurance Chat",
    shortDescription: "An AI-powered chat interface for insurance inquiries.",
    url: "https://insurance-chat.ramsr3741.workers.dev/",
    overview: {
      whatItDoes: "A conversational interface that helps users get answers to common insurance questions quickly and accurately.",
      purpose: "To streamline the customer support process and reduce wait times for policyholders.",
      targetUsers: "Individuals seeking quick information about insurance policies and claims."
    },
    problemStatement: "Customers often spend too much time navigating complex FAQs or waiting on hold for customer service representatives to answer basic policy questions.",
    goals: [
      "Intuitive conversational UI",
      "Low-latency responses",
      "Accessible design",
      "Secure data handling"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Cloudflare Workers"],
    keyFeatures: [
      "Real-time Chat Interface",
      "Typing Indicators",
      "Message History",
      "Responsive Layout"
    ],
    challenges: [
      {
        challenge: "Handling Asynchronous Responses",
        solution: "Implemented loading states and typing indicators to provide visual feedback while waiting for API responses, preventing user frustration."
      },
      {
        challenge: "UI Responsiveness on Mobile Keyboards",
        solution: "Adjusted viewport settings and flexbox layouts to ensure the chat input remains visible when the mobile keyboard is active."
      }
    ],
    developmentProcess: [
      { phase: "Planning", description: "Identified key user intents and required conversational flows." },
      { phase: "Design", description: "Designed a clean, messenger-style interface with distinct user/bot bubbles." },
      { phase: "Development", description: "Integrated the frontend with the serverless backend." },
      { phase: "Testing", description: "Simulated various network conditions and input lengths." },
      { phase: "Deployment", description: "Deployed using Cloudflare Workers for edge performance." }
    ],
    lessonsLearned: [
      "Gained experience in building real-time conversational UIs.",
      "Learned how to effectively manage asynchronous state in React.",
      "Understood the nuances of mobile viewport management."
    ]
  },
  {
    id: "nutrivigil-advisor",
    name: "Nutrivigil Advisor",
    shortDescription: "A comprehensive nutritional guidance and tracking tool.",
    url: "https://elaborate-cupcake-a346d5.netlify.app/",
    overview: {
      whatItDoes: "An application that provides users with tailored nutritional advice and allows them to track their dietary habits.",
      purpose: "To empower individuals to make informed decisions about their diet and health.",
      targetUsers: "Health-conscious individuals looking to improve or monitor their nutrition."
    },
    problemStatement: "Finding reliable, personalized nutritional information is difficult, and tracking daily intake often involves cumbersome spreadsheets or unintuitive apps.",
    goals: [
      "User-friendly dashboard",
      "Data visualization",
      "Personalized recommendations",
      "Secure user profiles"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Chart.js"],
    keyFeatures: [
      "Interactive Dashboards",
      "Nutritional Data Tracking",
      "Visual Progress Charts",
      "Responsive Data Tables"
    ],
    challenges: [
      {
        challenge: "Complex Data Visualization",
        solution: "Integrated Chart.js and customized it to seamlessly match the application's design system while remaining responsive."
      },
      {
        challenge: "Accessible Form Validation",
        solution: "Built a custom form validation hook that provides immediate, screen-reader friendly feedback to users entering dietary data."
      }
    ],
    developmentProcess: [
      { phase: "Planning", description: "Researched nutritional APIs and determined necessary data points." },
      { phase: "Design", description: "Created high-fidelity mockups focusing on data readability." },
      { phase: "Development", description: "Built the dashboard, integrated charts, and implemented forms." },
      { phase: "Testing", description: "Conducted usability testing on data entry flows." },
      { phase: "Deployment", description: "Deployed to Netlify with automated builds." }
    ],
    lessonsLearned: [
      "Mastered integrating third-party charting libraries into React.",
      "Improved accessibility practices for complex forms and data tables.",
      "Enhanced skills in creating dense but readable dashboard UIs."
    ]
  },
  {
    id: "syncrole",
    name: "SyncRole",
    shortDescription: "An AI-powered Career Operating System for students and job seekers navigating the modern placement journey.",
    url: "https://syncrole.vercel.app/",
    overview: {
      whatItDoes: "SyncRole centralizes the entire placement journey into one intelligent platform — from resume analysis and GitHub intelligence to DSA progress tracking, XP-based achievement systems, and a recruiter-facing dashboard. An AI Career Twin provides personalized, context-aware guidance at every stage.",
      purpose: "Campus placement is fragmented. Students juggle six different tools to track skills, prep for interviews, polish resumes, and monitor recruiter activity. SyncRole collapses that fragmentation into a single operating system built around how students actually work.",
      targetUsers: "Final and pre-final year engineering students actively preparing for campus placements, alongside the recruiters and placement coordinators who evaluate them."
    },
    problemStatement: "The placement preparation experience is broken by design. Students manage resume feedback in one tool, DSA practice in another, GitHub profiles separately, and recruiter communication via email. There is no unified view of placement readiness — and no way for a recruiter to understand a candidate's actual trajectory, not just their static resume. SyncRole was built to solve this coordination failure end-to-end.",
    goals: [
      "Unify all placement touchpoints — resume, skills, DSA, GitHub, achievements — into one platform",
      "Build an AI Career Twin that understands a student's full context and delivers targeted, actionable guidance",
      "Give recruiters a structured dashboard to evaluate candidates beyond a single-page resume",
      "Make progress tangible and motivating through XP systems, streaks, and daily missions",
      "Architect for scalability — a single platform serving thousands of students and hundreds of recruiters simultaneously",
      "Keep the UI fast, accessible, and functional on any device a student might carry on campus"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
      "TanStack Router",
      "Lucide Icons"
    ],
    keyFeatures: [
      "AI Career Twin — Personalized Placement Advisor",
      "Resume Upload & AI-Powered Analysis",
      "GitHub Intelligence & Activity Insights",
      "Placement Readiness Score",
      "DSA Progress Tracker with Topic Breakdown",
      "Skill Tracking & Gap Analysis",
      "XP System, Streaks & Achievement Badges",
      "Daily Missions & Habit-Building Loops",
      "Student Dashboard with Career Analytics",
      "Recruiter Dashboard with Candidate Evaluation",
      "Supabase Auth with Role-Based Access Control",
      "Responsive, Accessible UI across all Devices"
    ],
    challenges: [
      {
        challenge: "Role-Based Architecture Without Complexity Overhead",
        solution: "Rather than building separate apps for students and recruiters, the platform uses a single codebase with Supabase Row-Level Security policies and a role column in the profiles table. TanStack Router's loader system checks roles before rendering — keeping the architecture clean while preventing unauthorized access to recruiter-only routes."
      },
      {
        challenge: "Designing the AI Career Twin for Genuine Usefulness",
        solution: "Generic AI chat is a distraction. The Career Twin was scoped deliberately — it only responds to placement-relevant prompts and always has access to the student's current resume, skill gaps, and DSA progress as context. This made responses feel like advice from a mentor who actually knows the student, rather than a general-purpose chatbot."
      },
      {
        challenge: "Making GitHub Intelligence Meaningful, Not Decorative",
        solution: "Raw GitHub stats — stars, forks, commit counts — tell recruiters nothing actionable. The GitHub Intelligence module instead analyzes language diversity, project consistency, README quality signals, and recent activity patterns to generate a structured narrative. The challenge was defining what 'a strong GitHub profile' actually means for a campus hire, and encoding that definition into the analysis pipeline."
      },
      {
        challenge: "XP and Achievement Systems That Motivate Without Gamification Traps",
        solution: "Poorly designed XP systems reward quantity over quality and create anxiety rather than momentum. SyncRole's XP model was deliberately weighted toward depth — completing a resume review earns more than uploading one, and maintaining a 7-day streak earns more than a one-time action. Daily missions rotate based on the student's current readiness gaps, ensuring the system always guides towards the weakest area rather than the easiest action."
      },
      {
        challenge: "Real-Time Placement Readiness Score Across Multiple Dimensions",
        solution: "A single score is meaningless without dimension — a student can be 90% resume-ready but 40% skills-ready. The Placement Readiness Score is computed as a weighted composite across resume completeness, skill coverage, DSA volume, GitHub activity, and profile completeness. Each dimension is surfaced individually so a student knows exactly where to spend their next hour."
      },
      {
        challenge: "Responsive Dashboard Performance with Dense Data",
        solution: "Dashboards with charts, progress rings, and real-time data are expensive to render on mid-range devices. Heavy components — achievement grids, analytics charts — were deferred with React's lazy loading. Supabase queries were structured with precise column selection and indexed on user_id and created_at to avoid full-table scans at scale."
      }
    ],
    developmentProcess: [
      {
        phase: "Research & Problem Definition",
        description: "Mapped the full placement preparation lifecycle by documenting every tool a typical engineering student uses — from LeetCode to LinkedIn to Google Docs. Identified the handoff gaps between each tool as the primary opportunity. Defined two distinct user personas: the placement-anxious student and the time-constrained recruiter, then designed SyncRole to serve both without compromising either."
      },
      {
        phase: "Information Architecture",
        description: "Designed the navigation around two primary dashboards — Student and Recruiter — with TanStack Router handling type-safe routing and role-based loaders. Sidebar navigation was structured around the student's natural workflow: Profile → Resume → Skills → DSA → GitHub → AI Twin → Achievements, mirroring how a prepared student would actually think about their readiness."
      },
      {
        phase: "Database Design",
        description: "Supabase PostgreSQL tables were designed around three core entities: users (with a role column), student_profiles (resume data, skill arrays, social links), and progress_records (DSA topic completions, XP logs, streak data). Row-Level Security policies ensure students can only read their own data while recruiters can access a curated, anonymized view of candidates. Indexes on frequently queried columns keep response times under 200ms."
      },
      {
        phase: "UI & Component System",
        description: "Built a consistent design system using Tailwind CSS utility classes with a dark, high-contrast palette chosen for long study sessions. Framer Motion powers page transitions and micro-interactions — progress ring animations, achievement unlock sequences, and dashboard card entrances — without exceeding a 60fps budget on mid-range devices. Lucide Icons provided a consistent icon vocabulary across the entire UI."
      },
      {
        phase: "AI Career Twin Integration",
        description: "The Career Twin was integrated as a context-aware assistant rather than a freeform chatbot. Each conversation is initialized with the student's current profile snapshot — resume quality score, skill coverage, DSA counts, and readiness score — giving the AI immediate context without requiring the student to re-explain their situation. Prompt templates were refined over multiple iterations to eliminate generic responses."
      },
      {
        phase: "Testing & Optimization",
        description: "End-to-end testing covered the student registration flow, resume upload and analysis, DSA progress tracking, and recruiter dashboard access. Role-based access control was tested by attempting cross-role route access. Performance was measured via Lighthouse, targeting a first contentful paint under 1.5s on a mid-range device with a standard 4G connection."
      }
    ],
    lessonsLearned: [
      "Role-based architecture is best solved at the database layer (Row-Level Security) rather than purely at the frontend routing layer — it's more secure and dramatically simpler to maintain.",
      "AI features only earn user trust when they have real context. A Career Twin that knows your resume and skill gaps is useful; one that doesn't is just noise.",
      "Gamification must be designed around the user's actual goal, not arbitrary engagement metrics. Every XP rule in SyncRole maps directly to a placement outcome.",
      "Supabase's combination of PostgreSQL, Auth, and Storage in a single managed service is genuinely powerful for solo and small-team projects — it eliminates an entire backend infrastructure layer.",
      "Type-safe routing with TanStack Router catches an entire class of navigation bugs at compile time that React Router's string-based API leaves until runtime."
    ]
  },
  {
    id: "Lenoraa",
    name: "Lenoraa",
    shortDescription: "A premium luxury e-commerce platform for an artisanal handmade soap brand, built to convert browsers into loyal customers.",
    url: "https://leno-raa-zeta.vercel.app/",
    overview: {
      whatItDoes: "Lenoraa is a full-featured e-commerce experience for a handmade soap brand — spanning product discovery, ingredient education, skin-type recommendations, cart and wishlist management, user accounts, reviews, and an admin dashboard for order and inventory management. Payments flow through a manual UPI workflow designed for the brand's current operational scale.",
      purpose: "Mass-market soap retailers offer no context about what goes into their products or why it matters. Lenoraa was designed to fill that gap — a digital storefront that respects the craft of its products, educates buyers about ingredients and skin compatibility, and makes the purchase decision feel considered rather than impulsive.",
      targetUsers: "Conscious consumers — primarily women between 22 and 45 — who research ingredient lists, prioritize natural and handmade products, and are willing to pay a premium when the brand earns their trust."
    },
    problemStatement: "Artisanal soap brands frequently launch on Instagram or generic marketplace platforms and stagnate there, unable to communicate the depth of their product story. The Lenoraa brand had a distinct identity, a curated product range, and a loyal early customer base — but no owned digital presence that could communicate ingredient quality, support product discovery by skin type, or handle orders without relying on DMs and manual spreadsheets. The platform needed to close that operational gap while elevating the brand visually.",
    goals: [
      "Build a digital storefront that communicates premium quality through every design decision",
      "Enable product discovery by ingredient, skin type, and collection — not just category",
      "Eliminate the manual order management overhead with a dedicated admin dashboard",
      "Implement a UPI payment workflow that matches the brand's current operational model without introducing unnecessary third-party payment complexity",
      "Deliver a sub-2-second first load on mobile, where the majority of the target audience shops",
      "Build for SEO from the ground up — product pages, collection pages, and ingredient guides all indexable and structured"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Framer Motion"
    ],
    keyFeatures: [
      "Product Catalog with Filtering by Skin Type & Ingredient",
      "Collections & Curated Product Groups",
      "Detailed Product Pages with Ingredient Breakdowns",
      "Skin Type Recommendation Engine",
      "Cart & Wishlist with Persistent State",
      "User Accounts with Order History",
      "Product Reviews & Star Ratings",
      "Manual UPI Payment Workflow with Order Confirmation",
      "Admin Dashboard — Inventory, Orders, and Customer Management",
      "Site-Wide Product Search",
      "Product Recommendations on Cart & PDP",
      "SEO-Optimized Pages with Structured Metadata"
    ],
    challenges: [
      {
        challenge: "Communicating Premium Quality Through Interface Design",
        solution: "Cheap-feeling interfaces erode trust in premium brands before a customer reads a single product description. Every visual decision — generous whitespace, a restrained warm palette, carefully weighted typography, and slow, intentional Framer Motion transitions — was chosen to signal quality. The product detail page was designed to give ingredients the same visual treatment as the product photography, because for this customer, they matter equally."
      },
      {
        challenge: "Manual UPI Payment Without Sacrificing Order Reliability",
        solution: "Integrating a full payment gateway was disproportionate for the brand's current transaction volume and added compliance overhead the team wasn't ready for. Instead, a manual UPI workflow was designed with care: the customer confirms intent, receives UPI details and a reference number, completes payment independently, and uploads a screenshot. The admin dashboard surfaces pending confirmations as the first priority view. This workflow mirrors how many D2C brands in the Indian market actually operate, and it's honest about that rather than trying to disguise it."
      },
      {
        challenge: "Skin Type and Ingredient Filtering Without a Complex Query Layer",
        solution: "Product attributes like skin type suitability and key ingredients are stored as PostgreSQL arrays in the products table, enabling straightforward containment queries using the && operator. Filtering by skin type requires a single indexed array overlap query — no join table, no denormalization, and no complex query builder. This simplicity made the filter fast and the data model easy to evolve as the product range grows."
      },
      {
        challenge: "Persistent Cart and Wishlist Across Sessions",
        solution: "For authenticated users, cart and wishlist state is persisted to Supabase in real time, so a customer can add items on mobile and check out on desktop without losing their selection. For unauthenticated visitors, cart state is stored in localStorage and merged with the database on sign-in, preventing the frustrating 'empty cart after login' experience that drives abandonment on e-commerce sites."
      },
      {
        challenge: "SEO for a Brand With No Existing Domain Authority",
        solution: "With no existing authority, every page had to earn its indexation. Product pages use server-rendered metadata with per-product title tags, meta descriptions, and Open Graph images. Collection pages include structured content that search engines can parse as curated product groups. Ingredient guide pages were added as lightweight editorial content to capture informational search intent from buyers researching natural skincare ingredients — a traffic source that converts at high rates."
      },
      {
        challenge: "Admin Dashboard Scope Without Over-Engineering",
        solution: "An admin dashboard that tries to do everything becomes a liability. Lenoraa's admin scope was defined narrowly: view and update order status, manage product inventory, review pending payment confirmations, and moderate customer reviews. Building only what the operator actually needed kept the codebase lean and the admin experience fast to navigate under real workload conditions."
      }
    ],
    developmentProcess: [
      {
        phase: "Brand & UX Research",
        description: "Studied the brand's existing social presence, customer feedback patterns, and competitor storefronts across the premium natural skincare segment. Identified that competitors consistently failed on two fronts: ingredient education (buried in small text) and mobile checkout experience (too many steps on small screens). These became the primary UX differentiators Lenoraa was designed to win on."
      },
      {
        phase: "Information Architecture & Product Data Model",
        description: "Designed the database schema before touching UI. Products carry name, description, price, images, ingredient_list (array), skin_types (array), collection_id, stock_count, and is_featured. Orders reference users and contain a line-items JSONB column for historical accuracy independent of future product edits. This schema was normalized enough for correctness but kept flat enough for simple, fast queries at the catalog scale Lenoraa operates at."
      },
      {
        phase: "Design System & Component Library",
        description: "Established a warm, minimal design system with a cream-and-terracotta palette chosen to evoke natural materials without leaning into generic 'organic brand' clichés. Typography was set in a pairing of a refined serif for product names and headings with a clean sans-serif for body copy — a combination that signals quality without being austere. Every component — product cards, ingredient badges, review cards, cart drawers — was built once and reused consistently."
      },
      {
        phase: "Core E-Commerce Implementation",
        description: "Built the product catalog with real-time Supabase queries, filter state managed in the URL as search params (preserving filterability via browser back button and shareable links), and a cart context that abstracts the auth-vs-guest persistence logic from consuming components. The checkout flow was deliberately kept to three steps — review cart, confirm details, submit UPI payment — to minimize abandonment friction."
      },
      {
        phase: "Admin Dashboard Development",
        description: "The admin dashboard is a separate, role-gated section of the same React application. Supabase RLS policies ensure admin routes are only accessible to users with an admin role in the database — there is no frontend-only role check that could be bypassed. Order management surfaces the most time-sensitive action — pending payment confirmation — above all other views, matching the operator's actual priority."
      },
      {
        phase: "Performance & SEO Optimization",
        description: "Images were compressed and served in modern formats where possible. Product list views use a lightweight card component that defers full product detail loading until navigation. Each product page's metadata is composed from the product's database record at render time. Vite's build output was analyzed to ensure no unintended large bundle chunks and that the initial JS payload remained under 150kb gzipped."
      }
    ],
    lessonsLearned: [
      "A payment workflow that matches the operator's real capacity is more valuable than an integrated payment gateway that introduces compliance friction the team isn't ready for. Engineering choices should serve the business model, not impose a theoretically superior one.",
      "Product data modeling decisions made early are expensive to reverse. Defining skin_types and ingredient_list as first-class database columns — rather than free-text fields — made filtering possible without a search index and made the catalog genuinely useful from day one.",
      "For brands without existing SEO authority, editorial content targeting informational queries compounds over time. Ingredient guide pages consistently bring in qualified visitors who are already mid-research.",
      "The cart merge-on-login pattern (localStorage → Supabase) is a small implementation detail that has a disproportionately large impact on conversion for e-commerce sites where most visitors browse before creating an account.",
      "Framer Motion's layout animations are powerful, but they need to be scoped carefully in e-commerce contexts where filter changes reorder large product grids. Animating only new-entry cards rather than the full grid on every filter change kept the interaction feeling polished without causing jank on slower devices."
    ]
  }
];
