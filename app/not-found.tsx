import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-white bg-hero-grid">
      <div className="container-mid py-20 text-center">
        <p className="text-[7rem] lg:text-[10rem] font-extrabold text-brand-600/20 leading-none tracking-tighter">404</p>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-3">Page not found</h1>
        <p className="text-slate-600 text-lg mb-10 max-w-lg mx-auto">
          The page you are looking for does not exist or has moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
