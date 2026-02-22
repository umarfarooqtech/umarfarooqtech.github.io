import { Card, CardContent } from '@/components/ui/card';

function ArchNode({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col items-center justify-center p-4 text-center">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="h-px flex-1 border-t border-dashed border-border" />
      <span className="flex-shrink-0 font-mono text-xs text-muted-foreground">
        {label}
      </span>
      <div className="h-px flex-1 border-t border-dashed border-border" />
    </div>
  );
}

export function SystemArchitecture() {
  return (
    <div className="space-y-6">
      {/* Client Applications */}
      <div className="space-y-3">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Client Applications
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <ArchNode title="Public PWA" subtitle="Next.js · TypeScript" />
          <ArchNode title="Admin Dashboard" subtitle="Next.js · TypeScript" />
          <ArchNode title="Receptionist Panel" subtitle="Next.js · TypeScript" />
          <ArchNode title="Mobile App" subtitle="React Native" />
        </div>
      </div>

      <Connector label="REST · WebSocket · FCM" />

      {/* Server */}
      <div className="space-y-3">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Core Server
        </p>
        <Card>
          <CardContent className="p-5">
            <p className="font-semibold">Node.js · Express</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Dual WebSocket transport (Socket.IO + native ws) · JWT authentication ·
              Redis session caching · Zod validation + auto-generated Swagger docs ·
              Firebase Cloud Messaging
            </p>
          </CardContent>
        </Card>
      </div>

      <Connector label="Data · Cache · Print · CDN" />

      {/* Infrastructure */}
      <div className="space-y-3">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Infrastructure & Services
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <ArchNode title="MongoDB" subtitle="Germany (co-located)" />
          <ArchNode title="Redis" subtitle="Session cache" />
          <ArchNode title="Electron App" subtitle="Thermal printer" />
          <ArchNode title="Cloudinary" subtitle="Image CDN" />
        </div>
      </div>
    </div>
  );
}