import { Container, Section, ScrollFade, TechTag, BackLink, ProjectImage } from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectNavigation } from './project-navigation';
import { ImageGallery } from './image-gallery';
import type { Project } from '@/types';

interface ProjectLayoutProps {
  project: Project;
}

export function ProjectLayout({ project }: ProjectLayoutProps) {
  return (
    <Section>
      <Container>
        {/* ── Back ── */}
        <ScrollFade>
          <BackLink href="/projects" label="Back to projects" />
        </ScrollFade>

        {/* ── Header ── */}
        <ScrollFade delay={60}>
          <div className="mt-10">
            <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground">
              <span>{project.category}</span>
              <span className="text-border">·</span>
              <span>{project.year}</span>
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.subtitle}
            </p>
          </div>
        </ScrollFade>

        {/* ── Cover Image ── */}
        {project.coverImage && (
          <ScrollFade delay={90}>
            <div className="mt-10">
              <ProjectImage
                src={project.coverImage}
                alt={`${project.title} — main screenshot`}
                aspect="wide"
                priority
              />
            </div>
          </ScrollFade>
        )}

        {/* ── Metadata Bar ── */}
        <ScrollFade delay={120}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Role', value: project.role },
              { label: 'Duration', value: project.duration },
              { label: 'Year', value: project.year },
              { label: 'Status', value: project.status },
            ].map(({ label, value }) => (
              <div key={label} className="space-y-1">
                <p className="font-mono text-xs tracking-widest text-muted-foreground/60 uppercase">
                  {label}
                </p>
                <p className="text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>
        </ScrollFade>

        {/* ── Metrics ── */}
        {project.metrics.length > 0 &&
          project.metrics.some((m) => m.value !== '—') && (
            <ScrollFade delay={150}>
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {project.metrics.map(({ value, label }) => (
                  <Card key={label} className="h-full">
                    <CardContent className="flex h-full flex-col items-center justify-center p-5 text-center">
                      <p className="text-2xl font-bold tracking-tight">
                        {value}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollFade>
          )}

        {/* ── Overview ── */}
        <ScrollFade delay={180}>
          <Separator className="my-14" />
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
        </ScrollFade>

        {/* ── Highlights ── */}
        {project.highlights.length > 0 && (
          <ScrollFade delay={210}>
            <Separator className="my-14" />
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                What I Delivered
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-border p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border font-mono text-xs text-muted-foreground">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFade>
        )}

        {/* ── Screenshots / Gallery ── */}
        {project.images && project.images.length > 0 && (
          <ScrollFade delay={240}>
            <Separator className="my-14" />
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Screenshots
              </h2>
              <div className="mt-6">
                <ImageGallery images={project.images} />
              </div>
            </div>
          </ScrollFade>
        )}

        {/* ── Tech Stack ── */}
        <ScrollFade delay={270}>
          <Separator className="my-14" />
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Built With</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </div>
        </ScrollFade>

        {/* ── Links ── */}
        {(project.liveUrl || project.githubUrl) && (
          <ScrollFade delay={300}>
            <Separator className="my-14" />
            <div className="flex flex-wrap gap-3">
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

        {/* ── Navigation ── */}
        <ScrollFade delay={330}>
          <ProjectNavigation currentSlug={project.slug} />
        </ScrollFade>
      </Container>
    </Section>
  );
}

// import { Container, Section, ScrollFade, TechTag, BackLink } from '@/components/common';
// import { ExternalLink } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import type { Project } from '@/types';

// interface ProjectLayoutProps {
//   project: Project;
// }

// export function ProjectLayout({ project }: ProjectLayoutProps) {
//   return (
//     <Section>
//       <Container>
//         <ScrollFade>
//           <BackLink href="/projects" label="Back to projects" />

//           <div className="mt-8">
//             <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
//               {project.category}
//             </p>
//             <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
//               {project.title}
//             </h1>
//             <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
//               {project.subtitle}
//             </p>
//           </div>

//           {/* Metadata */}
//           <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-muted-foreground">
//             <span>Year: {project.year}</span>
//             <span>Role: {project.role}</span>
//             <span>Duration: {project.duration}</span>
//             <span>Status: {project.status}</span>
//           </div>
//         </ScrollFade>

//         {/* Description */}
//         <ScrollFade delay={80}>
//           <div className="mt-12">
//             <p className="leading-relaxed text-muted-foreground">
//               {project.description}
//             </p>
//           </div>
//         </ScrollFade>

//         {/* Highlights */}
//         {project.highlights.length > 0 && (
//           <ScrollFade delay={120}>
//             <div className="mt-10">
//               <h2 className="text-lg font-semibold tracking-tight">
//                 Key Highlights
//               </h2>
//               <ul className="mt-4 space-y-2.5">
//                 {project.highlights.map((highlight, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 leading-relaxed text-muted-foreground"
//                   >
//                     <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
//                     {highlight}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </ScrollFade>
//         )}

//         {/* Tech Stack */}
//         <ScrollFade delay={160}>
//           <div className="mt-10">
//             <h2 className="text-lg font-semibold tracking-tight">Tech Stack</h2>
//             <div className="mt-4 flex flex-wrap gap-2">
//               {project.techStack.map((tech) => (
//                 <TechTag key={tech} name={tech} />
//               ))}
//             </div>
//           </div>
//         </ScrollFade>

//         {/* Links */}
//         {(project.liveUrl || project.githubUrl) && (
//           <ScrollFade delay={200}>
//             <div className="mt-10 flex flex-wrap gap-3">
//               {project.liveUrl && (
//                 <Button asChild>
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View Live
//                     <ExternalLink className="ml-2 h-4 w-4" />
//                   </a>
//                 </Button>
//               )}
//               {project.githubUrl && (
//                 <Button variant="outline" asChild>
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Source Code
//                     <ExternalLink className="ml-2 h-4 w-4" />
//                   </a>
//                 </Button>
//               )}
//             </div>
//           </ScrollFade>
//         )}
//       </Container>
//     </Section>
//   );
// }