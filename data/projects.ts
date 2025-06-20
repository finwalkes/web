export type Project = {
  title: string
  framework: string
  category: "Frontend" | "Backend" | "Fullstack"
  description: string
  url: string
  repo: string
  tags: string[]
  image: string
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    framework: "Next.js",
    category: "Frontend",
    description: "Modern personal website dengan Next.js dan Tailwind CSS.",
    url: "https://your-portfolio.vercel.app",
    repo: "https://github.com/finwalkes/web",
    tags: ["UI/UX", "Portfolio"],
    image: "/images/portfolio.png"
  },
  {
    title: "Company Landing Page",
    framework: "Vue",
    category: "Frontend",
    description: "Landing page responsif untuk perusahaan.",
    url: "https://company-landing.vercel.app",
    repo: "https://github.com/username/company-landing",
    tags: ["Vue", "Landing Page"],
    image: "/images/company-landing.png"
  },
  {
    title: "REST API Boilerplate",
    framework: "Express",
    category: "Backend",
    description: "Template backend REST API dengan autentikasi JWT.",
    url: "https://api-demo.fly.dev",
    repo: "https://github.com/username/express-api-boilerplate",
    tags: ["Node.js", "API", "JWT"],
    image: "/images/express-api.png"
  },
  {
    title: "Task Manager App",
    framework: "MERN Stack",
    category: "Fullstack",
    description: "Aplikasi manajemen tugas dengan MongoDB, Express, React, Node.js.",
    url: "https://taskmanager-demo.vercel.app",
    repo: "https://github.com/username/taskmanager-mern",
    tags: ["Fullstack", "CRUD"],
    image: "/images/taskmanager.png"
  },
  {
    title: "E-commerce Backend",
    framework: "Laravel",
    category: "Backend",
    description: "API backend untuk aplikasi toko online.",
    url: "https://ecommerce-api.fly.dev",
    repo: "https://github.com/username/laravel-ecommerce-api",
    tags: ["Laravel", "Backend"],
    image: "/images/laravel-api.png"
  },
  {
    title: "Blog Platform",
    framework: "Next.js",
    category: "Fullstack",
    description: "Platform blog modern (Next.js, Prisma, PostgreSQL).",
    url: "https://blog-platform-demo.vercel.app",
    repo: "https://github.com/username/nextjs-blog-platform",
    tags: ["Fullstack", "Blog", "Prisma"],
    image: "/images/blog-platform.png"
  },
]
