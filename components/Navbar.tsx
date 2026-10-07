'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Our work' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => { setMobileOpen(false) }, [pathname])
  useEffect(() => {
    if (!mobileOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        document.getElementById('navigation-toggle')?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [mobileOpen])

  const active = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
    <nav aria-label="Main navigation" className="container-wide h-18 lg:h-20 flex items-center justify-between gap-6">
      <Link href="/" aria-label="Codvoro home" className="shrink-0">
        <Image src="/codvoro-logo.svg" alt="Codvoro" width={180} height={64} priority className="h-10 w-auto logo-clean" />
      </Link>
      <ul className="hidden lg:flex items-center gap-8">
        {navLinks.map(link => <li key={link.href}><Link href={link.href} aria-current={active(link.href) ? 'page' : undefined} className={active(link.href) ? 'text-sm font-semibold text-brand-600' : 'text-sm font-medium text-slate-600 transition-colors hover:text-brand-600'}>{link.label}</Link></li>)}
      </ul>
      <Link href="/contact" className="btn-primary hidden lg:inline-flex text-sm px-5 py-3">Discuss a project <ArrowUpRight className="h-4 w-4" /></Link>
      <button id="navigation-toggle" type="button" className="lg:hidden p-2 text-slate-700" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </nav>
    {mobileOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden border-t border-slate-200 bg-white max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
      <ul className="container-wide py-5">
        {[{ href: '/', label: 'Home' }, ...navLinks].map(link => <li key={link.href}><Link href={link.href} onClick={() => setMobileOpen(false)} aria-current={pathname === link.href ? 'page' : undefined} className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600">{link.label}</Link></li>)}
        <li className="pt-4"><Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full">Discuss a project <ArrowUpRight className="h-4 w-4" /></Link></li>
      </ul>
    </nav>}
  </header>
}
