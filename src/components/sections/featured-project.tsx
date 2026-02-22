import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProject } from '@/content/projects';
import { Container, Section, ScrollFade, TechTag } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function FeaturedProject() {
  const project = getFeaturedProject();
  if (!project) return null;

  return (
    <Section id="featured-project">
      <Container>
        {/* Intro — the story */}
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Featured Project
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {project.title}
          </h2>

          <div className="mt-6 space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              A restaurant owner in Belgium had been burned by developers who
              cloned his Wix site without understanding what he actually needed.
              His previous system scored{' '}
              <span className="font-semibold text-foreground">47</span> on
              Lighthouse. His previous developers told him:{' '}
            </p>

            <blockquote className="highlight-line text-lg italic text-muted-foreground">
              &ldquo;Everything you built already exists in my current Wix
              setup. You haven&rsquo;t added anything.&rdquo;
            </blockquote>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I took a different approach.{' '}
              <span className="font-semibold text-foreground">I listened.</span>{' '}
              Five months later, he had a complete platform scoring{' '}
              <span className="font-semibold text-foreground">94+</span> — six
              interconnected systems, real-time sync across every dashboard, and
              a thermal printer that prints receipts from the other side of the
              world.
            </p>
          </div>
        </ScrollFade>

        {/* Metrics */}
        <ScrollFade delay={100}>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {project.metrics.map(({ value, label }) => (
              <Card key={label} className="h-full">
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <p className="text-3xl font-bold tracking-tight">{value}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollFade>

        {/* Tech + CTA */}
        <ScrollFade delay={180}>
          <Separator className="my-10" />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 6).map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
              {project.techStack.length > 6 && (
                <TechTag name={`+${project.techStack.length - 6}`} />
              )}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex flex-shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:text-foreground"
            >
              Read the full case study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollFade>
      </Container>
    </Section>
  );
}