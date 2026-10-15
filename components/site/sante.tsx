import Image from 'next/image'
import { SectionTitle } from './section-title'

export function Sante() {
  return (
    <section id="sante" aria-labelledby="sante-title" className="scroll-mt-4 bg-mist py-20 md:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 md:grid-cols-2 md:gap-16 xl:px-0">
        <div>
          <SectionTitle id="sante-title">Bien entendre, sans reste à charge.*</SectionTitle>
          <Image
            src="/images/sante.png"
            alt="Appareils auditifs et dispositif 100 % Santé"
            width={400}
            height={300}
            className="mt-6 h-auto w-full max-w-[400px]"
          />
        </div>
        <div className="md:pt-2">
          <p className="text-lg leading-relaxed text-ink">
            Le dispositif 100 % Santé donne accès à des aides auditives de classe I intégralement
            prises en charge par l’Assurance Maladie et une complémentaire santé responsable. Nous
            vous expliquons les options et vous accompagnons dans vos démarches.
          </p>
          <p className="mt-8 text-sm leading-relaxed text-ink">
            * Sous réserve d’éligibilité, de prescription médicale et des conditions de
            remboursement en vigueur. Un devis normalisé vous est remis avant tout engagement.
          </p>
        </div>
      </div>
    </section>
  )
}
