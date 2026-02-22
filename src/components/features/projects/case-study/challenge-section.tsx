import type { Challenge } from '@/types';

interface ChallengeSectionProps {
  challenge: Challenge;
  index: number;
}

export function ChallengeSection({ challenge, index }: ChallengeSectionProps) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Index */}
      <div className="flex-shrink-0 pt-1">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border font-mono text-sm text-muted-foreground">
          {index + 1}
        </span>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 space-y-5 pb-2">
        <h3 className="text-xl font-semibold tracking-tight">
          {challenge.title}
        </h3>

        {challenge.quote && (
          <blockquote className="highlight-line text-base italic leading-relaxed text-muted-foreground">
            &ldquo;{challenge.quote}&rdquo;
            {challenge.quoteAttribution && (
              <footer className="mt-1.5 text-sm not-italic text-muted-foreground/60">
                — {challenge.quoteAttribution}
              </footer>
            )}
          </blockquote>
        )}

        <div className="space-y-4">
          {challenge.narrative.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// import type { Challenge } from '@/types';

// interface ChallengeSectionProps {
//   challenge: Challenge;
// }

// export function ChallengeSection({ challenge }: ChallengeSectionProps) {
//   return (
//     <div className="space-y-4">
//       <h3 className="text-xl font-semibold tracking-tight">{challenge.title}</h3>

//       {challenge.quote && (
//         <blockquote className="border-l-2 border-foreground/20 pl-5 text-base italic text-muted-foreground">
//           &ldquo;{challenge.quote}&rdquo;
//           {challenge.quoteAttribution && (
//             <footer className="mt-1 text-sm not-italic text-muted-foreground/70">
//               — {challenge.quoteAttribution}
//             </footer>
//           )}
//         </blockquote>
//       )}

//       <div className="space-y-3">
//         {challenge.narrative.map((paragraph, i) => (
//           <p key={i} className="leading-relaxed text-muted-foreground">
//             {paragraph}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }