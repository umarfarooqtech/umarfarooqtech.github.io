import { Card, CardContent } from '@/components/ui/card';
import {
  Globe,
  LayoutDashboard,
  Users,
  Smartphone,
  Printer,
  Server,
  Database,
  Zap,
} from 'lucide-react';
import type { ReactNode } from 'react';

function ArchNode({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full items-start gap-3.5 p-4">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-tight">{title}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function ConnectionLine({ labels }: { labels: string[] }) {
  return (
    <div className="flex items-center gap-3 py-4">
      <div className="h-px flex-1 border-t border-dashed border-border" />
      <div className="flex flex-shrink-0 items-center gap-2">
        {labels.map((label) => (
          <span
            key={label}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {label}
          </span>
        ))}
      </div>
      <div className="h-px flex-1 border-t border-dashed border-border" />
    </div>
  );
}

export function SystemArchitecture() {
  return (
    <div className="space-y-2">
      {/* Layer Label */}
      <p className="font-mono text-xs tracking-widest text-muted-foreground/60 uppercase">
        Client Layer
      </p>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <ArchNode
          icon={<Globe className="h-4 w-4" />}
          title="Public PWA"
          subtitle="Next.js · TypeScript"
        />
        <ArchNode
          icon={<LayoutDashboard className="h-4 w-4" />}
          title="Admin Dashboard"
          subtitle="Next.js · TypeScript"
        />
        <ArchNode
          icon={<Users className="h-4 w-4" />}
          title="Receptionist Panel"
          subtitle="Next.js · TypeScript"
        />
        <ArchNode
          icon={<Smartphone className="h-4 w-4" />}
          title="Mobile App"
          subtitle="React Native"
        />
      </div>

      <ConnectionLine labels={['REST', 'WebSocket', 'FCM']} />

      {/* Server */}
      <p className="font-mono text-xs tracking-widest text-muted-foreground/60 uppercase">
        Server Layer
      </p>

      <Card>
        <CardContent className="flex items-start gap-4 p-5">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground">
            <Server className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold">Node.js · Express</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Modular architecture with dual WebSocket transport — Socket.IO for
              web clients, native ws for the Electron printer. JWT auth with
              Redis session caching. Auto-generated API docs via Zod + Swagger.
            </p>
          </div>
        </CardContent>
      </Card>

      <ConnectionLine labels={['Query', 'Cache', 'Print', 'CDN']} />

      {/* Infrastructure */}
      <p className="font-mono text-xs tracking-widest text-muted-foreground/60 uppercase">
        Data & Infrastructure
      </p>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <ArchNode
          icon={<Database className="h-4 w-4" />}
          title="MongoDB"
          subtitle="Germany (co-located)"
        />
        <ArchNode
          icon={<Zap className="h-4 w-4" />}
          title="Redis"
          subtitle="Session cache"
        />
        <ArchNode
          icon={<Printer className="h-4 w-4" />}
          title="Electron App"
          subtitle="Thermal printer"
        />
        <ArchNode
          icon={<Globe className="h-4 w-4" />}
          title="Cloudinary"
          subtitle="Image CDN"
        />
      </div>
    </div>
  );
}


// import { Card, CardContent } from '@/components/ui/card';

// function ArchNode({ title, subtitle }: { title: string; subtitle: string }) {
//   return (
//     <Card className="h-full">
//       <CardContent className="flex h-full flex-col items-center justify-center p-4 text-center">
//         <p className="text-sm font-semibold">{title}</p>
//         <p className="mt-1 font-mono text-xs text-muted-foreground">{subtitle}</p>
//       </CardContent>
//     </Card>
//   );
// }

// function Connector({ label }: { label: string }) {
//   return (
//     <div className="flex items-center gap-4 py-2">
//       <div className="h-px flex-1 border-t border-dashed border-border" />
//       <span className="flex-shrink-0 font-mono text-xs text-muted-foreground">
//         {label}
//       </span>
//       <div className="h-px flex-1 border-t border-dashed border-border" />
//     </div>
//   );
// }

// export function SystemArchitecture() {
//   return (
//     <div className="space-y-6">
//       {/* Client Applications */}
//       <div className="space-y-3">
//         <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
//           Client Applications
//         </p>
//         <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
//           <ArchNode title="Public PWA" subtitle="Next.js · TypeScript" />
//           <ArchNode title="Admin Dashboard" subtitle="Next.js · TypeScript" />
//           <ArchNode title="Receptionist Panel" subtitle="Next.js · TypeScript" />
//           <ArchNode title="Mobile App" subtitle="React Native" />
//         </div>
//       </div>

//       <Connector label="REST · WebSocket · FCM" />

//       {/* Server */}
//       <div className="space-y-3">
//         <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
//           Core Server
//         </p>
//         <Card>
//           <CardContent className="p-5">
//             <p className="font-semibold">Node.js · Express</p>
//             <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
//               Dual WebSocket transport (Socket.IO + native ws) · JWT authentication ·
//               Redis session caching · Zod validation + auto-generated Swagger docs ·
//               Firebase Cloud Messaging
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       <Connector label="Data · Cache · Print · CDN" />

//       {/* Infrastructure */}
//       <div className="space-y-3">
//         <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
//           Infrastructure & Services
//         </p>
//         <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
//           <ArchNode title="MongoDB" subtitle="Germany (co-located)" />
//           <ArchNode title="Redis" subtitle="Session cache" />
//           <ArchNode title="Electron App" subtitle="Thermal printer" />
//           <ArchNode title="Cloudinary" subtitle="Image CDN" />
//         </div>
//       </div>
//     </div>
//   );
// }