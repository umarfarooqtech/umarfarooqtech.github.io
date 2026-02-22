interface HumanSideProps {
  quote: string;
  quoteAttribution: string;
  points: string[];
}

export function HumanSide({ quote, quoteAttribution, points }: HumanSideProps) {
  return (
    <div className="space-y-10">
      {/* Quote — the centerpiece */}
      <div className="text-center">
        <p className="text-3xl font-bold leading-snug tracking-tight md:text-4xl">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          — {quoteAttribution}
        </p>
      </div>

      {/* Points */}
      <div className="mx-auto max-w-2xl space-y-4">
        {points.map((point, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-lg border border-border p-4"
          >
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border font-mono text-xs text-muted-foreground">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// interface HumanSideProps {
//   quote: string;
//   quoteAttribution: string;
//   points: string[];
// }

// export function HumanSide({ quote, quoteAttribution, points }: HumanSideProps) {
//   return (
//     <div className="space-y-8">
//       <blockquote className="border-l-2 border-foreground/20 pl-6">
//         <p className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
//           &ldquo;{quote}&rdquo;
//         </p>
//         <footer className="mt-3 text-sm text-muted-foreground">
//           — {quoteAttribution}
//         </footer>
//       </blockquote>

//       <ul className="space-y-3">
//         {points.map((point, i) => (
//           <li
//             key={i}
//             className="flex items-start gap-3 leading-relaxed text-muted-foreground"
//           >
//             <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/40" />
//             {point}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }