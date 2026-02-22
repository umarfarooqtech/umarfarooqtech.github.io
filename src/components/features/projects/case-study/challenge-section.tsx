import type { Challenge } from '@/types';

interface ChallengeSectionProps {
  challenge: Challenge;
}

export function ChallengeSection({ challenge }: ChallengeSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold tracking-tight">{challenge.title}</h3>

      {challenge.quote && (
        <blockquote className="border-l-2 border-foreground/20 pl-5 text-base italic text-muted-foreground">
          &ldquo;{challenge.quote}&rdquo;
          {challenge.quoteAttribution && (
            <footer className="mt-1 text-sm not-italic text-muted-foreground/70">
              — {challenge.quoteAttribution}
            </footer>
          )}
        </blockquote>
      )}

      <div className="space-y-3">
        {challenge.narrative.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}