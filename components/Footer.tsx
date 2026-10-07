import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Codvoro', href: '/about' },
    { label: 'Our process', href: '/process' },
    { label: 'Our work', href: '/portfolio' },
    { label: 'Insights', href: '/blog' },
  ],
  Expertise: [
    { label: 'Business websites', href: '/services#websites' },
    { label: 'Web applications', href: '/services#web-apps' },
    { label: 'SaaS platforms', href: '/services#saas' },
    { label: 'AI & automation', href: '/services#ai' },
    { label: 'All services', href: '/services' },
  ],
  Connect: [
    { label: 'Start a project', href: '/contact' },
    { label: 'Partnerships', href: '/partner' },
    { label: 'Partner application', href: '/partner/apply' },
  ],
}

export default function Footer() {
  return <footer>
    <div className="border-y border-brand-100 bg-brand-50/70">
      <div className="container-wide section-pad centered-stack">
        <div className="max-w-2xl"><span className="section-tag">Let’s work together</span><h2 className="section-title">What would you like to build?</h2><p className="mt-5 text-lg text-slate-600 leading-relaxed">Tell us about your business, your idea, or the challenge ahead. We will help you define the next step.</p></div>
        <Link href="/contact" className="btn-primary">Discuss your project <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </div>
    <div className="bg-slate-950 text-slate-400">
      <div className="container-wide pt-16 pb-8">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20">
          <div>
            <Link href="/" className="inline-block mb-5"><Image src="/codvoro-logo.svg" alt="Codvoro" width={180} height={64} className="h-10 w-auto brightness-0 invert" /></Link>
            <p className="max-w-sm text-sm leading-relaxed">Thoughtful design and dependable development for websites, applications, and connected digital products.</p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:admin@codvoro.com" className="flex items-center gap-3 text-slate-300 hover:text-white"><Mail className="h-4 w-4" />admin@codvoro.com</a>
              <a href="tel:+16176159749" className="flex items-center gap-3 text-slate-300 hover:text-white"><Phone className="h-4 w-4" />+1 (617) 615-9749</a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([group, links]) => <div key={group}><h3 className="text-xs font-semibold uppercase tracking-[.12em] text-white mb-5">{group}</h3><ul className="space-y-3">{links.map(link => <li key={link.href}><Link href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</Link></li>)}</ul></div>)}
          </div>
        </div>
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Codvoro. All rights reserved.</p>
          <div className="flex gap-6"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms of Service</Link></div>
        </div>
      </div>
    </div>
  </footer>
}
