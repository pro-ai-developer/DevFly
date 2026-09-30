import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Practical notes on software delivery, freelance partnerships, and building client relationships.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const [featured, ...articles] = posts
  return <>
    <section className="bg-white section-pad-sm border-b border-slate-200">
      <div className="container-wide">
        <span className="section-tag">The Codvoro Journal</span>
        <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-8 lg:gap-20 items-end">
          <h1 className="text-[2.8rem] sm:text-6xl font-extrabold text-slate-950 leading-[1.03] tracking-[-0.04em] max-w-4xl">Ideas for building better work—and <span className="text-brand-600">better partnerships.</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed">Field notes on software delivery, freelance revenue, client relationships, and the practical details that keep business clear.</p>
        </div>
      </div>
    </section>
    <section className="section-pad-sm bg-slate-50 border-b border-slate-200">
      <div className="container-wide">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-brand-600 mb-7">Featured story</p>
        <article className="grid lg:grid-cols-2 bg-slate-950 text-white overflow-hidden rounded-[var(--radius-lg)]">
          <Link href={'/blog/' + featured.slug} aria-label={'Read: ' + featured.title} className="group relative block aspect-[3/2] lg:aspect-auto lg:min-h-[31rem] overflow-hidden bg-stone-200 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-brand-400">
            <Image src={featured.image.src} alt={featured.image.alt} fill priority sizes="(min-width: 1024px) 47vw, 93vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none" />
            <span className="absolute top-5 left-5 bg-white/95 text-slate-900 px-3 py-2 text-xs font-bold uppercase tracking-[.12em]">{featured.category}</span>
          </Link>
          <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400"><span>{featured.date}</span><span className="h-1 w-1 rounded-full bg-slate-600" /><span className="inline-flex items-center gap-1.5"><Clock aria-hidden="true" className="h-3.5 w-3.5" />{featured.readTime}</span></div>
            <h2 className="mt-6 text-3xl lg:text-4xl font-extrabold leading-tight"><Link href={'/blog/' + featured.slug} className="hover:text-brand-200">{featured.title}</Link></h2>
            <p className="mt-5 text-slate-300 leading-relaxed">{featured.excerpt}</p>
            <Link href={'/blog/' + featured.slug} className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-300 hover:text-white">Read the full story <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </article>
      </div>
    </section>
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_18rem] gap-12 lg:gap-20">
          <div>
            <div className="flex items-end justify-between gap-4 border-b border-slate-900 pb-5 mb-2"><h2 className="text-3xl font-extrabold">Latest articles</h2><span className="text-sm text-slate-500 shrink-0">{articles.length} stories</span></div>
            {articles.map(post => <article key={post.slug} className="grid sm:grid-cols-[12rem_1fr] xl:grid-cols-[16rem_1fr] gap-6 py-8 border-b border-slate-200 group items-start">
              <Link href={'/blog/' + post.slug} aria-label={'Read: ' + post.title} className="block relative aspect-[3/2] overflow-hidden rounded-[var(--radius)] bg-stone-100">
                <Image src={post.image.src} alt={post.image.alt} fill sizes="(min-width: 1280px) 256px, (min-width: 640px) 192px, 93vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transform-none" />
              </Link>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.12em] text-brand-600">{post.category}</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight group-hover:text-brand-700 transition-colors"><Link href={'/blog/' + post.slug}>{post.title}</Link></h3>
                <p className="mt-3 text-[.9375rem] text-slate-600 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-3 items-center text-xs text-slate-500 mt-4"><span>{post.date}</span><span>·</span><span>{post.readTime}</span></div>
                <Link href={'/blog/' + post.slug} className="link-arrow mt-5 text-sm">Continue reading <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>)}
          </div>
          <aside><div className="sticky top-36 border-t-2 border-slate-900 pt-5"><p className="text-xs font-bold uppercase tracking-[.16em] text-slate-500">Explore topics</p><div className="mt-5 flex flex-wrap gap-2">{['Partnership', 'Growth', 'Finance', 'Operations', 'Client Success'].map(topic => <span key={topic} className="px-3 py-2 bg-slate-100 text-sm font-semibold text-slate-700">{topic}</span>)}</div><div className="mt-10 border-l-2 border-brand-500 pl-5"><p className="font-extrabold text-slate-900">A note from our team</p><p className="mt-2 text-sm leading-relaxed text-slate-600">We write from real delivery experience and favor useful detail over generic advice.</p></div></div></aside>
        </div>
      </div>
    </section>
    <section className="section-pad-sm bg-slate-100"><div className="container-wide flex flex-col lg:flex-row lg:items-center justify-between gap-8"><div><span className="section-tag">Work Together</span><h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Interested in becoming a partner?</h2><p className="mt-3 text-slate-600 max-w-2xl">Read the role, responsibilities, and revenue model, then tell us about yourself.</p></div><Link href="/partner/apply" className="btn-primary shrink-0">Explore the role & apply <ArrowRight className="h-4 w-4" /></Link></div></section>
  </>
}
