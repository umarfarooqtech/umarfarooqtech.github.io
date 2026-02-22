import { Card, CardContent } from '@/components/ui/card';
import { TechTag } from '@/components/common';
import type { Platform } from '@/types';

interface PlatformCardProps {
  platform: Platform;
  index: number;
}

export function PlatformCard({ platform, index }: PlatformCardProps) {
  return (
    <Card className="h-full transition-colors hover:border-foreground/10">
      <CardContent className="p-6">
        {/* Number + Title */}
        <div className="flex items-start gap-4">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-border font-mono text-sm font-medium text-muted-foreground">
            {index + 1}
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold tracking-tight">
              {platform.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {platform.description}
            </p>
          </div>
        </div>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {platform.techStack.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>

        {/* Features */}
        <ul className="mt-5 space-y-2 border-t border-border pt-5">
          {platform.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}



// import { Card, CardContent } from '@/components/ui/card';
// import { TechTag } from '@/components/common';
// import type { Platform } from '@/types';

// interface PlatformCardProps {
//   platform: Platform;
//   index: number;
// }

// export function PlatformCard({ platform, index }: PlatformCardProps) {
//   return (
//     <Card className="h-full">
//       <CardContent className="p-6">
//         <div className="flex items-start gap-4">
//           <span className="flex-shrink-0 font-mono text-2xl font-bold text-muted-foreground/20">
//             {String(index + 1).padStart(2, '0')}
//           </span>
//           <div className="min-w-0 flex-1">
//             <h3 className="text-lg font-semibold tracking-tight">{platform.name}</h3>
//             <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//               {platform.description}
//             </p>

//             <div className="mt-4 flex flex-wrap gap-1.5">
//               {platform.techStack.map((tech) => (
//                 <TechTag key={tech} name={tech} />
//               ))}
//             </div>

//             <ul className="mt-4 space-y-1.5">
//               {platform.features.map((feature, i) => (
//                 <li
//                   key={i}
//                   className="flex items-start gap-2 text-sm text-muted-foreground"
//                 >
//                   <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/40" />
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }