import { SectionTitle } from './section-title'

const MAPS_LINK =
  'https://www.google.com/maps?cid=16673393534295520181&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF'
const MAPS_EMBED =
  'https://maps.google.com/maps?q=Audio%20Digital%20Conseil%2C%2055%20rue%20Chanzy%2C%2051100%20Reims&z=17&output=embed'

export function PlanAcces() {
  return (
    <section id="acces" aria-labelledby="acces-title" className="scroll-mt-4 bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-5 xl:px-0">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle id="acces-title">Nous trouver</SectionTitle>
          <p className="text-lg text-ink">
            55 rue Chanzy, 51100 Reims ·{' '}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy underline underline-offset-4 hover:text-brand"
            >
              Ouvrir dans Google Maps
            </a>
          </p>
        </div>
        <div className="mt-10 overflow-hidden border border-[#d2dde3]">
          <iframe
            src={MAPS_EMBED}
            title="Plan d’accès Audio Digital Conseil, 55 rue Chanzy à Reims"
            className="block h-[400px] w-full md:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
