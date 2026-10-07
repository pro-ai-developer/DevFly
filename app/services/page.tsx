import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import VideoHero from '@/components/VideoHero'
import SectionHeading from '@/components/SectionHeading'
import { services, serviceFaqs } from '@/lib/services'
import { siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Web Design & Development Services',
  description: 'Business websites, custom applications, SaaS, e-commerce, product design, AI automation, and backend development. Explore how Codvoro can support your next project.',
  alternates: { canonical: '/services' },
  openGraph: { title: 'Codvoro Services', description: 'Design and development for websites, products, and connected business systems.', url: '/services', type: 'website' },
}

export default function ServicesPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'ItemList', name: 'Codvoro Services',
      itemListElement: services.map((service, index) => ({ '@type': 'ListItem', position: index + 1,
        item: { '@type': 'Service', name: service.title, description: service.description, url: siteUrl + '/services#' + service.id,
          provider: { '@type': 'Organization', name: 'Codvoro', url: siteUrl } },
      })),
    }) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: serviceFaqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
    }) }} />
    <VideoHero src="/stock-footage.mp4">
      <span className="hero-eyebrow">Our services</span>
      <h1 className="hero-title">From business need<br />to digital experience.</h1>
      <p className="hero-description">Design, development, and ongoing improvement for websites and software. Choose the support you need, with one team connecting the details.</p>
      <div className="hero-actions"><Link href="/contact" className="btn-primary">Discuss your project <ArrowRight className="h-4 w-4" /></Link></div>
    </VideoHero>
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <SectionHeading eyebrow="Capabilities" title="The right expertise for your next step.">Start with a focused project or bring us into an existing product. We shape the approach around your goals, systems, and team.</SectionHeading>
        <nav aria-label="Service sections" className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map(service => <a key={service.id} href={'#' + service.id} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition-colors hover:border-brand-300 hover:text-brand-700">{service.title}</a>)}
        </nav>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ id, icon: Icon, title, description, includes, tech }) => <article key={id} id={id} className="service-card flex flex-col scroll-mt-28">
            <span className="icon-tile mb-6"><Icon className="h-6 w-6" strokeWidth={1.5} /></span>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-slate-600 leading-relaxed">{description}</p>
            <ul className="space-y-3 my-7">{includes.map(item => <li key={item} className="flex gap-3 text-sm text-slate-700"><Check className="h-4 w-4 mt-1 shrink-0 text-brand-600" />{item}</li>)}</ul>
            <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-slate-100">{tech.map(item => <span key={item} className="rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">{item}</span>)}</div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="section-pad bg-white">
      <div className="container-mid">
        <SectionHeading eyebrow="Working together" title="Before we get started.">A few practical details about planning and delivering a project with Codvoro.</SectionHeading>
        <div className="border-t border-slate-200">{serviceFaqs.map(item => <details key={item.question} className="group border-b border-slate-200">
          <summary className="flex items-center justify-between gap-5 cursor-pointer list-none py-6 font-semibold [&::-webkit-details-marker]:hidden">{item.question}<ChevronDown className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180" /></summary>
          <p className="text-slate-600 leading-relaxed pb-6 pr-8">{item.answer}</p>
        </details>)}</div>
      </div>
    </section>
  </>
}
