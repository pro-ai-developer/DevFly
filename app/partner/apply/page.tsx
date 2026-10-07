import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, ChevronDown, FileCheck2, Laptop, MessageSquare, Wallet } from 'lucide-react'
import PartnerApplicationForm from './PartnerApplicationForm'

export const metadata: Metadata = {
  title: 'Partner Role & Application',
  description: 'Understand the Codvoro partner role before applying: your responsibilities, our delivery support, the 30/70 revenue split, equipment, payments, and onboarding.',
  alternates: { canonical: '/partner/apply' },
}

const responsibilities = [
  { title: 'Your role', share: '30% partner share', description: 'You own the professional channel and take care of the client-facing side.', items: [
    'Maintain ownership of your account and keep your profile accurate.',
    'Keep a dedicated work laptop and reliable internet available during agreed hours.',
    'Review important proposals, commitments, and project decisions.',
    'Join scheduled client calls and represent your role and our delivery team honestly.',
    'Manage the account’s payment and withdrawal side, including agreed payments to our team.',
    'Keep the agreement, project records, invoices, and payment confirmations for your own reporting.',
  ] },
  { title: 'Our role', share: '70% technical & operations share', description: 'Codvoro handles the research, technical work, and day-to-day delivery.', items: [
    'Find suitable projects, research clients, and prepare tailored proposals.',
    'Handle proposal submission through permitted platform roles and cover agreed application costs.',
    'Prepare project briefs, talking points, and technical answers before client calls.',
    'Provide technical support during calls when appropriate and permitted.',
    'Manage development, project coordination, testing, deployment, delivery, and ongoing support.',
    'Share project progress, revenue calculations, detailed service invoices, and payment records.',
  ] },
]

const workingDetails = [
  { icon: MessageSquare, title: 'Client calls, with preparation', text: 'Before a call, we walk you through the client’s goal, project scope, proposed approach, timeline, and likely questions. You focus on listening and communicating clearly. A technical specialist can join or support you when appropriate; questions that need more work can be followed up afterward.', note: 'You do not need to code. You do need to prepare, attend agreed calls, and be responsive.' },
  { icon: Laptop, title: 'A dedicated work setup', text: 'You provide a dedicated laptop with reliable internet and keep it powered on during agreed working periods. During onboarding, we agree on the schedule, approved business activities, and any remote-support tools, such as AnyDesk or Jump Desktop.', note: 'Remote support is limited to authorized work. Platform access must use permitted roles and permissions; a remote connection does not authorize account sharing.' },
  { icon: Wallet, title: 'Payments you can follow', text: 'You manage the payment and withdrawal side of your account. Both sides review the project revenue, relevant fees, agreed expenses, and the share calculation. Payments for our technical and operational services are supported by detailed invoices and payment confirmations.', note: 'Payment timing, fees, expenses, refunds, and the calculation basis are agreed in writing before work starts.' },
  { icon: FileCheck2, title: 'Records for you and your tax professional', text: 'Keep the signed agreement, project records, platform statements, service invoices, and payment confirmations together. Our invoices describe the actual work, such as development, project management, testing, or deployment. We provide applicable documentation from our side, including W-8BEN or W-8BEN-E when appropriate to the provider.', note: 'You remain responsible for your tax reporting. Your tax professional determines the correct treatment of revenue, expenses, and payments.' },
]

const steps = [
  ['Apply', 'Tell us about your background, account or planned channel, equipment, and availability.'],
  ['Discuss the fit', 'If there is a potential match, we contact you to discuss expectations, client calls, and the working arrangement.'],
  ['Agree in writing', 'Review responsibilities, the 30/70 calculation, costs, payment timing, access permissions, and how the relationship can end.'],
  ['Set up and begin', 'Confirm the work setup and communication process, then research suitable opportunities together.'],
]

const faqs = [
  ['Can I apply without technical experience?', 'Yes. Reliability, professional communication, and sound judgment matter for this role. Our team handles technical delivery and helps you prepare for client conversations.'],
  ['What if my account is inactive, or I do not have one yet?', 'Unused or inactive freelance channels are the main fit for this model. We also consider people who want to start from the beginning. Choose “I am starting without a profile” in the form; a freelance profile URL is not required for that option. We will discuss whether your intended platform and setup are suitable.'],
  ['How much time will I need?', 'Availability depends on the projects and client schedule. You need time to review activity, prepare for and join calls, approve important decisions, and manage payments and records. Tell us your realistic availability; the working hours and response expectations are agreed together.'],
  ['Who owns the account and who can access it?', 'You retain ownership of your account. Access and proposal submission must follow the platform’s current rules, using agency or team permissions where supported. You remain accurately identified, and clients should know who is delivering the work.'],
  ['Who covers proposal costs, and is income guaranteed?', 'Our team covers the proposal and application costs agreed in writing. Platform fees and any other expenses are addressed in the agreement. Income depends on winning and completing paid work; there is no guaranteed project volume or monthly amount.'],
  ['What can I see during the partnership?', 'You have visibility into relevant opportunities, submitted proposals, client communications, project status, revenue, platform fees, service invoices, and payments. Both sides keep the records needed to check the project calculation.'],
  ['Does applying commit me to the partnership?', 'No. The application starts a conversation. A partnership begins only after both sides review and accept the written terms.'],
]

