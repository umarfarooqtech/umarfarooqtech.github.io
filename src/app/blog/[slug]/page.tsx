import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/metadata';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import { Container, Section, ScrollFade, BackLink } from '@/components/common';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <Container>
        <ScrollFade>
          <BackLink href="/blog" label="Back to blog" />

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              {post.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {post.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollFade>

        <ScrollFade delay={80}>
          <Separator className="my-10" />
        </ScrollFade>

        {/* Article Content */}
        <ScrollFade delay={120}>
          <article className="space-y-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </article>
        </ScrollFade>
      </Container>
    </Section>
  );
}