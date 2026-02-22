import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProjectNavigation } from '@/content/projects';
import { Separator } from '@/components/ui/separator';

interface ProjectNavigationProps {
  currentSlug: string;
}

export function ProjectNavigation({ currentSlug }: ProjectNavigationProps) {
  const { prev, next } = getProjectNavigation(currentSlug);

  if (!prev && !next) return null;

  return (
    <div className="mt-20">
      <Separator className="mb-10" />
      <div className="flex items-stretch gap-4">
        {/* Previous */}
        <div className="flex-1">
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex h-full flex-col rounded-lg border border-border p-5 transition-colors hover:border-foreground/20"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Previous
              </div>
              <p className="mt-2 font-semibold tracking-tight transition-colors group-hover:text-foreground">
                {prev.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                {prev.category}
              </p>
            </Link>
          )}
        </div>

        {/* Next */}
        <div className="flex-1">
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex h-full flex-col items-end rounded-lg border border-border p-5 text-right transition-colors hover:border-foreground/20"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Next
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-2 font-semibold tracking-tight transition-colors group-hover:text-foreground">
                {next.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                {next.category}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}