import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { aboutContent } from '@/content/about';
import { Container, Section, ScrollFade, TechTag } from '@/components/common';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    'Full-stack developer specializing in end-to-end product development. Learn about my approach, beliefs, and tech stack.',
  path: '/about',
});

const techCategories = [
  { key: 'frontend' as const, label: 'Frontend' },
  { key: 'backend' as const, label: 'Backend' },
  { key: 'mobile' as const, label: 'Mobile' },
  { key: 'desktop' as const, label: 'Desktop' },
  { key: 'databases' as const, label: 'Databases' },
  { key: 'infrastructure' as const, label: 'Infrastructure' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Introduction ── */}
      <Section>
        <Container>
          <ScrollFade>
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              About
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {aboutContent.headline}
            </h1>
          </ScrollFade>

          <ScrollFade delay={80}>
            <div className="mt-10 space-y-5">
              {aboutContent.introduction.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollFade>
        </Container>
      </Section>

      {/* ── Approach ── */}
      <Section className="pt-0">
        <Container>
          <ScrollFade>
            <Separator className="mb-16" />
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              How I Work
            </h2>
          </ScrollFade>

          <div className="mt-12 space-y-10">
            {aboutContent.approach.map((item, i) => (
              <ScrollFade key={item.step} delay={i * 60}>
                <div className="group flex gap-6 md:gap-8">
                  <span className="flex-shrink-0 pt-0.5 font-mono text-3xl font-bold text-muted-foreground/20 transition-colors group-hover:text-muted-foreground/50">
                    {item.step}
                  </span>
                  <div className="border-l border-border pl-6 md:pl-8">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Beliefs ── */}
      <Section className="pt-0">
        <Container>
          <ScrollFade>
            <Separator className="mb-16" />
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              Perspective
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              What I Believe
            </h2>
          </ScrollFade>

          <div className="mt-10 space-y-8">
            {aboutContent.beliefs.map((belief, i) => (
              <ScrollFade key={belief.title} delay={i * 60}>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {belief.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {belief.description}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Work Preferences ── */}
      <Section className="pt-0">
        <Container>
          <ScrollFade>
            <Separator className="mb-16" />
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              Working Style
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              How I Prefer to Work
            </h2>
          </ScrollFade>

          <ScrollFade delay={80}>
            <ul className="mt-8 space-y-3">
              {aboutContent.workPreferences.map((pref, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                  {pref}
                </li>
              ))}
            </ul>
          </ScrollFade>
        </Container>
      </Section>

      {/* ── Tech Stack ── */}
      <Section className="pt-0">
        <Container>
          <ScrollFade>
            <Separator className="mb-16" />
            <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              Technology
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Tech I Work With
            </h2>
          </ScrollFade>

          <ScrollFade delay={80}>
            <div className="mt-10 space-y-6">
              {techCategories.map(({ key, label }) => (
                <div key={key} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                  <span className="w-28 flex-shrink-0 font-mono text-sm text-muted-foreground">
                    {label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {aboutContent.techStack[key].map((tech) => (
                      <TechTag key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollFade>
        </Container>
      </Section>
    </>
  );
}