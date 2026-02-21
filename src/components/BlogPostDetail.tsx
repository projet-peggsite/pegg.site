'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiCalendar, FiUser, FiTag, FiShare2 } from 'react-icons/fi';
import { BlogPost } from '@/data/blogPosts';
import Markdown from 'react-markdown';

interface BlogPostDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostDetail({ post, relatedPosts }: BlogPostDetailProps) {
  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Back Button */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary-500/10">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition">
            <FiArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${post.image} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-500/80 text-white text-sm rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8">{post.excerpt}</p>

            {/* Post Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" /> {post.date}
              </span>
              <span>{post.readTime}</span>
              <span className="flex items-center gap-2">
                <FiUser className="w-4 h-4" /> {post.author}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            <div className="blog-content">
              <Markdown
                components={{
                  h1: ({ ...props }: any) => <h1 className="text-4xl font-bold mt-12 mb-6 text-white" {...props} />,
                  h2: ({ ...props }: any) => <h2 className="text-3xl font-bold mt-10 mb-4 text-primary-400" {...props} />,
                  h3: ({ ...props }: any) => <h3 className="text-2xl font-bold mt-8 mb-3 text-gray-200" {...props} />,
                  p: ({ ...props }: any) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
                  ul: ({ ...props }: any) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300" {...props} />,
                  ol: ({ ...props }: any) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300" {...props} />,
                  li: ({ ...props }: any) => <li className="ml-2" {...props} />,
                  code: ({ inline, ...props }: any) => 
                    inline ? (
                      <code className="bg-dark-800 px-2 py-1 rounded text-primary-400 text-sm" {...props} />
                    ) : (
                      <code className="block bg-dark-800 p-4 rounded-lg overflow-x-auto my-4 text-sm text-gray-300" {...props} />
                    ),
                  pre: ({ ...props }: any) => <pre className="my-4" {...props} />,
                  blockquote: ({ ...props }: any) => <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-400 my-4" {...props} />,
                }}
              >
                {post.content}
              </Markdown>
            </div>
          </motion.article>

          {/* Share & Author */}
          <div className="mt-16 pt-8 border-t border-primary-500/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-tech-purple flex items-center justify-center">
                  <span className="text-white font-bold">{post.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{post.author}</p>
                  <p className="text-gray-400 text-sm">Expert {post.category}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 text-gray-300 rounded-lg transition">
                <FiShare2 className="w-4 h-4" />
                Partager
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary-500/10 bg-dark-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">Articles Connexes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relPost, idx) => (
                <motion.article
                  key={relPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-dark-800/50 border border-primary-500/10 rounded-xl overflow-hidden hover:border-primary-500/30 transition group"
                >
                  <div className={`h-40 ${relPost.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-primary-400 transition">
                      {relPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {relPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relPost.slug}`}
                      className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition font-semibold text-sm"
                    >
                      Lire l'article
                      <FiArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500/10 to-tech-purple/10 border border-primary-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à Transformer Votre Stratégie Digitale?</h2>
          <p className="text-gray-300 mb-8">
            Découvrez comment nos experts peuvent vous aider à implémenter ces stratégies et maximiser votre ROI.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-tech-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition"
          >
            Démarrer un Projet
          </Link>
        </div>
      </section>
    </div>
  );
}
