import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Codvoro — Web App, AI, SaaS & MVP Development'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '72px 80px', color: 'white', background: 'linear-gradient(135deg, #020617 0%, #1e1b4b 52%, #4338ca 100%)', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 32, fontWeight: 800 }}>
        <div style={{ width: 42, height: 42, border: '4px solid #60a5fa', borderRadius: 10 }} />
        CODVORO
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-3px', maxWidth: 980 }}>Thoughtful design. Dependable development.</div>
        <div style={{ marginTop: 30, color: '#bfdbfe', fontSize: 28 }}>Web Apps · AI Solutions · SaaS Platforms · Startup MVPs</div>
      </div>
    </div>,
    size,
  )
}
