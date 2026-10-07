import type { ReactNode } from 'react'

export default function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="section-head">
    <div><span className="section-tag">{eyebrow}</span><h2 className="section-title">{title}</h2></div>
    {children && <div className="section-subtitle">{children}</div>}
  </div>
}
