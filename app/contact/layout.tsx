import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Discuss your website or software project with Codvoro. Share your goals and requirements, or arrange an introductory conversation.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Codvoro',
    description: 'Talk to Codvoro about business websites, custom applications, SaaS platforms, and product development.',
    url: '/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
