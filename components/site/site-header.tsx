import Image from 'next/image'
import { CtaLink } from './cta-link'

const NAV = [
  { href: '#parcours', label: 'Votre parcours' },
  { href: '#prise-en-charge', label: 'Prise en charge' },
  { href: '#diplomes', label: 'Diplômes' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#sante', label: '100 % Santé' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_10px_30px_-8px_rgba(15,40,60,0.28)]">
      <div className="mx-auto flex max-w-[1440px] flex-row items-center justify-between gap-3 px-4 py-2 md:px-6 md:py-3 lg:px-10 xl:h-32 xl:gap-6 xl:py-0">
        <a href="./" aria-label="Audio Digital Conseil, accueil" className="shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Audio Digital Conseil"
            width={260}
            height={96}
            priority
            className="h-auto w-[110px] sm:w-[140px] md:w-[120px] lg:w-[170px] xl:w-[260px]"
          />
        </a>
        <nav
          aria-label="Navigation principale"
          className="flex items-center gap-3 lg:gap-6"
        >
          <ul className="hidden items-center gap-3 md:flex lg:gap-5 xl:gap-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="whitespace-nowrap text-[13px] text-navy transition-colors hover:text-brand lg:text-[15px] xl:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaLink href="#contact" className="h-10 whitespace-nowrap px-3 text-[13px] sm:px-5 sm:text-base md:px-3 md:text-[13px] lg:h-[46px] lg:px-5 lg:text-base xl:h-[50px] xl:px-6 xl:text-lg">
            Prendre rendez-vous
          </CtaLink>
        </nav>
      </div>
    </header>
  )
}
