import { projects } from "@/data/projects";
import { Project } from "@/types/project";

export function getAllProjects(): Project[] {
  // retorna todos os projetos
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
