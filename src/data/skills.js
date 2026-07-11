// src/data/skills.js
import {Brain,Bot,Plug,CreditCard,UserCog,Sparkles} from "lucide-react";
import {FaLayerGroup, FaNetworkWired,FaCubes,FaServer,FaShieldAlt,FaCodeBranch,FaPuzzlePiece,FaBroom} from "react-icons/fa";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" }
  
    ]
  },
  {
    id: "database",
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" }
    ]
  },
  {
    id: "tools",
    title: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "cursor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cursor/cursor-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" }
    ]
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
       { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
       { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
       { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
       { name: "Render", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/render/render-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" }
    ]
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "🏗️",
    skills: [
  { name: "MVC Architecture", icon: "" },
  { name: "REST Architecture", icon:"" },
  { name: "Component-Based", icon: "" },
  { name: "Client-Server", icon: "" },
  { name: "Authentication Flow", icon: "" },
  { name: "State Management", icon: "" },
  { name: "Modular Structure", icon: "" },
  { name: "Clean Code", icon: "" }
    ]
  },
  {
    id: "ai",
    title: "AI & Integrations",
    icon: "🤖",
    skills: [
      {
        name: "OpenAI API",
        icon: ""
      },
      {
        name: "Gemini API",
        icon: "https://cdn.simpleicons.org/googlegemini"
      },
      {
        name: "Claude API",
        icon: "https://cdn.simpleicons.org/anthropic"
      },
      {
        name: "AI Chatbots",
        icon: ""
      },
      {
        name: "Third-Party APIs",
        icon: "https://cdn.simpleicons.org/postman"
      },
      
      ]
  },
  {
    id: "testing",
    title: "Testing & Perf",
    icon: "🧪",
    skills: [
      { name: "API Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/api/api-original.svg" },
      { name: "Debugging", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debugging/debugging-original.svg" },
      { name: "Chrome DevTools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" },
      
      { name: "SEO Optimization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/seo/seo-original.svg" },
      { name: "Performance Optimization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/performance/performance-original.svg" },
      { name: "Lazy Loading", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lazy/lazy-original.svg" },
    ]
  }
];
