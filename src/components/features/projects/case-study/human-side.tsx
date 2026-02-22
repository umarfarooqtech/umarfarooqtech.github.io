interface HumanSideProps {
  quote: string;
  quoteAttribution: string;
  points: string[];
}

export function HumanSide({ quote, quoteAttribution, points }: HumanSideProps) {
  return (
    <div className="space-y-8">
      <blockquote className="border-l-2 border-foreground/20 pl-6">
        <p className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-3 text-sm text-muted-foreground">
          — {quoteAttribution}
        </footer>
      </blockquote>

      <ul className="space-y-3">
        {points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-3 leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}