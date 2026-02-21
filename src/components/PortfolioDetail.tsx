'use client';

import { Portfolio } from '@/data/portfolios';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiUsers, FiTarget, FiAward, FiZap } from 'react-icons/fi';
import Markdown from 'react-markdown';

interface PortfolioDetailProps {
  portfolio: Portfolio;
}

export default function PortfolioDetail({ portfolio }: PortfolioDetailProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/portfolio" className="text-primary-500 hover:text-primary-600">
              Portfolio
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{portfolio.title}</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              {portfolio.category}
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {portfolio.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {portfolio.description}
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {portfolio.results.map((result, idx) => (
                <div key={idx} className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg">
                  <p className="text-gray-600 text-sm mb-2">{result.metric}</p>
                  <p className="text-3xl font-bold text-primary-600">{result.value}</p>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-gray-200">
              <div>
                <p className="text-gray-500 text-sm mb-2">Client</p>
                <p className="font-semibold text-gray-900">{portfolio.client}</p>
              </div>
              <div className="flex items-start gap-2">
                <FiClock className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-sm mb-2">Timeline</p>
                  <p className="font-semibold text-gray-900">{portfolio.timeline}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FiUsers className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-sm mb-2">Team Size</p>
                  <p className="font-semibold text-gray-900">{portfolio.teamSize} personnes</p>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">ROI</p>
                <p className="font-semibold text-green-600">{portfolio.roi}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Challenge Section */}
              <div className="bg-white p-8 rounded-lg mb-8">
                <div className="flex items-start gap-3 mb-6">
                  <FiTarget className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">Défis</h2>
                </div>
                <div className="text-gray-700 whitespace-pre-wrap">{portfolio.challenge}</div>
              </div>

              {/* Solution Section */}
              <div className="bg-white p-8 rounded-lg mb-8">
                <div className="flex items-start gap-3 mb-6">
                  <FiZap className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-900">Solution</h2>
                </div>
                <div className="text-gray-700 whitespace-pre-wrap">{portfolio.solution}</div>
              </div>

              {/* Content (Detailed case study) */}
              <div className="bg-white p-8 rounded-lg mb-8">
                <Markdown
                  components={{
                    h1: ({ ...props }: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
                    h2: ({ ...props }: any) => <h2 className="text-2xl font-bold mt-6 mb-4 text-primary-600" {...props} />,
                    h3: ({ ...props }: any) => <h3 className="text-xl font-bold mt-5 mb-3 text-gray-800" {...props} />,
                    h4: ({ ...props }: any) => <h4 className="text-lg font-bold mt-4 mb-2 text-gray-800" {...props} />,
                    p: ({ ...props }: any) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
                    ul: ({ ...props }: any) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                    ol: ({ ...props }: any) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                    li: ({ ...props }: any) => <li className="ml-2" {...props} />,
                    code: ({ inline, ...props }: any) => 
                      inline ? (
                        <code className="bg-gray-100 px-2 py-1 rounded text-primary-700 font-mono text-sm" {...props} />
                      ) : (
                        <code className="block bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props} />
                      ),
                    pre: ({ ...props }: any) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
                    blockquote: ({ ...props }: any) => <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-700 mb-4" {...props} />,
                    a: ({ ...props }: any) => <a className="text-primary-600 hover:text-primary-700 underline" {...props} />,
                    table: ({ ...props }: any) => <table className="w-full border-collapse border border-gray-300 mb-4" {...props} />,
                    tr: ({ ...props }: any) => <tr className="border-b border-gray-300" {...props} />,
                    th: ({ ...props }: any) => <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold text-left" {...props} />,
                    td: ({ ...props }: any) => <td className="border border-gray-300 px-4 py-2" {...props} />,
                  }}
                >
                  {portfolio.content}
                </Markdown>
              </div>

              {/* Testimonial */}
              {portfolio.testimonial && (
                <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-lg">
                  <div className="flex items-start gap-4">
                    <FiAward className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-lg italic text-gray-800 mb-4">
                        "{portfolio.testimonial.text}"
                      </p>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {portfolio.testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600">
                          {portfolio.testimonial.position} at {portfolio.testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Goals */}
              <div className="bg-white p-6 rounded-lg mb-8 sticky top-20">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Objectifs</h3>
                <ul className="space-y-3">
                  {portfolio.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="bg-white p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Résultats Atteints</h3>
                <ul className="space-y-3">
                  {portfolio.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-primary-500 font-bold flex-shrink-0">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolio.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Portfolios / CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intéressé?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Parlons de votre projet et comment nous pouvons vous aider à atteindre vos objectifs
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold"
            >
              Commencez votre projet
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
