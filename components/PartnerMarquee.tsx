import { techBrands } from './BrandLogos'

/**
 * Continuously scrolling strip of the platforms we work across — logos only,
 * in each brand's own colours.
 *
 * The track holds two identical copies of the list and slides exactly -50%,
 * so the second copy lands where the first began and the loop is seamless.
 * Only the first copy is exposed to assistive tech; the duplicate is hidden.
 * Motion pauses on hover, and the reduced-motion rules in globals.css turn the
 * strip into a normal horizontally scrollable row.
 */
export default function PartnerMarquee() {
  return (
    <section aria-labelledby="technology-heading" className="w-full border-b border-slate-200 bg-white py-9 lg:py-11">
      <div className="px-5 mb-7 text-center">
        <p id="technology-heading" className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Built with established technologies
        </p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="marquee-group" aria-hidden={copy === 1 || undefined}>
              {techBrands.map((brand) => (
                <li key={brand.name} className="flex shrink-0 items-center gap-3">
                  <span className="shrink-0 flex items-center justify-center w-9">{brand.logo}</span>
                  <span className="text-base font-medium text-slate-700 whitespace-nowrap">
                    {brand.name}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
