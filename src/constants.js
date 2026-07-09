export const SOCIAL_LINKS = {
  github: "https://github.com/scripter-kartik",
  linkedin: "https://www.linkedin.com/in/kartik-agarwal",
  x: "https://x.com/0xkar7ik",
  email: "agarwalkartik704@gmail.com",
  calendar: "https://cal.com/scripter-kartik",
};
export const NAV_LINKS = [
  { id: "home", label: "home" },
  { id: "works", label: "works" },
  { id: "skills", label: "skills" },
  { id: "about-me", label: "about-me" },
  { id: "contacts", label: "contacts" },
];
export const PROJECTS = [
  {
    slug: "hirex",
    title: "HireX",
    description: "ai technical interview platform",
    longDescription:
      "HireX is a full-stack AI mock-interview platform that runs adaptive, voice-driven technical interviews, a live in-browser coding round, and produces deep, shareable evaluation reports. It works with zero API keys via an adaptive local engine, and becomes fully AI-driven the moment a single LLM key is added.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "Monaco"],
    image: "/hirex.png",
    link: "https://hirex-beta.vercel.app",
    github: "https://github.com/scripter-kartik/hireX",
    year: "2026",
    features: [
      "Adaptive AI interviewer with token-by-token streaming",
      "Neural voice interviewer with animated speaking avatar",
      "Résumé/JD personalization via in-browser PDF parsing",
      "Live coding round in Monaco run against sandboxed test cases",
      "Scored evaluation report with PDF export and public share links",
      "Lightweight proctoring with a session integrity score",
    ],
    challenges:
      "Making the platform impressive with zero API keys while staying genuinely AI-driven when a key is present meant building an adaptive local engine behind the same interface as the LLM path. Streaming one question at a time and scaling difficulty to answer quality required careful session-state orchestration.",
  },
  {
    slug: "blogforge",
    title: "BlogForge",
    description: "your blogging workspace",
    longDescription:
      "BlogForge is a full-featured blogging platform where writers can create, edit, and publish rich content with a clean editor. It supports image uploads via Cloudinary, user authentication, and a responsive reading experience.",
    tags: ["Next.js", "Tailwind", "MongoDB", "cloudinary"],
    image: "/blogspot.png",
    link: "https://blog-forge-weld.vercel.app",
    github: "https://github.com/scripter-kartik/BlogForge",
    year: "2024",
    features: [
      "Rich text editor with image upload support",
      "User authentication and protected routes",
      "Cloudinary integration for media storage",
      "Responsive reading layout with dark mode",
      "MongoDB-backed post and user management",
    ],
    challenges:
      "Implementing real-time image upload with progress feedback while keeping the editor state in sync was the trickiest part. Solved it by decoupling the upload flow from the editor using a custom hook.",
  },
  {
    slug: "inkshelf",
    title: "InkShelf",
    description: "your online bookshelf",
    longDescription:
      "InkShelf is a personal book tracking app powered by the Open Library API. Users can search millions of books, add them to their shelf, mark reading status, and discover new reads with a beautifully minimal interface.",
    tags: ["Next.js", "Tailwind", "API", "Open Library"],
    image: "/inkshelf.png",
    link: "https://ink-shelf.vercel.app",
    github: "https://github.com/scripter-kartik/InkShelf",
    year: "2024",
    features: [
      "Search 20M+ books via Open Library API",
      "Personal shelf with reading status tracking",
      "Book detail pages with cover art and metadata",
      "Responsive, minimal UI optimised for reading",
      "Client-side state persistence",
    ],
    challenges:
      "The Open Library API has inconsistent data shapes across books — some fields are missing or nested differently. Built a normalisation layer to handle all edge cases before rendering.",
  },
  {
    slug: "tune-together",
    title: "Tune-Together",
    description: "chat powered by music",
    longDescription:
      "Tune-Together is a real-time chat application where rooms are themed around music. Built with Socket.io for live messaging, Clerk for auth, and a sleek UI. Users join music-genre rooms and chat with others sharing the same taste.",
    tags: ["Next.js", "Socket.io", "Clerk", "Tailwind"],
    image: "/tunetogether.png",
    link: "https://tunetogether.vercel.app",
    github: "https://github.com/scripter-kartik/tune-together",
    year: "2024",
    features: [
      "Real-time messaging with Socket.io",
      "Music-genre themed chat rooms",
      "Clerk authentication with user profiles",
      "Presence indicators (online/offline)",
      "Message history on room join",
    ],
    challenges:
      "Managing WebSocket connections at scale while ensuring messages are delivered in order required careful event sequencing on the server. Also handled graceful reconnection when users lose internet.",
  },
  {
    slug: "vidtube",
    title: "VidTube",
    description: "youtube clone platform",
    longDescription:
      "VidTube is a full-stack YouTube clone with video upload, playback, channel pages, likes, and comments. Built with Appwrite as the backend-as-a-service for storage and database, and React for a snappy frontend.",
    tags: ["Next.js", "React", "Tailwind", "Appwrite"],
    image: "/vidtube.png",
    link: "https://VidTube-platform.vercel.app",
    github: "https://github.com/scripter-kartik/YouTube-Clone",
    year: "2023",
    features: [
      "Video upload and adaptive streaming",
      "Channel pages with subscriber counts",
      "Like, comment, and reply system",
      "Appwrite storage and database integration",
      "Responsive grid and player layout",
    ],
    challenges:
      "Video streaming in the browser requires careful buffering strategy. Used Appwrite's file preview URLs with range requests to enable seek-ahead without downloading the full file.",
  },
  {
    slug: "edusity",
    title: "Edusity",
    description: "university landing page",
    longDescription:
      "Edusity is a polished university marketing landing page designed to convert visitors into applicants. Features smooth scroll animations, program showcases, testimonials, and a contact form — all built with pure React and CSS.",
    tags: ["React", "Tailwind", "CSS"],
    image: "/edusity.png",
    link: "https://edu-sity-website.vercel.app",
    github: "https://github.com/scripter-kartik/Edusity-website",
    year: "2023",
    features: [
      "Smooth scroll-triggered animations",
      "Program showcase with filterable cards",
      "Student testimonials carousel",
      "Responsive mobile-first layout",
      "Contact form with validation",
    ],
    challenges:
      "Achieving buttery smooth scroll animations without a library meant writing custom IntersectionObserver logic. Carefully tuned thresholds and CSS transitions to make every section feel alive.",
  },
];
export const FULL_STACK_SKILLS = [
  { name: "HTML", tag: "HT", tone: "text-orange-300" },
  { name: "CSS", tag: "CS", tone: "text-sky-300" },
  { name: "JavaScript", tag: "JS", tone: "text-yellow-300" },
  { name: "React", tag: "RE", tone: "text-cyan-300" },
  { name: "Next.js", tag: "NX", tone: "text-white" },
  { name: "Node.js", tag: "ND", tone: "text-green-300" },
  { name: "Express", tag: "EX", tone: "text-gray-300" },
  { name: "MongoDB", tag: "DB", tone: "text-emerald-300" },
  { name: "Tailwind", tag: "TW", tone: "text-teal-300" },
  { name: "Git", tag: "GT", tone: "text-red-300" },
];
export const SKILL_GROUPS = [
  {
    title: "languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "frameworks",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind"],
  },
  {
    title: "databases",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "tools",
    items: ["Git", "GitHub", "Postman", "Vercel", "Figma"],
  },
  {
    title: "currently learning",
    items: ["Docker", "Redis", "System Design"],
  },
  {
    title: "soft skills",
    items: ["Communication", "Ownership", "Problem Solving"],
  },
];