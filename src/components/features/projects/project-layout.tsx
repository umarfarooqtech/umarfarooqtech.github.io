import { Container, Section, ScrollFade, TechTag, BackLink } from '@/components/common';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types';

interface ProjectLayoutProps {
  project: Project;
}

export function ProjectLayout({ project }: ProjectLayoutProps) {
  return (
    <Section>
      <Container>
        <ScrollFade>
          <BackLink href="/projects" label="Back to projects" />

          <div className="mt-8">
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              {project.category}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.subtitle}
            </p>
          </div>

          {/* Metadata */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-muted-foreground">
            <span>Year: {project.year}</span>
            <span>Role: {project.role}</span>
            <span>Duration: {project.duration}</span>
            <span>Status: {project.status}</span>
          </div>
        </ScrollFade>

        {/* Description */}
        <ScrollFade delay={80}>
          <div className="mt-12">
            <p className="leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
        </ScrollFade>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <ScrollFade delay={120}>
            <div className="mt-10">
              <h2 className="text-lg font-semibold tracking-tight">
                Key Highlights
              </h2>
              <ul className="mt-4 space-y-2.5">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFade>
        )}

        {/* Tech Stack */}
        <ScrollFade delay={160}>
          <div className="mt-10">
            <h2 className="text-lg font-semibold tracking-tight">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </div>
        </ScrollFade>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <ScrollFade delay={200}>
            <div className="mt-10 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </ScrollFade>
        )}
      </Container>
    </Section>
  );
}