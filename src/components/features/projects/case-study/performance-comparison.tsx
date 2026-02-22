import { Card, CardContent } from '@/components/ui/card';
import type { PerformanceComparison as PerformanceComparisonType } from '@/types';

interface PerformanceComparisonProps {
  data: PerformanceComparisonType;
}

export function PerformanceComparison({ data }: PerformanceComparisonProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Before */}
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Before
          </p>
          <p className="mt-4 text-6xl font-bold tracking-tight text-muted-foreground/50">
            {data.before.score}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{data.before.label}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground/60">
            {data.before.platform}
          </p>
        </CardContent>
      </Card>

      {/* After */}
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            After
          </p>
          <p className="mt-4 text-6xl font-bold tracking-tight">
            {data.after.score}+
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{data.after.label}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground/60">
            {data.after.platform}
          </p>
          {data.after.note && (
            <p className="mt-3 text-xs text-muted-foreground">{data.after.note}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}