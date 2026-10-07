import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { developmentPosts, getPost, posts } from '@/lib/posts'
import { siteUrl } from '@/lib/site'

export function generateStaticParams() { return posts.map(({ slug }) => ({ slug })) }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  return post ? {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: '/blog/' + post.slug },
    openGraph: {
      title: post.title, description: post.excerpt, type: 'article', url: '/blog/' + post.slug,
      publishedTime: new Date(post.date).toISOString(), authors: ['Codvoro'],
      images: [{ url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt }],
    },
    twitter: {
      card: 'summary_large_image', title: post.title, description: post.excerpt,
      images: [{ url: post.image.src, alt: post.image.alt }],
    },
  } : {}
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()
  const isPartnerArticle = !developmentPosts.some(item => item.slug === post.slug)

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Article', headline: post.title,
      description: post.excerpt, datePublished: new Date(post.date).toISOString(),
      dateModified: new Date(post.date).toISOString(), mainEntityOfPage: siteUrl + '/blog/' + post.slug,
      image: { '@type': 'ImageObject', url: siteUrl + post.image.src, width: post.image.width, height: post.image.height },
      author: { '@type': 'Organization', name: 'Codvoro', url: siteUrl },
      publisher: { '@type': 'Organization', name: 'Codvoro', logo: { '@type': 'ImageObject', url: siteUrl + '/codvoro-logo.svg' } },
    }) }} />
    <article>
      <header className="section-pad-sm bg-slate-950 text-white">
        <div className="container-mid text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white mb-10"><ArrowLeft className="h-4 w-4" />Back to insights</Link>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">{post.category} · {post.readTime}</p>
          <h1 className="mt-5 text-[2.25rem] sm:text-5xl font-semibold leading-[1.16] tracking-[-0.035em] text-balance">{post.title}</h1>
          <p className="mt-7 text-slate-400 text-sm">Published {post.date}</p>
        </div>
      </header>
      <div className="section-pad-sm bg-white">
        <div className="container-mid">
          <figure className="mb-10 sm:mb-14">
            <div className="relative aspect-[3/2] sm:aspect-[16/9] overflow-hidden rounded-[var(--radius-lg)] bg-stone-100">
              <Image src={post.image.src} alt={post.image.alt} fill priority sizes="(min-width: 1248px) 1150px, 93vw" className="object-cover" />
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-slate-500 max-w-3xl">{post.image.caption}</figcaption>
          </figure>
          <p className="lede max-w-3xl border-l-2 border-brand-500 pl-6">{post.intro}</p>
          <div className="mt-14 max-w-3xl space-y-14">
            {post.sections.map(section => <section key={section.heading}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">{section.heading}</h2>
              <div className="space-y-5 text-slate-600 leading-[1.8]">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
              {section.bullets && <ul className="mt-6 border-t border-slate-200">{section.bullets.map(bullet => <li key={bullet} className="flex gap-3 py-3 border-b border-slate-200 text-slate-700"><Check aria-hidden="true" className="h-5 w-5 text-accent-600 shrink-0 mt-0.5" />{bullet}</li>)}</ul>}
            </section>)}
            {post.sources && <aside className="border-t border-slate-300 pt-8">
              <h2 className="text-xs font-bold uppercase tracking-[.14em] text-slate-500 mb-4">Official resources</h2>
              <div className="flex flex-col gap-3">{post.sources.map(source => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="link-arrow w-fit">{source.label}<ExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /></a>)}</div>
            </aside>}
          </div>
        </div>
      </div>
    </article>
    {isPartnerArticle && <section className="section-pad-sm bg-slate-100"><div className="container-wide centered-stack"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">Next step</p><h2 className="mt-2 text-3xl font-extrabold">See whether the partnership fits.</h2><p className="mt-3 text-slate-600">Read the responsibilities and practical details before you apply.</p></div><Link href="/partner/apply" className="btn-primary shrink-0">Explore the role & apply <ArrowRight className="h-4 w-4" /></Link></div></section>}
  </>
}
