import { CtaLink, PHONE_DISPLAY, PHONE_HREF } from './cta-link'
import { Waveform } from './waveform'

const HIGHLIGHTS = [
  'Bilan auditif gratuit',
  '30 jours d’essai sans engagement',
  '100 % Santé et suivi illimité',
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-navy text-white">
      <div className="mx-auto max-w-[1120px] px-5 pt-16 md:pt-24 xl:px-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_470px] lg:gap-20">
          <div>
            <h1 id="hero-title" className="text-base font-normal text-brand md:text-lg">
              Hervé LEFEBVRE - Votre audioprothésiste à Reims · 55 rue Chanzy
            </h1>
  <h2 className="mt-6 text-[42px] leading-none sm:text-5xl font-bold tracking-[-0.03em] text-balance md:mt-10 md:text-[80px]">
  Renouvelez votre plaisir d’entendre.
  </h2>
            <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-haze md:mt-12">
              Parce que bien entendre est essentiel à votre qualité de vie, le centre vous
              accompagne pour retrouver un confort d’écoute optimal, près de la Cathédrale de Reims.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaLink href={PHONE_HREF}>Appeler le {PHONE_DISPLAY}</CtaLink>
              <CtaLink href="#parcours">Découvrir le parcours</CtaLink>
            </div>
          </div>

          <ul className="flex flex-col">
            {HIGHLIGHTS.map((item, index) => (
              <li
                key={item}
                className={
                  index === 0
                    ? 'border-t-2 border-brand py-6 first:pt-0'
                    : 'border-t border-white/20 py-7'
                }
              >
                <p className="text-2xl leading-tight font-semibold tracking-tight md:text-[34px]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <Waveform className="mt-16 md:mt-20" />
      </div>
    </section>
  )
}
