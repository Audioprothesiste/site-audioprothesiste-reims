import { SectionTitle } from './section-title'

const STEPS = [
  {
    title: 'Bilan auditif gratuit',
    text: 'Un bilan pour faire le point sur votre audition et comprendre vos besoins avec précision. Ce test non médical ne remplace pas une consultation ORL.',
  },
  {
    title: 'Essai 30 jours sans engagement',
    text: 'Testez vos aides auditives dans les situations de votre quotidien, à votre rythme, sans engagement.',
  },
  {
    title: 'Réglages & suivi',
    text: 'Retrouvez votre audioprothésiste pour l’entretien, les réglages et le suivi de votre équipement.',
  },
]

export function Parcours() {
  return (
    <section id="parcours" aria-labelledby="parcours-title" className="scroll-mt-4 py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-5 xl:px-0">
        <SectionTitle id="parcours-title" className="max-w-[760px]">
          Du premier bilan au suivi de vos réglages.
        </SectionTitle>
        <ol className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <span className="block text-6xl leading-none font-bold text-brand" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="mt-10 text-[25px] leading-tight font-semibold tracking-tight text-navy">
                <span className="sr-only">{`Étape ${index + 1} : `}</span>
                {step.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
