export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  heroImage: string;
  role: string;
  timeline: string;
  technologies: string[];
  challenge: string;
  solution: string;
  gallery: {
    url: string;
    caption: string;
    alt: string;
  }[];
  nextProjectId?: string;
}
