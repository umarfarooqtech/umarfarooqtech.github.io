import { Card, CardContent } from '@/components/ui/card';
import type { ArchitecturalDecision } from '@/types';

interface DecisionCardProps {
  decision: ArchitecturalDecision;
  index: number;
}

export function DecisionCard({ decision, index }: DecisionCardProps) {
  return (
    <Card className="transition-colors hover:border-foreground/10">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-border font-mono text-sm text-muted-foreground">
            {index + 1}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold tracking-tight">
              {decision.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {decision.description}
            </p>
            <ul className="mt-4 space-y-2 border-t border-border pt-4">
              {decision.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// import { Card, CardContent } from '@/components/ui/card';
// import type { ArchitecturalDecision } from '@/types';

// interface DecisionCardProps {
//   decision: ArchitecturalDecision;
// }

// export function DecisionCard({ decision }: DecisionCardProps) {
//   return (
//     <Card>
//       <CardContent className="p-6">
//         <h3 className="text-lg font-semibold tracking-tight">{decision.title}</h3>
//         <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//           {decision.description}
//         </p>
//         <ul className="mt-4 space-y-2">
//           {decision.details.map((detail, i) => (
//             <li
//               key={i}
//               className="flex items-start gap-2 text-sm text-muted-foreground"
//             >
//               <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
//               {detail}
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// }