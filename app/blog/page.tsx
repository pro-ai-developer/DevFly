import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { developmentPosts, posts } from '@/lib/posts'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Insights on Design & Development',
  description: 'Practical perspectives from Codvoro on planning websites, building products, software delivery, and working together.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const [featured, ...articles] = developmentPosts
  const partnerArticles = posts.filter(post => !developmentPosts.some(item => item.slug === post.slug))
  return <>
    <section className="section-pad bg-slate-950">
      <div className="container-wide hero-content max-w-4xl">
        <span className="hero-eyebrow">Codvoro insights</span>
        <h1 className="hero-title">A considered perspective<br /><span className="text-brand-200">on digital work.</span></h1>
        <p className="hero-description">Practical thinking on planning a website, developing a product, and building a productive working relationship.</p>
      </div>
    </section>
    <section className="section-pad bg-white">
      <div className="container-wide">
        <article className="grid lg:grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Link href={'/blog/' + featured.slug} aria-label={'Read: ' + featured.title} className="relative block aspect-[3/2] lg:aspect-auto lg:min-h-[25rem] overflow-hidden bg-stone-100">
            <Image src={featured.image.src} alt={featured.image.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Link>
          <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Featured · {featured.category}</p>
            <h2 className="mt-5 text-3xl lg:text-4xl font-semibold leading-tight"><Link href={'/blog/' + featured.slug} className="hover:text-brand-600">{featured.title}</Link></h2>
            <p className="mt-5 text-slate-600 leading-relaxed">{featured.excerpt}</p>
            <p className="mt-5 text-xs text-slate-500">{featured.readTime}</p>
            <Link href={'/blog/' + featured.slug} className="link-arrow mt-7 w-fit text-sm">Read the article <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </article>
        <div className="grid md:grid-cols-2 gap-8 mt-8">{articles.map(post => <article key={post.slug} className="project-card">
          <Link href={'/blog/' + post.slug} aria-label={'Read: ' + post.title} className="relative block aspect-[16/9] bg-slate-100"><Image src={post.image.src} alt={post.image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></Link>
          <div className="p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{post.category} · {post.readTime}</p><h2 className="mt-4 text-2xl font-semibold leading-snug"><Link href={'/blog/' + post.slug} className="hover:text-brand-600">{post.title}</Link></h2><p className="mt-4 text-slate-600">{post.excerpt}</p><Link href={'/blog/' + post.slug} className="link-arrow mt-6 text-sm">Read the article <ArrowRight className="h-4 w-4" /></Link></div>
        </article>)}</div>
      </div>
    </section>
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <SectionHeading eyebrow="Partnership resources" title="A better understanding of working together.">Guides for people exploring the Codvoro partner program.</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{partnerArticles.map(post => <Link key={post.slug} href={'/blog/' + post.slug} className="service-card group"><p className="text-xs font-medium text-brand-600 mb-4">{post.category}</p><h3 className="text-lg font-semibold leading-snug group-hover:text-brand-600">{post.title}</h3><p className="text-sm text-slate-600 mt-3 leading-relaxed">{post.excerpt}</p><span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 mt-6">Read the guide <ArrowUpRight className="h-4 w-4" /></span></Link>)}</div>
        <div className="text-center mt-10"><Link href="/partner" className="link-arrow">Explore the partner program <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  </>
}
