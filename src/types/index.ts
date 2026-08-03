export interface Projects {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  period: string;
  context: string;
  responsibilities: string[];
  highlights: string[];
  outcomes: string[];
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  category: "Mobile" | "Web";
}
