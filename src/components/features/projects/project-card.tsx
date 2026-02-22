import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TechTag } from '@/components/common';
import { Separator } from '@/components/ui/separator';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="card-hover flex h-full flex-col">
        <CardContent className="flex h-full flex-col p-6">
          {/* Meta row */}
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {project.category}
            </p>
            <span className="font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-4 text-lg font-semibold tracking-tight transition-colors group-hover:text-foreground">
            {project.title}
          </h3>

          {/* Description — fixed height via line clamp */}
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {project.subtitle}
          </p>

          <Separator className="my-4" />

          {/* Footer: tech + arrow */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 flex-wrap gap-1.5">
              {project.techStack.slice(0, 3).map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
              {project.techStack.length > 3 && (
                <TechTag name={`+${project.techStack.length - 3}`} />
              )}
            </div>

            <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}