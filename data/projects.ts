import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "recipe-hub",
    title: "Recipe Hub",
    description: "teste descrição",
    longDescription: "teste descrição longa",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/DanielMoscardini/recipe-hub",
    deployUrl: "",
    thumbnail: "/projects/recipe-hub.png",
  },
];
