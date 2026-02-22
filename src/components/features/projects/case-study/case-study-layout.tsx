import { Container, Section, ScrollFade, TechTag, BackLink } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SystemArchitecture } from './system-architecture';
import { PlatformCard } from './platform-card';
import { ChallengeSection } from './challenge-section';
import { DecisionCard } from './decision-card';
import { PerformanceComparison } from './performance-comparison';
import { HumanSide } from './human-side';
import type { Project } from '@/types';

interface CaseStudyLayoutProps {
  project: Project;
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <>
      {/* ── Header ── */}
      <Section>
        <Container>
          <ScrollFade>
            <BackLink href="/projects" label="Back to projects" />

            <div className="mt-8">
              <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
                Case Study
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {project.subtitle}
              </p>
            </div>

            {/* Metadata */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-muted-foreground">
              <span>Role: {project.role}</span>
              <span>Duration: {project.duration}</span>
              {project.clientLocation && (
                <span>Client: {project.clientLocation}</span>
              )}
              <span>Status: {project.status}</span>
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
        </Container>
      </Section>

      {/* ── The Challenge ── */}
      <Section className="pt-0">
        <Container>
          <ScrollFade>
            <Separator className="mb-16" />
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              The Challenge
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Why this project exists
            </h2>
          </ScrollFade>

          <ScrollFade delay={80}>
            <div className="mt-8 space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
          </ScrollFade>
        </Container>
      </Section>

      {/* ── System Architecture ── */}
      <Section className="pt-0">
        <Container>
          <ScrollFade>
            <Separator className="mb-16" />
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              System Overview
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Architecture
            </h2>
          </ScrollFade>

          <ScrollFade delay={80}>
            <div className="mt-10">
              <SystemArchitecture />
            </div>
          </ScrollFade>
        </Container>
      </Section>

      {/* ── Platforms ── */}
      {project.platforms && project.platforms.length > 0 && (
        <Section className="pt-0">
          <Container>
            <ScrollFade>
              <Separator className="mb-16" />
              <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
                What I Built
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                The Platforms
              </h2>
              <p className="mt-3 text-muted-foreground">
                Six interconnected systems, each purpose-built for its users.
              </p>
            </ScrollFade>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {project.platforms.map((platform, i) => (
                <ScrollFade key={platform.name} delay={i * 60}>
                  <PlatformCard platform={platform} index={i} />
                </ScrollFade>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Challenges ── */}
      {project.challenges && project.challenges.length > 0 && (
        <Section className="pt-0">
          <Container>
            <ScrollFade>
              <Separator className="mb-16" />
              <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
                Problem Solving
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                The Hardest Problems
              </h2>
            </ScrollFade>

            <div className="mt-10 space-y-14">
              {project.challenges.map((challenge, i) => (
                <ScrollFade key={challenge.title} delay={i * 80}>
                  <ChallengeSection challenge={challenge} />
                </ScrollFade>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Architectural Decisions ── */}
      {project.architecturalDecisions &&
        project.architecturalDecisions.length > 0 && (
          <Section className="pt-0">
            <Container>
              <ScrollFade>
                <Separator className="mb-16" />
                <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
                  Engineering
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight">
                  Architectural Decisions
                </h2>
              </ScrollFade>

              <div className="mt-10 space-y-6">
                {project.architecturalDecisions.map((decision, i) => (
                  <ScrollFade key={decision.title} delay={i * 80}>
                    <DecisionCard decision={decision} />
                  </ScrollFade>
                ))}
              </div>
            </Container>
          </Section>
        )}

      {/* ── Performance ── */}
      {project.performance && (
        <Section className="pt-0">
          <Container>
            <ScrollFade>
              <Separator className="mb-16" />
              <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
                Results
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Performance
              </h2>
              <p className="mt-3 text-muted-foreground">
                Lighthouse desktop scores — the only metric that mattered to the client.
              </p>
            </ScrollFade>

            <ScrollFade delay={80}>
              <div className="mt-10">
                <PerformanceComparison data={project.performance} />
              </div>
            </ScrollFade>
          </Container>
        </Section>
      )}

      {/* ── Human Side ── */}
      {project.humanSide && (
        <Section className="pt-0">
          <Container>
            <ScrollFade>
              <Separator className="mb-16" />
              <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
                Beyond the Code
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                The Human Side
              </h2>
            </ScrollFade>

            <ScrollFade delay={80}>
              <div className="mt-10">
                <HumanSide
                  quote={project.humanSide.quote}
                  quoteAttribution={project.humanSide.quoteAttribution}
                  points={project.humanSide.points}
                />
              </div>
            </ScrollFade>
          </Container>
        </Section>
      )}

      {/* ── Full Tech Stack ── */}
      <Section className="pt-0">
        <Container>
          <ScrollFade>
            <Separator className="mb-16" />
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              Technology
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Full Tech Stack
            </h2>
          </ScrollFade>

          <ScrollFade delay={80}>
            <div className="mt-10 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </ScrollFade>
        </Container>
      </Section>
    </>
  );
}