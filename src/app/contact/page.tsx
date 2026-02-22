import type { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/content/site';
import {
  Container,
  Section,
  ScrollFade,
  SocialLinks,
  HireLinks,
  WhatsAppIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/common';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description:
    'Get in touch for freelance projects, contract engagements, or collaboration. Available for remote, async work.',
  path: '/contact',
});

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: 'Best for project inquiries',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`,
    description: 'Quick conversations',
    external: true,
  },
];

const socialProfiles = [
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: siteConfig.social.github,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
  },
  {
    icon: TwitterIcon,
    label: 'X (Twitter)',
    href: siteConfig.social.twitter,
  },
];

export default function ContactPage() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Let&rsquo;s work together
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you need a complete product built from scratch, an experienced
            developer for your team, or a technical partner for your next idea —
            I&rsquo;m ready to talk.
          </p>
        </ScrollFade>

        {/* Availability */}
        {siteConfig.status.available && (
          <ScrollFade delay={60}>
            <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.status.message}
            </div>
          </ScrollFade>
        )}

        {/* Direct Contact */}
        <ScrollFade delay={100}>
          <div className="mt-14">
            <h2 className="text-lg font-semibold tracking-tight">
              Direct Contact
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className="group block"
                >
                  <Card className="h-full transition-colors hover:border-foreground/20">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border">
                        <method.icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold">{method.label}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {method.description}
                        </p>
                        <p className="mt-1 font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                          {method.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </ScrollFade>

        {/* Hire Platforms */}
        <ScrollFade delay={140}>
          <Separator className="my-14" />
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Freelance Platforms
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Hire me through a trusted platform with built-in contracts and payment protection.
            </p>
            <div className="mt-6">
              <HireLinks />
            </div>
          </div>
        </ScrollFade>

        {/* Social */}
        <ScrollFade delay={180}>
          <Separator className="my-14" />
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Find Me Online
            </h2>
            <div className="mt-6 flex flex-wrap gap-4">
              {socialProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border px-5 py-3 transition-colors hover:border-foreground/20"
                >
                  <profile.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                  <span className="text-sm font-medium">{profile.label}</span>
                </a>
              ))}
            </div>
          </div>
        </ScrollFade>

        {/* Location */}
        <ScrollFade delay={220}>
          <Separator className="my-14" />
          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <div>
              <p>Based in {siteConfig.contact.location}</p>
              <p className="mt-1">
                Working remotely with clients worldwide. All timezones welcome.
              </p>
            </div>
          </div>
        </ScrollFade>
      </Container>
    </Section>
  );
}