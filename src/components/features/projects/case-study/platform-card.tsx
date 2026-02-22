import { Card, CardContent } from '@/components/ui/card';
import { TechTag } from '@/components/common';
import type { Platform } from '@/types';

interface PlatformCardProps {
  platform: Platform;
  index: number;
}

export function PlatformCard({ platform, index }: PlatformCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <span className="flex-shrink-0 font-mono text-2xl font-bold text-muted-foreground/20">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold tracking-tight">{platform.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {platform.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {platform.techStack.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>

            <ul className="mt-4 space-y-1.5">
              {platform.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}