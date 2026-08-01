import React from 'react';

export const projectsData = [
  // project 1
  {
    id: 'ai-pull-requests-reviewer',
    title: 'Ai-Pull-Requests-Reviewer',
    tagline: 'Automated CI/CD code reviewer using LLaMA 3.3 via Groq.',
    client: 'Open Source',
    duration: '10 days',
    role: 'Full Stack Developer',
    category: 'DevOps / AI Tooling',
    status: 'Active',
    teamSize: '1',
    completionDate: 'Jan 2026',
    images: [
      '/project img/aiprviewer1.png',
      '/project img/aiprviewer2.png',
      '/project img/aiprviewer3.png',
      '/project img/aiprviewer4.png',
      '/project img/aiprviewer5.png',
      

    ],
    description: (
      <>
        <p className="mb-4">
          Developed an intelligent, full-stack application that acts as an automated CI/CD code reviewer using LLaMA 3.3 via Groq. It automatically fetches GitHub Pull Requests, analyzes code diffs file-by-file, and identifies bugs.
        </p>
        <p className="mb-4">
          <strong>Zero-Click Automation & Webhooks:</strong> Listens to GitHub pull_request webhook events, automatically triggering AI inference and posting contextual markdown reviews directly to the PR.
        </p>
      </>
    ),
    overview: "An intelligent, full-stack application that replaces expensive automated code review tools. It integrates directly with GitHub webhooks to analyze pull requests the moment they are created. By leveraging Groq APIs and LLaMA 3.3 models, it provides instant, highly accurate feedback on code diffs file-by-file.",
    problem: "Manual code reviews take too much developer time, and existing AI-driven PR reviewers are heavily monetized, keeping critical code quality and security feedback behind expensive paywalls.",
    solution: "Created a decoupled client-server architecture with a FastAPI backend listening to GitHub webhooks. It extracts diffs, feeds them into LLaMA 3.3 for rapid inference via Groq's LPU, and posts the results directly as GitHub comments, effectively democratizing AI code analysis.",
    features: ["Zero-Click Automated Reviews", "Detailed File-by-File Diff Analysis", "Quality Scoring Algorithm (0-100)", "Direct Fix Suggestions", "Contextual Markdown Comments", "Analytics Dashboard for Repo Health", "Symmetric Token Encryption", "HMAC SHA-256 Webhook Validation"],
    tags: ['React 19', 'Python 3.10+', 'FastAPI', 'PostgreSQL', 'Groq API', 'LLaMA 3.3', 'Tailwind CSS v4'],
    techStack: {
      Frontend: ["React 19", "Vite", "Tailwind CSS v4"],
      Backend: ["Python 3.10+", "FastAPI", "SQLAlchemy", "PostgreSQL", "Groq API"],
      Tools: ["Git", "Docker", "PyGithub"]
    },
    architecture: [
      "GitHub Webhook Event",
      "FastAPI Backend",
      "Groq LLaMA 3.3 Engine",
      "PostgreSQL Database",
      "React 19 Dashboard"
    ],
    challenges: [
      { issue: "Handling very large code diffs causing AI context window limits", solution: "Chunked the diffs and processed them file-by-file via Groq", result: "Analyzed heavy PRs efficiently without context drop" },
      { issue: "High API latency dropping GitHub webhook connections", solution: "Utilized FastAPI Background Tasks to return 202 Accepted immediately, while fetching from Groq LPU asynchronously", result: "Zero dropped webhooks and 80% faster inference" }
    ],
    performance: {
      lighthouse: 95,
      loading: "1.2s",
      accessibility: 98,
      seo: 100,
      performance: 99
    },
    future: ["Custom Rule Definitions (Coding Standards)", "Vector embeddings for full codebase context", "Support for GitLab & Bitbucket"],
    links: {
      demo: "https://pr.nirajjhapate.in/",
      github: "https://github.com/jhapate0704/Ai-Pull-Requests-Reviewer",
      docs: "https://github.com/jhapate0704/Ai-Pull-Requests-Reviewer/blob/main/README.md"
    }
  },
  // project 2
  {
    id: 'trimsync-barbers-app',
    title: 'TrimSync — Barber\'s App',
    tagline: 'Real-time marketplace connecting customers with top-tier salons.',
    client: 'Startup Concept',
    duration: '5 Months',
    role: 'MERN Stack Developer',
    category: 'Marketplace / Web App',
    status: 'In Development',
    teamSize: '1',
    completionDate: 'Ongoing',
    images: [
      '/project img/Barber1.png',
      '/project img/Barber2.png',
      '/project img/Barber3.png',
      '/project img/Barber4.png',
    ],
    description: (
      <>
        <p className="mb-4">
          <strong>TrimSync</strong> is a full-stack, real-time marketplace and management platform designed to connect customers with top-tier salons and barbershops. Built on the MERN stack.
        </p>
        <p className="mb-4">
          <strong>🔍 Marketplace Discovery:</strong> Customers can browse local salons and barbershops with a real-time "Live Shop Floor" powered by Socket.io WebSockets.
        </p>
      </>
    ),
    overview: "TrimSync is a full-stack, real-time marketplace and management platform designed to connect customers with top-tier salons and barbershops. By eliminating wait times and optimizing scheduling with a live shop floor view, it breathes fresh air into the salon industry.",
    problem: "The traditional salon industry struggles with unpredictable wait times and scattered booking systems. Customers often arrive at barbershops only to find massive queues, and salons lack a centralized way to manage walk-ins versus appointments.",
    solution: "Built a modern decoupled client-server architecture using the MERN stack. Implemented a real-time web-socket architecture via Socket.io to broadcast queue changes universally, bringing transparency to shop floors alongside an interactive booking wizard.",
    features: ["Live Queue System (Socket.io)", "Marketplace Discovery", "Interactive Booking Wizard", "Role-based Dashboards (Customer/Owner/Admin)", "Real-Time Chair Management", "Cloudinary Portfolio Integration"],
    tags: ['React 19', 'Node.js 18+', 'Express 5', 'MongoDB (Mongoose 9)', 'Socket.io', 'JWT', 'Cloudinary', 'TailwindCSS 4'],
    techStack: {
      Frontend: ["React 19", "JavaScript", "TailwindCSS 4", "Vite", "React Router 7"],
      Backend: ["Node.js", "Express 5", "MongoDB", "Socket.io", "JWT"],
      Tools: ["Git", "Cloudinary", "Postman"]
    },
    architecture: [
      "Customer & Barber UI",
      "React 19 + Tailwind",
      "Socket.io WebSockets",
      "Node.js + Express 5",
      "MongoDB Database"
    ],
    challenges: [
      { issue: "Syncing live queue state across multiple clients seamlessly", solution: "Implemented robust Socket.io event broadcasting and decoupled client-server state management", result: "Real-time updates with near-zero latency universally" }
    ],
    performance: {
      lighthouse: 90,
      loading: "1.8s",
      accessibility: 95,
      seo: 88,
      performance: 92
    },
    future: ["GPS-based Salon Discovery", "In-app Payments Integration", "Loyalty Points System", "Barber Review System"],
    links: {
      demo: "#",
      github: "https://github.com/jhapate0704/Barbers-App",
      docs: "https://github.com/jhapate0704/Barbers-App/blob/main/README.md"
    }
  },
  // project 3
  {
    id: 'paper-upload-portal',
    title: 'Paper Upload Portal',
    tagline: 'A university hub for managing and downloading past exam papers.',
    client: 'University Project',
    duration: '4 Months',
    role: 'Full Stack Developer',
    category: 'Educational Platform',
    status: 'Completed',
    teamSize: '2',
    completionDate: 'Nov 2024',
    images: [
      '/project img/paperportal1.jpg',
      '/project img/paperportal2.jpg',
      '/project img/paperportal3.jpg',
    ],
    description: (
      <>
        <p className="mb-4">
          A full-stack web application that allows university students to browse, filter, and download previous exam papers. Admins can upload and manage papers through a secure dashboard.
        </p>
        <p className="mb-4">
          <strong>Smart Filtering & Search:</strong> Students can browse papers by branch, semester, and exam year with an intuitive filter bar.
        </p>
      </>
    ),
    overview: "The University Paper Portal bridges the gap between students and essential study materials. It acts as a centralized database for past university exam papers, featuring a powerful filter-based search engine and a secure drag-and-drop admin uploading workflow.",
    problem: "Students struggled to find previous exam papers before finals. Existing drives were disorganized, physical archives were chaotic, and papers were scattered across WhatsApp groups.",
    solution: "Built a robust decoupled client-server application. The frontend offers instant filtering and in-browser PDF rendering, while the Express/PostgreSQL backend manages metadata and secure JWT-authenticated file uploads via Multer.",
    features: ["Filter & Search Engine", "In-browser PDF Preview (react-pdf)", "Direct Server Downloads", "Grid/List Toggle Views", "JWT Secure Admin Dashboard", "Drag-and-Drop Multer Uploads"],
    tags: ['React 19', 'Node.js', 'Express 5', 'PostgreSQL', 'Vite', 'JWT', 'Multer'],
    techStack: {
      Frontend: ["React 19", "JavaScript", "Tailwind CSS 3.4", "Vite", "Axios"],
      Backend: ["Node.js", "Express 5", "PostgreSQL", "JWT", "Multer"],
      Tools: ["Git", "Postman", "Local File System"]
    },
    architecture: [
      "Client SPA",
      "React 19 + Tailwind",
      "REST API (Express 5)",
      "Multer File System",
      "PostgreSQL Database"
    ],
    challenges: [
      { issue: "Slow query times for complex branch and semester filters", solution: "Added compound indexes in PostgreSQL for highly queried columns", result: "Query time reduced from 800ms to 50ms" }
    ],
    performance: {
      lighthouse: 92,
      loading: "1.5s",
      accessibility: 96,
      seo: 90,
      performance: 94
    },
    future: ["Mobile Application", "Student Discussion Forums", "Notes Sharing Section"],
    links: {
      demo: "#",
      github: "https://github.com/jhapate0704/Paper-upload-Portal",
      docs: "https://github.com/jhapate0704/Paper-upload-Portal/blob/main/README.md"
    }
  },
  // project 4
   {
    id: 'smart-bookmark',
    title: 'Smart Bookmark Manager',
    tagline: 'A modern, bookmarking extension that organizes your web.',
    client: 'Internal / Open Source',
    duration: '3 Months',
    role: 'Lead Full Stack Developer',
    category: 'Browser Extension / SaaS',
    status: 'Completed & Deployed',
    teamSize: '1 (Solo Developer)',
    completionDate: 'Dec 2025',
    images: [
      '/project img/ChromExtension-1.png',
      '/project img/ChromExtension-2.png',
    ],
    description: (
      <>
        <p className="mb-4">
          Engineered a premium, highly interactive Google Chrome Extension that modernizes the browser's bookmarking system by transforming it into an intuitive, native iOS 26/VisionOS inspired environment.
        </p>
        <p className="mb-4">
          <strong>Browser API Integration:</strong> Deeply integrated with Chrome's native capabilities, utilizing the Context Menu API to allow one-click AI-powered bookmark tagging directly from web pages.
        </p>
      </>
    ),
    overview: "A premium Google Chrome Extension that transforms your browser bookmarks into a stunning, native iOS 26 / VisionOS experience right inside your browser. It leverages advanced CSS3 capabilities and Manifest V3 for a flawless feel.",
    problem: "Browser bookmarks quickly become a visually dull and cluttered graveyard of links. Default bookmark managers completely lack modern design language, interaction physics, and visual grouping.",
    solution: "Developed a Manifest V3 Chrome extension that overhauls the UI into an App Grid layout. Implemented Liquid Glass frosted aesthetics, a fully functional Dynamic Island search bar, and native-style Smart Folders for intuitive categorization.",
    features: ["Liquid Glass UI (Backdrop-filter)", "Interactive Dynamic Island", "App Grid Layout with Hover Physics", "Native-style Smart Folders", "Frosted Glass Context Menus", "Intelligent chrome.storage.sync"],
    tags: ['JavaScript ES6+', 'Chrome Extension', 'Manifest V3', 'CSS3', 'VisionOS Design'],
    techStack: {
      Frontend: ["JavaScript ES6+", "HTML5", "Advanced CSS3"],
      Backend: ["Chrome API (storage.sync)", "Manifest V3 Service Workers"],
      Tools: ["Git", "Chrome Developer Tools"]
    },
    architecture: [
      "Chrome Extension (Client)",
      "Advanced DOM Manipulation",
      "Manifest V3 Background Scripts",
      "chrome.storage.sync Engine"
    ],
    challenges: [
      { issue: "Creating authentic Apple-style fluid physics and heavy blurring without lag", solution: "Combined hardware-accelerated CSS spring animations and optimized backdrop-filters", result: "Achieved a flawless 60FPS UI mimicking VisionOS natively" },
      { issue: "Preventing duplicate bookmarks during cloud sync", solution: "Built a custom intelligent syncing layer wrapping chrome.storage.sync", result: "Zero duplicate links across multiple synced devices" }
    ],
    performance: {
      lighthouse: 98,
      loading: "0.2s",
      accessibility: 100,
      seo: 90,
      performance: 99
    },
    future: ["Firefox Port", "Custom Wallpaper Support", "Widget Integration on Floating Dock"],
    links: {
      demo: "#",
      github: "https://github.com/jhapate0704/smart-bookmark",
      docs: "https://github.com/jhapate0704/smart-bookmark/blob/main/README.md"
    }
  },
  // project 5
  {
    id: 'saas-monitoring-platform',
    title: 'PulseWatch — SaaS Monitoring',
    tagline: 'Enterprise multi-channel SaaS uptime & HTTP/SSL monitoring platform.',
    client: 'Enterprise SaaS / Open Source',
    duration: '4 Months',
    role: 'Lead MERN Stack Developer',
    category: 'DevOps / SaaS Monitoring',
    status: 'Completed & Active',
    teamSize: '1 (Solo Developer)',
    completionDate: 'Feb 2026',
    images: [
      '/project img/monitaring1.png',
      '/project img/monitaring2.png',
      '/project img/monitaring3.png',
      '/project img/monitaring4.png',
      '/project img/monitaring5.png',
    ],
    description: (
      <>
        <p className="mb-4">
          <strong>PulseWatch</strong> is an enterprise-grade, real-time SaaS monitoring and multi-channel alerting platform built with the MERN stack (MongoDB, Express, React 19, Node.js).
        </p>
        <p className="mb-4">
          <strong>📡 Multi-Channel Alerting & SSRF Protection:</strong> Monitors HTTP/SSL health, keyword integrity, and latency in real time. Features instant alerts via Email (SMTP/Nodemailer), SMS (Twilio), and Discord Webhooks with built-in SSRF security filtering.
        </p>
      </>
    ),
    overview: "PulseWatch is a highly scalable, real-time SaaS monitoring platform built with the MERN stack. It empowers developers and DevOps teams to track service uptime, monitor HTTP/SSL certificates, detect keyword failures, receive multi-channel alerts (Email, SMS, Discord), and host public status pages.",
    problem: "Modern microservices and SaaS web apps suffer from undetected downtime, silent SSL certificate expirations, and delayed alerting across fragmented communication channels without centralized real-time metric tracking.",
    solution: "Architected a decoupled MERN platform utilizing Node-cron worker threads and Socket.io WebSockets for sub-second latency visualization. Integrated multi-channel alert dispatching (Email, SMS via Twilio, and Discord Webhooks) alongside SSRF security shields protecting internal network endpoints.",
    features: [
      "Real-Time HTTP & SSL Health Checks",
      "Multi-Channel Alerts (Email, SMS, Discord)",
      "Socket.io Sub-Second Latency Sync",
      "SSRF Security Shield Regex Filtering",
      "Public Status Pages & Incident Logging",
      "Recharts Interactive Metric Graphs",
      "Automated Keyword & SSL Expiration Detection",
      "OWASP Audited Rate Limiting & Auth"
    ],
    tags: ['React 19', 'Node.js 18+', 'Express 5', 'MongoDB', 'Socket.io', 'Redis', 'Twilio API', 'Tailwind CSS'],
    techStack: {
      Frontend: ["React 19", "Vite", "Tailwind CSS", "Recharts", "Lucide React", "Socket.io-client"],
      Backend: ["Node.js 18+", "Express 5", "MongoDB (Mongoose)", "Socket.io", "BullMQ", "Redis", "Node-cron"],
      SecurityIntegrations: ["Nodemailer (SMTP)", "Twilio SMS API", "Discord Webhooks", "SSRF Regex Filter", "Helmet Headers", "JWT (HS256)"]
    },
    architecture: [
      "React 19 Vite Dashboard",
      "Express 5 REST & Socket.io Server",
      "Node-cron & BullMQ Worker Engine",
      "SSRF Filter & HTTP Ping / SSL Checker",
      "Multi-Channel Alert Dispatcher",
      "MongoDB & Redis Storage Layer"
    ],
    challenges: [
      { 
        issue: "Preventing Server-Side Request Forgery (SSRF) when pinging user-provided monitor URLs", 
        solution: "Implemented custom internal IP regex validation blocking localhost, 127.0.0.1, 10.x.x.x, 192.168.x.x, and AWS metadata IPs", 
        result: "Zero security vulnerabilities with strict OWASP compliance" 
      },
      { 
        issue: "Ensuring zero-delay metric updates on live client dashboards during high-frequency monitor checks", 
        solution: "Integrated Socket.io WebSocket broadcasts directly inside the background worker execution loop", 
        result: "Instant live chart updates without client polling overhead" 
      }
    ],
    performance: {
      lighthouse: 96,
      loading: "1.1s",
      accessibility: 98,
      seo: 95,
      performance: 97
    },
    future: [
      "Slack & PagerDuty Integration",
      "Multi-Region Global Edge Ping Nodes",
      "Synthetic User Journey Testing (Puppeteer)",
      "Custom CNAME Domain Binding for Public Status Pages"
    ],
    links: {
      demo: "#",
      github: "https://github.com/jhapate0704/SaaS-Monitoring-platform",
      docs: "https://github.com/jhapate0704/SaaS-Monitoring-platform/blob/main/README.md"
    }
  }
];
