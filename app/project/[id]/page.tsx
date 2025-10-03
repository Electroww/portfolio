import projectsData from "@/data/projects.json";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  // Trouver le projet correspondant à l'ID
  const project = projectsData.find((p) => p.id === id);

  // Si le projet n'existe pas, afficher la page 404
  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl h-full flex flex-col gap-10 px-3">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold font-title">{project.title}</h1>
        <p className="text-lg font-sans">{project.description}</p>
        <p className=" font-sans text-gray-600 dark:text-gray-400">
          <b>{project.time_begin}</b> to <b>{project.time_end}</b>
        </p>
      </div>

      <div className="flex flex-col">
        <h2 className="text-xl font-semibold font-title mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-sm font-sans">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {project.url && (
        <div className="mt-8">
          <Button asChild variant="default" className="font-sans">
            <Link href={project.url} target="_blank">
              Visit the project
              <ArrowUpRightIcon size={32} />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
