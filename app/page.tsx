import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Check, Compass, Layers, Code2, Rocket } from 'lucide-react'
import VideoHero from '@/components/VideoHero'
import SectionHeading from '@/components/SectionHeading'
import { techBrands } from '@/components/BrandLogos'
import { services } from '@/lib/services'
import { siteUrl } from '@/lib/site'
import { projects } from './portfolio/projects'

export const metadata: Metadata = {
  title: 'Web Design & Software Development Company',
  description: 'Codvoro designs and develops business websites, web applications, SaaS platforms, and connected digital products. From the first brief to launch and beyond.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Codvoro — Thoughtful design. Dependable development.', description: 'Websites and software built around your business.', url: '/', type: 'website' },
}

const featuredProjects = ['saas-analytics-dashboard', 'ai-knowledge-assistant', 'headless-ecommerce-platform']
  .map(slug => projects.find(project => project.slug === slug)!)

const steps = [
  { icon: Compass, title: 'Understand', text: 'Align on your goals, your users, and what a successful first release needs to do.' },
  { icon: Layers, title: 'Design', text: 'Shape the experience and technical foundations before development begins.' },
  { icon: Code2, title: 'Develop', text: 'Build in focused stages, with regular reviews and visible progress.' },
  { icon: Rocket, title: 'Launch & evolve', text: 'Test, release, and support the next stage of your product.' },
]

export default function HomePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'ItemList', name: 'Codvoro development services',
      itemListElement: services.map((service, index) => ({ '@type': 'ListItem', position: index + 1,
        item: { '@type': 'Service', name: service.title, description: service.summary, url: siteUrl + '/services#' + service.id, provider: { '@type': 'Organization', name: 'Codvoro', url: siteUrl } },
      })),
    }) }} />
    <VideoHero src="/hero.mp4" minHeightClass="min-h-[680px]" contentWidthClass="max-w-5xl"
      footerBar={<div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 text-center text-sm text-slate-300">
        {['Business websites', 'Custom applications', 'SaaS platforms', 'AI & integrations'].map(item => <span key={item}>{item}</span>)}
      </div>}>
      <span className="hero-eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-brand-300" />Design & development by Codvoro</span>
      <h1 className="hero-title">Thoughtful design.<br /><span className="text-brand-200">Dependable development.</span></h1>
      <p className="hero-description">We create websites and software that work for your business. From the first brief to launch, we bring clear thinking, considered design, and reliable engineering to every stage.</p>
      <div className="hero-actions">
        <Link href="/contact" className="btn-primary">Discuss your project <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/portfolio" className="btn-dark-outline">Explore our work <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </VideoHero>

    <section className="section-pad-sm border-b border-slate-200 bg-white">
      <div className="container-wide text-center">
        <p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500 mb-7">Built with established technologies</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {techBrands.slice(0, 6).map(brand => <div key={brand.name} className="flex items-center gap-3 text-sm font-semibold text-slate-600"><span aria-hidden="true">{brand.logo}</span>{brand.name}</div>)}
        </div>
      </div>
    </section>

    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <SectionHeading eyebrow="Our expertise" title="Built around what your business needs.">A new website, a connected platform, or a better way to work. We bring design and development together to make it happen.</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map(({ id, icon: Icon, title, summary }) => <Link key={id} href={'/services#' + id} className="service-card group">
            <div className="flex items-center justify-between mb-7"><span className="icon-tile"><Icon className="h-6 w-6" strokeWidth={1.5} /></span><ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-brand-600" /></div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 text-[.9375rem] leading-relaxed">{summary}</p>
          </Link>)}
        </div>
        <div className="text-center mt-10"><Link href="/services" className="link-arrow">Explore all services <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-wide">
        <SectionHeading eyebrow="Selected work" title="Ideas made tangible.">Explore the thinking, design, and development behind a selection of our digital experiences.</SectionHeading>
        <div className="grid md:grid-cols-3 gap-7">
          {featuredProjects.map(project => <Link key={project.slug} href={'/portfolio/demo/' + project.slug} className="project-card group">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100"><Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" /></div>
            <div className="p-6"><p className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">{project.category}</p><h3 className="text-xl font-semibold leading-snug text-slate-900">{project.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600">Explore project <ArrowUpRight className="h-4 w-4" /></span></div>
          </Link>)}
        </div>
        <div className="text-center mt-10"><Link href="/portfolio" className="btn-secondary">View our portfolio <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>

    <section className="section-pad bg-slate-950 text-white">
      <div className="container-wide">
        <div className="section-head"><div><span className="section-tag section-tag-light">The way we work</span><h2 className="section-title text-white">Clarity at every stage.</h2></div><p className="section-subtitle text-slate-300">A shared plan, regular conversations, and a clear view of what comes next.</p></div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, text }, index) => <li key={title} className="rounded-2xl border border-white/15 bg-white/[.03] p-7"><div className="flex justify-between items-center mb-8"><Icon className="h-6 w-6 text-brand-300" strokeWidth={1.5} /><span className="text-xs font-medium text-slate-400">0{index + 1}</span></div><h3 className="text-xl font-semibold mb-3">{title}</h3><p className="text-sm text-slate-300 leading-relaxed">{text}</p></li>)}
        </ol>
        <div className="text-center mt-10"><Link href="/process" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 hover:text-white">Get to know our process <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-wide">
        <SectionHeading eyebrow="Your development partner" title="Good software starts with a good working relationship.">We make space for the questions that matter, explain the decisions, and keep your business goals at the center of the work.</SectionHeading>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            ['Direct collaboration', 'Work with the team designing and developing your product, with a shared understanding of priorities.'],
            ['Considered decisions', 'Understand the options, tradeoffs, and scope before committing to a technical direction.'],
            ['Continuity after launch', 'Plan for documentation, handover, and ongoing improvements as part of the project.'],
          ].map(([title, text]) => <div key={title} className="text-center"><Check className="h-6 w-6 text-brand-600 mx-auto mb-5" /><h3 className="text-lg font-semibold mb-3">{title}</h3><p className="text-sm leading-relaxed text-slate-600">{text}</p></div>)}
        </div>
        <div className="text-center mt-10"><Link href="/about" className="link-arrow">About Codvoro <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  </>
}
