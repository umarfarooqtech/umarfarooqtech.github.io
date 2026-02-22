import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { getBlogPosts } from '@/lib/blog';
import { Container, Section, ScrollFade } from '@/components/common';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = createMetadata({
  title: 'Blog',
  description:
    'Writing about software architecture, full-stack development, problem-solving, and lessons from building production systems.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Section>
      <Container>
        <ScrollFade>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Writing
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Thinking out loud about software, architecture, and the craft of building products.
          </p>
        </ScrollFade>

        <div className="mt-14 space-y-0 divide-y divide-border">
          {posts.map((post, i) => (
            <ScrollFade key={post.slug} delay={i * 60}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block py-8 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-mono text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                    <span className="font-mono text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  Read article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </ScrollFade>
          ))}
        </div>

        {posts.length === 0 && (
          <ScrollFade>
            <div className="mt-14 py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No posts yet. Check back soon.
              </p>
            </div>
          </ScrollFade>
        )}
      </Container>
    </Section>
  );
}