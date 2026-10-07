import type { Metadata } from 'next'
import { Compass, Layers, Code2, ShieldCheck, Rocket, HeartHandshake } from 'lucide-react'
import VideoHero from '@/components/VideoHero'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Our Development Process',
  description: 'From discovery and design to development, testing, launch, and support. See how Codvoro keeps project delivery clear and collaborative.',
  alternates: { canonical: '/process' },
  openGraph: { title: 'The Codvoro Development Process', description: 'A clear path from your first brief to launch and ongoing improvement.', url: '/process', type: 'website' },
}

const phases = [
  { icon: Compass, title: 'Discovery & planning', description: 'We discuss your goals, users, current systems, and constraints. Together, we define the problem, prioritize requirements, and agree on a practical scope.',
    activities: ['Goals and user needs', 'Requirements and dependencies', 'Scope, estimates, and milestones'], deliverable: 'A shared project brief and delivery plan.' },
  { icon: Layers, title: 'Design & architecture', description: 'We map the user experience and technical foundations together. Designs and prototypes give you something concrete to review before implementation.',
    activities: ['User journeys and interface designs', 'Data models and integrations', 'Architecture and technology decisions'], deliverable: 'An agreed design direction and technical approach.' },
  { icon: Code2, title: 'Development & review', description: 'We build in manageable stages and demonstrate progress regularly. Feedback becomes part of the work, with changes discussed against the agreed scope.',
    activities: ['Focused development milestones', 'Code reviews and working demonstrations', 'Documented feedback and decisions'], deliverable: 'Working features in a review environment.' },
  { icon: ShieldCheck, title: 'Testing & refinement', description: 'We check important journeys, review the interface across screen sizes, and resolve issues before release. Testing is part of development and the final launch review.',
    activities: ['Core workflows and integration checks', 'Responsive and accessibility reviews', 'Performance and release readiness'], deliverable: 'A reviewed release with documented checks.' },
  { icon: Rocket, title: 'Deployment & handover', description: 'We prepare the production environment and coordinate the release. Your team receives the access, documentation, and guidance needed to operate the product.',
    activities: ['Deployment and configuration', 'Monitoring and launch checks', 'Documentation and team handover'], deliverable: 'A live product and a clear handover.' },
  { icon: HeartHandshake, title: 'Support & improvement', description: 'Once the product is in use, we help you respond to feedback and plan its next stage. Support and ongoing development are agreed around your priorities.',
    activities: ['Maintenance and issue resolution', 'User feedback and product improvements', 'Planning for future releases'], deliverable: 'An agreed support plan and next priorities.' },
]

export default function ProcessPage() {
  return <>
    <VideoHero src="/process.mp4">
      <span className="hero-eyebrow">Our process</span>
      <h1 className="hero-title">A clear path.<br /><span className="text-brand-200">From brief to launch.</span></h1>
      <p className="hero-description">A structured approach with room for conversation. You stay involved in the decisions, see progress as it happens, and know what comes next.</p>
    </VideoHero>
    <section className="section-pad bg-slate-50">
      <div className="container-wide">
        <SectionHeading eyebrow="How a project takes shape" title="Connected stages. Shared understanding.">The scope and pace depend on your project. These are the stages we use to keep the work clear, reviewable, and ready for the next step.</SectionHeading>
        <ol className="grid md:grid-cols-2 gap-6">
          {phases.map(({ icon: Icon, title, description, activities, deliverable }, index) => <li key={title} className="service-card flex flex-col">
            <div className="flex items-center justify-between mb-7"><span className="icon-tile"><Icon className="h-6 w-6" strokeWidth={1.5} /></span><span className="text-sm font-medium text-slate-400">0{index + 1}</span></div>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-slate-600 leading-relaxed">{description}</p>
            <ul className="mt-6 mb-7 space-y-2 text-sm text-slate-600">{activities.map(activity => <li key={activity} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1 w-1 rounded-full bg-brand-500 shrink-0" />{activity}</li>)}</ul>
            <div className="mt-auto border-t border-slate-100 pt-5"><p className="text-[.625rem] uppercase tracking-[.14em] font-semibold text-brand-600 mb-2">What you receive</p><p className="text-sm font-medium text-slate-800">{deliverable}</p></div>
          </li>)}
        </ol>
      </div>
    </section>
    <section className="section-pad bg-white">
      <div className="container-mid text-center">
        <span className="section-tag">Throughout the project</span>
        <h2 className="section-title">No guessing where things stand.</h2>
        <p className="lede mt-6">We agree on how we will communicate, when work will be reviewed, and who makes each decision. If priorities change, we discuss the impact on scope and timing together.</p>
      </div>
    </section>
  </>
}
