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
  }
];
