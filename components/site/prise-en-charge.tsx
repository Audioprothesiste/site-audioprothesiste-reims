import Image from 'next/image'

export function PriseEnCharge() {
  return (
    <section
      id="prise-en-charge"
      aria-label="Prise en charge"
      className="scroll-mt-4 pb-20 md:pb-28"
    >
      <div className="mx-auto max-w-[1120px] px-5 xl:px-0">
        <div className="grid gap-10 border-l-4 border-navy bg-mist p-8 md:grid-cols-2 md:gap-14 md:p-12">
          <div>
            <h3 className="text-2xl leading-tight font-semibold tracking-tight text-navy md:text-[28px]">
              Les démarches, on s’en occupe
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Audio Digital Conseil réalise toutes les démarches de tiers payant avec la sécurité
              sociale et votre mutuelle.
            </p>
            <Image
              src="/images/tiers-payant.jpg"
              alt="Carte de tiers payant"
              width={685}
              height={600}
              className="mt-6 h-auto w-full max-w-[180px] mix-blend-multiply"
            />
          </div>
          <div>
            <h3 className="text-2xl leading-tight font-semibold tracking-tight text-navy md:text-[28px]">
              Le 100 % Santé
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Avec une complémentaire santé responsable, le panier 100 % Santé est pris en charge
              intégralement par l’Assurance Maladie et la mutuelle. Votre audioprothésiste fait la
              simulation auprès de votre organisme.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
