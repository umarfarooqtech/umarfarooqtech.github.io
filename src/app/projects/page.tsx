import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { getFeaturedProject, getStandardProjects } from '@/content/projects';
import { Container, Section, ScrollFade } from '@/components/common';
import { ProjectCard } from '@/components/features/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { TechTag } from '@/components/common';

export const metadata: Metadata = createMetadata({
  title: 'Projects',
  description:
    'Selected projects and case studies — end-to-end product development, full-stack systems, and production-grade applications.',
  path: '/projects',
});

export default function ProjectsPage() {
  const featured = getFeaturedProject();
  const standard = getStandardProjects();

  return (
    <Section>
      <Container>
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Work
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Systems I&rsquo;ve designed and built — from concept to production.
          </p>
        </ScrollFade>

        {/* Featured */}
        {featured && (
          <ScrollFade delay={80}>
            <Link
              href={`/projects/${featured.slug}`}
              className="group mt-12 block"
            >
              <Card className="transition-colors hover:border-foreground/20">
                <CardContent className="p-8">
                  <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    Featured Case Study
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                    {featured.subtitle}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.techStack.slice(0, 6).map((tech) => (
                      <TechTag key={tech} name={tech} />
                    ))}
                    {featured.techStack.length > 6 && (
                      <TechTag name={`+${featured.techStack.length - 6}`} />
                    )}
                  </div>

                  <div className="mt-6 flex items-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Read case study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </ScrollFade>
        )}

        {/* Standard */}
        {standard.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {standard.map((project, i) => (
              <ScrollFade key={project.slug} delay={120 + i * 60}>
                <ProjectCard project={project} />
              </ScrollFade>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}