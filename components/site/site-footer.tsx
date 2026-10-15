import Image from 'next/image'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d2dde3]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-4">
          <Image
            src="/images/caducee.png"
            alt=""
            width={48}
            height={65}
            className="h-[65px] w-12"
          />
          <p className="text-xl font-semibold text-navy">Audio Digital Conseil</p>
        </div>
        <p className="text-lg text-ink">Audioprothésiste · 55 rue Chanzy, 51100 Reims</p>
        <a
          href="https://audioprothesiste-reims.fr"
          className="text-lg text-navy transition-colors hover:text-brand"
        >
          audioprothesiste-reims.fr
        </a>
      </div>
      <div className="border-t border-[#d2dde3]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 text-sm text-ink md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 SARL AUDIRE — Audio Digital Conseil. Tous droits réservés.</p>
          <nav aria-label="Informations légales">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link href="/mentions-legales" className="text-navy underline-offset-4 hover:text-brand hover:underline">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="text-navy underline-offset-4 hover:text-brand hover:underline"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
