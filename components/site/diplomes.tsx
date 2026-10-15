import { SectionTitle } from './section-title'

const DIPLOMES = [
  { year: '1997', title: 'D.E. Audioprothèse', school: 'Faculté de Pharmacie de Nancy' },
  {
    year: '2006',
    title: 'D.U. Audioprothèse implantée',
    school: 'Faculté de Médecine Pierre et Marie Curie, Paris VI',
  },
  {
    year: '2007',
    title: 'D.U. Audiologie audioprothétique approfondie',
    school: 'Faculté de Médecine Lyon 1',
  },
  {
    year: '2011',
    title: 'D.U. Audiophonologie de l’enfant',
    school: 'Faculté de Médecine Pierre et Marie Curie, Paris VI',
  },
  { year: '2013', title: 'D.U. Nuisances sonores', school: 'Faculté de Pharmacie de Nancy' },
]

export function Diplomes() {
  return (
    <section
      id="diplomes"
      aria-labelledby="diplomes-title"
      className="scroll-mt-4 bg-mist py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20 xl:px-0">
        <div>
          <SectionTitle id="diplomes-title">
            Hervé LEFEBVRE
            <br />
            Diplômé d’État, puis quatre diplômes universitaires.
          </SectionTitle>
          <p className="mt-8 text-lg leading-relaxed text-ink">
            Un espace dédié à 100 % à la correction auditive, pour les adultes comme pour les
            enfants.
          </p>
          <img
            src="/images/diplome.svg"
            alt="Diplôme d’État d’Audioprothésiste décerné à Hervé LEFEBVRE, Faculté de Pharmacie de Nancy, 1997"
            width={640}
            height={460}
            loading="lazy"
            className="mt-10 h-auto w-full max-w-[420px]"
          />
        </div>

        <ol className="self-start">
          {DIPLOMES.map((d) => (
            <li
              key={d.year}
              className="grid grid-cols-1 gap-4 border-t border-[#d2dde3] py-7 sm:grid-cols-[96px_1fr] md:grid-cols-[136px_1fr]"
            >
              <span className="text-4xl leading-none font-bold tracking-tight text-brand md:text-[46px]">
                {d.year}
              </span>
              <div>
                <h3 className="text-xl leading-tight font-semibold tracking-tight text-navy md:text-[25px]">
                  {d.title}
                </h3>
                <p className="mt-2 text-base text-ink md:text-lg">{d.school}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
