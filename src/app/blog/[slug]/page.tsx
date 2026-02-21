import BlogPostDetail from '@/components/BlogPostDetail';
import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post: any) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const post = blogPosts.find((p: any) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title} | Pegg Site Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://pegg-site.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  };
}

export default function Page({ params }: PageProps) {
  const post = blogPosts.find((p: any) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p: any) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return <BlogPostDetail post={post} relatedPosts={relatedPosts} />;
}