export default function ApplyPage() {
  return <>
    <section className="section-pad-sm bg-slate-950 text-white">
      <div className="container-wide">
        <Link href="/partner" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"><ArrowLeft className="h-4 w-4" />Partnership overview</Link>
        <div className="mt-10 centered-stack">
          <div>
            <span className="section-tag section-tag-light">The Partner Role</span>
            <h1 className="hero-title max-w-4xl">You build client relationships.<br /><span className="text-brand-300">We deliver the work.</span></h1>
            <p className="mt-7 text-lg leading-relaxed text-slate-300 max-w-2xl">Put an unused or inactive freelance channel to work with a technical team behind you. You own the account, participate in client conversations, and manage payments. We handle research, proposals, agreed application costs, and project delivery.</p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-5"><a href="#application" className="btn-primary">Start your application <ArrowRight className="h-4 w-4" /></a><a href="#responsibilities" className="text-sm font-semibold text-slate-300 hover:text-white underline underline-offset-4">Read the role details</a></div>
          </div>
          <div className="w-full max-w-xl border border-white/20 rounded-[var(--radius-lg)] p-7 lg:p-8 bg-white/[.03]">
            <p className="text-xs uppercase tracking-[.16em] text-brand-200 font-bold">The arrangement at a glance</p>
            <div className="mt-6 grid grid-cols-2 gap-6"><div><p className="text-5xl font-extrabold">30%</p><p className="mt-2 text-sm text-slate-300">Your share</p></div><div><p className="text-5xl font-extrabold text-accent-400">70%</p><p className="mt-2 text-sm text-slate-300">Our team’s share</p></div></div>
            <ul className="mt-7 border-t border-white/15 pt-5 space-y-3 text-sm text-slate-300">{['No development experience required', 'Existing profiles and new starters considered', 'Written terms and visible project records'].map(item => <li key={item} className="flex gap-3"><Check aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-400" />{item}</li>)}</ul>
            <p className="mt-5 text-xs leading-relaxed text-slate-400">Revenue depends on paid projects. Your participation is required throughout the partnership.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="responsibilities" className="section-pad-sm bg-white scroll-mt-36">
      <div className="container-wide">
        <div className="section-head"><div><span className="section-tag">Who Does What</span><h2 className="section-title">Clear responsibilities from day one.</h2></div><p className="section-subtitle">A good fit is someone who communicates professionally, stays involved, and wants to build a long-term working relationship. Here is what each side contributes.</p></div>
        <div className="grid lg:grid-cols-2 border border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 rounded-[var(--radius-lg)] overflow-hidden">
          {responsibilities.map((role, index) => <div key={role.title} className={index === 0 ? 'p-6 sm:p-9 lg:p-11 bg-white' : 'p-6 sm:p-9 lg:p-11 bg-slate-50'}><p className={index === 0 ? 'text-xs uppercase tracking-[.12em] font-bold text-brand-600' : 'text-xs uppercase tracking-[.12em] font-bold text-accent-600'}>{role.share}</p><h3 className="mt-3 text-3xl font-extrabold">{role.title}</h3><p className="mt-3 text-slate-600">{role.description}</p><ul className="mt-6">{role.items.map(item => <li key={item} className="flex gap-3 py-4 border-t border-slate-200 text-sm leading-relaxed text-slate-700"><Check aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-600 mt-0.5" />{item}</li>)}</ul></div>)}
        </div>
      </div>
    </section>

    <section id="revenue" className="section-pad-sm bg-slate-50 border-y border-slate-200">
      <div className="container-wide reading-stack grid gap-8">
        <div><span className="section-tag">The 30/70 Model</span><h2 className="section-title">Understand your share.</h2><p className="mt-6 text-slate-600 max-w-xl leading-relaxed">You receive 30% of the agreed project revenue for your account ownership, client participation, and payment administration. Our team receives 70% for the technical and operational work.</p><p className="mt-4 text-slate-600 max-w-xl leading-relaxed">The written agreement defines the revenue used for the split, how platform fees and approved expenses are handled, and when payments are made. Each project has a recorded calculation you can review.</p><Link href="/blog/how-the-30-70-revenue-model-works" className="link-arrow mt-6 text-sm">Read the revenue model guide <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="bg-white border border-slate-200 rounded-[var(--radius-lg)] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">Illustrative project calculation</p><p className="mt-4 text-4xl sm:text-5xl font-extrabold">$10,000</p><p className="mt-2 text-sm text-slate-600">Agreed revenue used for this example</p>
          <div aria-hidden="true" className="flex h-4 mt-7 overflow-hidden rounded-sm"><div className="w-[30%] bg-brand-600" /><div className="w-[70%] bg-accent-600" /></div>
          <dl className="mt-6 grid grid-cols-2 gap-5"><div><dt className="text-sm text-slate-600">You · 30%</dt><dd className="mt-2 text-3xl font-extrabold text-brand-600">$3,000</dd></div><div><dt className="text-sm text-slate-600">Our team · 70%</dt><dd className="mt-2 text-3xl font-extrabold text-accent-600">$7,000</dd></div></dl>
          <p className="mt-6 pt-5 border-t border-slate-200 text-xs leading-relaxed text-slate-500">This illustrates the split, not expected earnings or take-home income. Actual fees, approved expenses, and your tax obligations depend on the project, agreement, and your circumstances.</p>
        </div>
      </div>
    </section>

    <section className="section-pad-sm bg-white">
      <div className="container-wide"><div className="section-head"><div><span className="section-tag">Working Together</span><h2 className="section-title">What the role looks like in practice.</h2></div></div>
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">{workingDetails.map(({ icon: Icon, title, text, note }) => <div key={title} className="border-t border-slate-200 pt-7"><Icon aria-hidden="true" className="h-7 w-7 text-brand-600" /><h3 className="mt-5 text-2xl font-extrabold">{title}</h3><p className="mt-4 text-slate-600 leading-relaxed">{text}</p><p className="mt-4 text-sm leading-relaxed text-slate-700 border-l-2 border-brand-200 pl-4">{note}</p></div>)}</div>
        <aside className="mt-10 bg-slate-50 border border-slate-200 rounded-[var(--radius)] p-6 text-sm text-slate-600 leading-relaxed"><h3 className="font-bold text-slate-900">Platform access and financial documentation</h3><p className="mt-2">For example, Upwork prohibits sharing or transferring a personal account. Team access must follow its permitted agency arrangements. We confirm the appropriate setup before any activity begins.</p><div className="mt-4 flex flex-wrap gap-x-6 gap-y-3"><a className="underline underline-offset-4 hover:text-brand-700" href="https://support.upwork.com/hc/en-us/articles/18513114070419-Represent-yourself-authentically" target="_blank" rel="noopener noreferrer">Upwork account requirements</a><a className="underline underline-offset-4 hover:text-brand-700" href="https://www.irs.gov/businesses/what-to-do-with-form-1099-k" target="_blank" rel="noopener noreferrer">IRS payment records guidance</a><a className="underline underline-offset-4 hover:text-brand-700" href="https://www.irs.gov/forms-pubs/about-form-w-8-ben" target="_blank" rel="noopener noreferrer">Form W-8BEN</a><a className="underline underline-offset-4 hover:text-brand-700" href="https://www.irs.gov/forms-pubs/about-form-w-8-ben-e" target="_blank" rel="noopener noreferrer">Form W-8BEN-E</a></div></aside>
      </div>
    </section>

    <section className="section-pad-sm bg-slate-950 text-white">
      <div className="container-wide text-center"><span className="section-tag section-tag-light">The Next Steps</span><h2 className="text-3xl sm:text-4xl font-extrabold">From application to a working agreement.</h2><ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{steps.map(([title, description], index) => <li key={title} className="border-t border-white/20 pt-6"><span className="text-sm font-bold text-brand-300">0{index + 1}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 text-sm text-slate-300 leading-relaxed">{description}</p></li>)}</ol></div>
    </section>

    <section className="section-pad-sm bg-white">
      <div className="container-mid grid gap-8"><div><span className="section-tag">Before You Apply</span><h2 className="section-title">A few common questions.</h2></div><div className="border-t border-slate-200">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-slate-200"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">{question}<ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-600 group-open:rotate-180" /></summary><p className="pb-6 pr-5 text-slate-600 leading-relaxed">{answer}</p></details>)}</div></div>
    </section>

    <section id="application" className="section-pad-sm bg-slate-50 border-t border-slate-200 scroll-mt-36">
      <div className="container-wide grid lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-12 items-start">
        <aside className="lg:sticky lg:top-28"><span className="section-tag">Your Next Step</span><h2 className="section-title">Tell us about yourself.</h2><p className="mt-5 text-slate-600 leading-relaxed">Share your current situation and the availability you can realistically commit. Starting without a freelance profile is an option.</p><ul className="mt-7 border-t border-slate-200">{['Your contact details and time zone', 'Your existing profile or the channel you want to build', 'Your availability for calls and account oversight', 'Your dedicated laptop and internet setup'].map(item => <li key={item} className="flex gap-3 py-4 border-b border-slate-200 text-sm text-slate-700"><Check aria-hidden="true" className="h-5 w-5 shrink-0 text-accent-600" />{item}</li>)}</ul><p className="mt-6 text-sm leading-relaxed text-slate-500">Submitting this form does not create a partnership. Final terms are reviewed together and documented in a written agreement.</p><p className="mt-4 text-sm text-slate-600">Questions about the role? <a href="mailto:admin@codvoro.com" className="text-brand-700 underline underline-offset-4 break-words">admin@codvoro.com</a></p></aside>
        <PartnerApplicationForm />
      </div>
    </section>
  </>
}
