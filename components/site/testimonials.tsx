import { CtaLink } from './cta-link'

const FEATURED = {
  quote:
    '« Trois mots : disponibilité, écoute, technicité… Je retournerais voir Mr LEFEBVRE, car je préfère un artisan amoureux de son métier. »',
  author: 'Patrick J.',
}

const OTHERS = [
  {
    quote:
      '« Remarquable praticien à qui je fais confiance depuis 2009. Très attentif à ses clients, par ses conseils et son suivi après vente. »',
    author: 'Daniel R.',
  },
  {
    quote:
      '« Prothésiste au top, très professionnel, patient, à l’écoute du patient. Disponible en cas de besoin. »',
    author: 'Michel A.',
  },
  {
    quote:
      '« Accueil très chaleureux… Audioprothésiste qui fait preuve d’un professionnalisme rare, de beaucoup d’humanité sans le moindre “esprit marchand”. »',
    author: 'Serge N.',
  },
]

export function Testimonials() {
  return (
    <section aria-labelledby="avis-title" className="bg-teal py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1120px] px-5 xl:px-0">
        <h2
          id="avis-title"
          className="text-4xl leading-tight font-bold tracking-[-0.02em] md:text-[52px]"
        >
          Ce que disent nos patients
        </h2>

        <figure className="mt-12">
          <blockquote className="max-w-[960px] text-2xl leading-snug md:text-[38px] md:leading-[1.35]">
            <p>{FEATURED.quote}</p>
          </blockquote>
          <figcaption className="mt-6 text-lg font-semibold text-haze">{FEATURED.author}</figcaption>
        </figure>

        <ul className="mt-14 grid gap-10 border-t border-white/25 pt-12 md:grid-cols-3 md:gap-14">
          {OTHERS.map((t) => (
            <li key={t.author}>
              <figure>
                <blockquote className="text-lg leading-relaxed">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-5 text-lg font-semibold text-haze">{t.author}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <CtaLink
          href="https://www.google.com/search?q=AUDIO+DIGITAL+CONSEIL+Reims"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14"
        >
          Consulter les avis sur Google
        </CtaLink>
      </div>
    </section>
  )
}
