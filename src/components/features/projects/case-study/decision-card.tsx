import { Card, CardContent } from '@/components/ui/card';
import type { ArchitecturalDecision } from '@/types';

interface DecisionCardProps {
  decision: ArchitecturalDecision;
}

export function DecisionCard({ decision }: DecisionCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold tracking-tight">{decision.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {decision.description}
        </p>
        <ul className="mt-4 space-y-2">
          {decision.details.map((detail, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
              {detail}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}