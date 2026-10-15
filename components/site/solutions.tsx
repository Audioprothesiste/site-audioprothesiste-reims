import Image from 'next/image'
import { SectionTitle } from './section-title'

const SOLUTIONS = [
  {
    code: 'RITE',
    title: 'Écouteur déporté',
    text: 'Une solution discrète, qui combine confort et précision sonore.',
    image: '/images/rite.jpg',
    alt: 'Prothèse auditive Pure 312 X',
  },
  {
    code: 'CIC',
    title: 'Intra-auriculaire',
    text: 'Un appareil qui se loge directement dans le conduit auditif.',
    image: '/images/cic.png',
    alt: 'Prothèses auditives Silk Nx',
  },
  {
    code: 'BTE',
    title: 'Contour d’oreille',
    text: 'Une solution polyvalente et facile à manipuler, adaptée à de nombreux besoins.',
    image: '/images/bte.jpg',
    alt: 'Prothèse auditive Rexton BiCore Rugged',
  },
]

export function Solutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="scroll-mt-4 py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-5 xl:px-0">
        <SectionTitle id="solutions-title" className="max-w-[700px]">
          Discrètes, rechargeables ou connectées.
        </SectionTitle>
        <p className="mt-8 max-w-[1040px] text-lg leading-relaxed text-ink">
          Nous sélectionnons avec vous une solution adaptée à votre audition, à votre budget et à
          votre mode de vie. Les fonctionnalités disponibles dépendent du modèle choisi.
        </p>

        <ul className="mt-14 grid gap-12 border-t-4 border-navy pt-8 md:grid-cols-3 md:gap-8">
          {SOLUTIONS.map((s) => (
            <li key={s.code}>
              <p className="text-6xl leading-none font-bold tracking-tight text-brand md:text-[64px]">
                {s.code}
              </p>
              <div className="relative mt-6 aspect-[352/180] overflow-hidden rounded-sm bg-mist">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 352px, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-[25px] leading-tight font-semibold tracking-tight text-navy">
                {s.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
