import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from './cta-link'
import { ContactForm } from './contact-form'
import { SectionTitle } from './section-title'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_548px] lg:gap-16 xl:px-0">
        <div>
          <SectionTitle id="contact-title">Faisons le premier pas, ensemble.</SectionTitle>
          <p className="mt-8 max-w-[460px] text-lg leading-relaxed text-ink">
            Un bilan, un essai ou un réglage ? Contactez le cabinet pour convenir d’un rendez-vous.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-8 inline-block text-4xl font-bold tracking-tight text-navy transition-colors hover:text-brand"
          >
            {PHONE_DISPLAY}
          </a>
          <address className="mt-8 flex flex-col gap-5 text-lg text-ink not-italic">
            <p>Hervé LEFEBVRE - Audioprothésiste diplômé d’État</p>
            <p>55 rue Chanzy, 51100 Reims · Près de la Cathédrale</p>
            <a href={`mailto:${EMAIL}`} className="mt-2 text-navy hover:text-brand">
              {EMAIL}
            </a>
          </address>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
