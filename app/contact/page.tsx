'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, Calendar, CheckCircle, ArrowRight, Send } from 'lucide-react'
import VideoHero from '@/components/VideoHero'

const projectTypes = [
  'Web Application',
  'SaaS Platform',
  'Startup MVP',
  'AI Solution / Automation',
  'E-Commerce Platform',
  'API / Backend System',
  'UI/UX Implementation',
  'Other',
]

const budgetRanges = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Not sure yet',
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    details: '',
    website: '', // honeypot
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Bots fill the hidden honeypot — silently pretend success.
    if (formState.website) {
      setSubmitted(true)
      setLoading(false)
      return
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setError('The contact form is not configured yet. Please email admin@codvoro.com directly.')
      setLoading(false)
      return
    }

    try {
      // Web3Forms free plan requires submitting from the browser (client-side).
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New project inquiry from ${formState.name}${formState.company ? ` (${formState.company})` : ''}`,
          from_name: 'Codvoro Website',
          name: formState.name,
          email: formState.email,
          company: formState.company || '—',
          project_type: formState.projectType || '—',
          budget: formState.budget || '—',
          message: formState.details,
          botcheck: '',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || 'Something went wrong. Please try again.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <VideoHero src="/contact.mp4" minHeightClass="min-h-[420px]">
        <span className="hero-eyebrow">Get In Touch</span>
        <h1 className="hero-title">
          Let&apos;s build something <span className="gradient-text-light">together</span>
        </h1>
        <p className="hero-description">
          Share your goals, the challenge you are working on, and what you have in mind. We will help you work out the next step.
        </p>
      </VideoHero>

      {/* Contact options + form */}
      <section className="section-pad bg-slate-50">
        <div className="container-wide grid lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-start">
          {/* Left — contact info */}
          <div>
            <span className="section-tag">Contact Codvoro</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Start with a conversation
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Bring a brief, an existing product, or an idea you want to explore. We will discuss the scope, priorities, and how we can help.
            </p>

            <dl className="border-t border-slate-200">
              <div className="flex items-start gap-4 py-5 border-b border-slate-200">
                <Phone className="w-5 h-5 text-brand-600 shrink-0 mt-1" strokeWidth={1.75} />
                <div>
                  <dt className="text-[0.6875rem] font-bold text-slate-500 uppercase tracking-[0.14em] mb-1">Call us</dt>
                  <dd>
                    <a href="tel:+16176159749" className="text-lg font-semibold text-slate-900 hover:text-brand-600 transition-colors">
                      +1 (617) 615-9749
                    </a>
                    <p className="text-slate-500 text-sm mt-0.5">Mon–Fri, US business hours.</p>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5 border-b border-slate-200">
                <Mail className="w-5 h-5 text-brand-600 shrink-0 mt-1" strokeWidth={1.75} />
                <div className="min-w-0">
                  <dt className="text-[0.6875rem] font-bold text-slate-500 uppercase tracking-[0.14em] mb-1">Email us</dt>
                  <dd>
                    <a href="mailto:admin@codvoro.com" className="text-lg font-semibold text-slate-900 hover:text-brand-600 transition-colors break-all">
                      admin@codvoro.com
                    </a>
                    <p className="text-slate-500 text-sm mt-0.5">For project inquiries and general questions.</p>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5 border-b border-slate-200">
                <Calendar className="w-5 h-5 text-accent-600 shrink-0 mt-1" strokeWidth={1.75} />
                <div>
                  <dt className="text-[0.6875rem] font-bold text-slate-500 uppercase tracking-[0.14em] mb-1">Schedule a conversation</dt>
                  <dd>
                    <p className="text-slate-600 text-[0.9375rem] mb-3">
                      An introductory conversation about your project, priorities, and timeline.
                    </p>
                    <a
                      href="https://outlook.office.com/book/DiscussabouttheProjectwithDaniel@codvoro.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow text-[0.9375rem]"
                    >
                      Choose a meeting time <ArrowRight className="w-4 h-4" />
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            {/* What to expect */}
            <h3 className="text-[0.6875rem] font-bold text-slate-500 uppercase tracking-[0.14em] mt-10 mb-4">
              What happens next
            </h3>
            <ol className="border-t border-slate-200">
              {[
                'You submit this form',
                'We review your goals and requirements',
                'We schedule a discovery call',
                'We outline an approach and next steps',
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-4 py-3.5 border-b border-slate-200 text-slate-700">
                  <span className="text-sm font-bold text-brand-600 tabular-nums shrink-0 pt-0.5">
                    0{i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="card h-full flex flex-col items-start justify-center py-16 gap-4 px-8 lg:px-12">
                <div className="w-14 h-14 bg-accent-500/15 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-7 h-7 text-accent-600" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Message received</h2>
                <p className="text-slate-600 max-w-md">
                  Thank you for sharing your project. Our team will review your message and contact you at the email address provided.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setError(''); setFormState({ name: '', email: '', company: '', projectType: '', budget: '', details: '', website: '' }) }}
                  className="btn-outline mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="card p-6 sm:p-8 lg:p-10">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Tell us about your project</h2>
                <p className="text-slate-600 mb-8">Fields marked with an asterisk are required.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot — hidden from real users, catches bots */}
                  <input
                    type="text"
                    name="website"
                    value={formState.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="input-field"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="input-field"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your company name (optional)"
                      className="input-field"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select a type…</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select a range…</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Project Details <span className="text-brand-600">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={5}
                      required
                      value={formState.details}
                      onChange={handleChange}
                      placeholder="Tell us about your project — what are you building, what problem does it solve, and what's your timeline?"
                      className="input-field resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>Sending…</>
                    ) : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-xs text-slate-500">
                    By submitting, you agree to our{' '}
                    <Link href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</Link>.
                    We will never share your data.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
