'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Send } from 'lucide-react'

const initial = {
  name: '', email: '', location: '', timeZone: '', profileUrl: '', platform: '',
  accountStatus: '', profileHistory: '', availability: '', calls: '', equipment: '',
  motivation: '', model: false, compliance: false, accuracy: false, website: '',
}
const label = 'block text-sm font-semibold text-slate-700 mb-1.5'
const legend = 'text-lg font-extrabold text-slate-900 mb-5'

export default function PartnerApplicationForm() {
  const [form, setForm] = useState(initial)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const startingFresh = form.accountStatus === 'I am starting without a profile'
  const profileRequired = Boolean(form.accountStatus) && !startingFresh

  function change(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = e.target
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value
    setForm(current => ({ ...current, [target.name]: value }))
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setError('')
    if (form.website) {
      setSubmitted(true)
      setLoading(false)
      return
    }
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setError('Online applications are temporarily unavailable. Please email admin@codvoro.com with the details below. Your entries are still here to copy.')
      setLoading(false)
      return
    }
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New partner application from ' + form.name,
          from_name: 'Codvoro Partner Application',
          ...form,
          model: form.model ? 'Confirmed' : 'No',
          compliance: form.compliance ? 'Confirmed' : 'No',
          accuracy: form.accuracy ? 'Confirmed' : 'No',
          botcheck: '',
        }),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok || !data?.success) throw new Error(data?.message || 'Something went wrong. Please try again.')
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) return <div role="status" className="card p-7 lg:p-10 min-h-[30rem] flex flex-col justify-center items-start">
    <div className="h-14 w-14 rounded-full bg-emerald-50 flex items-center justify-center"><CheckCircle aria-hidden="true" className="h-7 w-7 text-accent-600" /></div>
    <h2 className="mt-6 text-3xl font-extrabold">Application received</h2>
    <p className="mt-3 text-slate-600 max-w-lg">Thank you. We will review your background, channel, and availability. If there is a potential fit, we will contact you at the email address you provided to discuss the working arrangement.</p>
    <p className="mt-4 text-sm text-slate-500">You can review the responsibilities and written terms together before deciding whether to proceed.</p>
    <button type="button" className="btn-outline mt-7" onClick={() => { setForm(initial); setSubmitted(false) }}>Submit another application</button>
  </div>

  return <div className="card p-6 sm:p-8 lg:p-10 min-w-0">
    <h2 className="text-3xl font-extrabold">Your application</h2>
    <p className="mt-2 mb-8 text-sm text-slate-600">Required fields are marked with an asterisk (*).</p>
    <form onSubmit={submit} aria-busy={loading} className="space-y-8">
      <input name="website" value={form.website} onChange={change} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <fieldset className="space-y-5">
        <legend className={legend}>01 · About you</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div><label className={label} htmlFor="name">Full name *</label><input className="input-field" id="name" name="name" required value={form.name} onChange={change} autoComplete="name" placeholder="Your full name" /></div>
          <div><label className={label} htmlFor="email">Email *</label><input className="input-field" id="email" name="email" type="email" required value={form.email} onChange={change} autoComplete="email" placeholder="you@email.com" /></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div><label className={label} htmlFor="location">City and country *</label><input className="input-field" id="location" name="location" required value={form.location} onChange={change} placeholder="Boston, United States" /></div>
          <div><label className={label} htmlFor="timeZone">Time zone *</label><input className="input-field" id="timeZone" name="timeZone" required value={form.timeZone} onChange={change} placeholder="e.g. America/New_York" /></div>
        </div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-slate-200 pt-6">
        <legend className={legend}>02 · Your professional channel</legend>
        <div><label className={label} htmlFor="accountStatus">Which best describes your situation? *</label><select className="input-field" id="accountStatus" name="accountStatus" required value={form.accountStatus} onChange={change}><option value="">Select your current situation</option><option>I have an inactive or underused profile</option><option>I have an active profile</option><option>I have a new profile with no project history</option><option>I am starting without a profile</option></select></div>
        <div><label className={label} htmlFor="platform">{startingFresh ? 'Platform you would like to use *' : 'Primary platform *'}</label><select className="input-field" id="platform" name="platform" required value={form.platform} onChange={change}><option value="">Select a platform</option><option>Upwork</option><option>Freelancer</option><option>LinkedIn / direct sales</option><option>Other</option><option>Not sure yet — I would like guidance</option></select></div>
        <div><label className={label} htmlFor="profileUrl">Professional profile URL {profileRequired ? '*' : '(optional)'}</label><input className="input-field" id="profileUrl" name="profileUrl" type="url" required={profileRequired} value={form.profileUrl} onChange={change} placeholder="https://" aria-describedby="profile-help" /><p id="profile-help" className="mt-2 text-xs text-slate-500">{startingFresh ? 'You can leave this blank, or share another professional profile such as LinkedIn.' : 'Share the profile you own and would use for this partnership.'}</p></div>
        <div><label className={label} htmlFor="profileHistory">{startingFresh ? 'Tell us about your professional background *' : 'Tell us about your profile and work history *'}</label><textarea className="input-field" rows={4} id="profileHistory" name="profileHistory" required value={form.profileHistory} onChange={change} placeholder={startingFresh ? 'Your experience, communication skills, and the type of professional channel you want to build.' : 'How long you have had the profile, completed projects, services, ratings, and current activity. New profiles are welcome.'} /></div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-slate-200 pt-6">
        <legend className={legend}>03 · Availability and work setup</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div><label className={label} htmlFor="availability">Weekly availability *</label><select className="input-field" id="availability" name="availability" required value={form.availability} onChange={change} aria-describedby="availability-help"><option value="">Select your availability</option><option>Fewer than 5 hours</option><option>5–10 hours</option><option>10–20 hours</option><option>20+ hours</option><option>I would like to discuss the schedule</option></select></div>
          <div><label className={label} htmlFor="calls">Available for client calls? *</label><select className="input-field" id="calls" name="calls" required value={form.calls} onChange={change}><option value="">Select your availability</option><option>Yes, during US business hours</option><option>Yes, with advance notice</option><option>Limited availability — let’s discuss</option></select></div>
        </div>
        <p id="availability-help" className="text-xs text-slate-500">Include time for preparation, client calls, reviews, and payment administration. The schedule is agreed together.</p>
        <div><label className={label} htmlFor="equipment">Dedicated laptop and internet setup *</label><textarea className="input-field" rows={3} id="equipment" name="equipment" required value={form.equipment} onChange={change} placeholder="Your laptop and operating system, internet reliability, and the hours you can keep a dedicated device available. Tell us if you still need to arrange one." aria-describedby="equipment-help" /><p id="equipment-help" className="mt-2 text-xs text-slate-500">We discuss any approved remote-support tools and access permissions during onboarding.</p></div>
        <div><label className={label} htmlFor="motivation">What would you like to build with us? *</label><textarea className="input-field" rows={4} id="motivation" name="motivation" required value={form.motivation} onChange={change} placeholder="Your goals, why this arrangement interests you, and any questions or expectations you want to discuss." /></div>
      </fieldset>

      <fieldset className="space-y-4 border-t border-slate-200 pt-6">
        <legend className={legend}>04 · Confirm your understanding</legend>
        <label className="flex items-start gap-3 text-sm text-slate-600"><input className="mt-1 h-4 w-4 shrink-0 accent-indigo-600" type="checkbox" name="model" required checked={form.model} onChange={change} /><span>I understand the proposed 30% partner / 70% team split, my responsibilities for calls, account oversight, equipment, payments, and records, and that final terms will be agreed in writing. *</span></label>
        <label className="flex items-start gap-3 text-sm text-slate-600"><input className="mt-1 h-4 w-4 shrink-0 accent-indigo-600" type="checkbox" name="compliance" required checked={form.compliance} onChange={change} /><span>I agree that activity and access must follow the platform’s rules, with accurate identity and client communication. *</span></label>
        <label className="flex items-start gap-3 text-sm text-slate-600"><input className="mt-1 h-4 w-4 shrink-0 accent-indigo-600" type="checkbox" name="accuracy" required checked={form.accuracy} onChange={change} /><span>I confirm that my information is accurate and that any profile I provide is my own. If I am starting without a profile, I have indicated that above. *</span></label>
      </fieldset>
      {error && <div role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-[var(--radius)]"><p>{error}</p><a href="mailto:admin@codvoro.com?subject=Partner%20application" className="mt-2 inline-block font-semibold underline">Email the partnership team</a></div>}
      <div><button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5">{loading ? 'Submitting…' : <>Submit application <Send aria-hidden="true" className="h-4 w-4" /></>}</button><p className="mt-4 text-xs leading-relaxed text-slate-500">By submitting, you agree to our <Link className="text-brand-600 hover:underline" href="/privacy">Privacy Policy</Link>. This application starts a conversation and does not create a partnership.</p></div>
    </form>
  </div>
}
