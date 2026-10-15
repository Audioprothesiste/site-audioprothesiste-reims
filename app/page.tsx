import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { Parcours } from '@/components/site/parcours'
import { PriseEnCharge } from '@/components/site/prise-en-charge'
import { PlanAcces } from '@/components/site/plan-acces'
import { Diplomes } from '@/components/site/diplomes'
import { Solutions } from '@/components/site/solutions'
import { Sante } from '@/components/site/sante'
import { Testimonials } from '@/components/site/testimonials'
import { Contact } from '@/components/site/contact'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Parcours />
        <PriseEnCharge />
        <Diplomes />
        <Solutions />
        <Sante />
        <Testimonials />
        <Contact />
        <PlanAcces />
      </main>
      <SiteFooter />
    </>
  )
}
