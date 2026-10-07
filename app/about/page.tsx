import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Compass, MessageSquare, Code2, HeartHandshake, Check } from 'lucide-react'
import VideoHero from '@/components/VideoHero'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'About Codvoro',
  description: 'Codvoro is a web and software development company bringing together product thinking, considered design, and dependable engineering.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Codvoro', description: 'A development partner for your website, product, and the work that comes next.', url: '/about', type: 'website' },
}

const values = [
  { icon: Compass, title: 'Purpose before features', text: 'We start with the problem your business needs to solve. That understanding guides the scope, experience, and technical approach.' },
  { icon: MessageSquare, title: 'Clear communication', text: 'We explain decisions, share progress, and raise questions early. You should understand what is being built and why.' },
  { icon: Code2, title: 'Care in the details', text: 'Thoughtful interfaces, readable code, and useful documentation make a difference to the people who use and maintain a product.' },
  { icon: HeartHandshake, title: 'Shared responsibility', text: 'We agree on expectations together and stay involved through review, launch, and the transition to ongoing operation.' },
]

export default function AboutPage() {
  return <>
    <VideoHero src="/team.mp4">
      <span className="hero-eyebrow">About Codvoro</span>
      <h1 className="hero-title">A development partner.<br /><span className="text-brand-200">Invested in the details.</span></h1>
      <p className="hero-description">We are a web and software development company bringing together product thinking, considered design, and dependable engineering.</p>
    </VideoHero>
    <section className="section-pad bg-white">
      <div className="container-mid text-center">
        <span className="section-tag">Our purpose</span>
        <h2 className="section-title">Make technology work for the people behind the business.</h2>
        <p className="lede mt-7">A website should explain your company clearly. An application should make a task easier. A platform should give your team room to grow.</p>
        <p className="mt-6 text-slate-600 leading-relaxed">That is the thinking behind our work. We help businesses turn ideas and operational challenges into digital experiences that are useful, coherent, and built to be maintained. Our role connects the first conversation with the design, development, and care a product needs after launch.</p>
      </div>
    </section>
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <SectionHeading eyebrow="What guides us" title="Practical principles. Consistent work.">The way we collaborate matters as much as the software we deliver.</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map(({ icon: Icon, title, text }) => <article key={title} className="service-card"><span className="icon-tile mb-6"><Icon className="h-6 w-6" strokeWidth={1.5} /></span><h3 className="text-xl font-semibold mb-3">{title}</h3><p className="text-slate-600 leading-relaxed">{text}</p></article>)}
        </div>
      </div>
    </section>
    <section className="section-pad bg-white">
      <div className="container-wide">
        <SectionHeading eyebrow="Working with Codvoro" title="One connected team, from brief to build.">We bring the right disciplines into the same conversation so that business goals, design decisions, and technical requirements stay aligned.</SectionHeading>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            ['Plan with context', 'A shared brief, a considered scope, and clear milestones before implementation.'],
            ['Stay close to the work', 'Direct conversations, regular demonstrations, and a place for feedback throughout.'],
            ['Prepare for what comes next', 'Documentation, handover, and a support plan that fits your team and product.'],
          ].map(([title, text]) => <div key={title} className="text-center"><Check className="h-6 w-6 text-brand-600 mb-5 mx-auto" /><h3 className="text-lg font-semibold mb-3">{title}</h3><p className="text-sm leading-relaxed text-slate-600">{text}</p></div>)}
        </div>
        <div className="text-center mt-12"><Link href="/process" className="btn-secondary">Explore our process <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  </>
}
