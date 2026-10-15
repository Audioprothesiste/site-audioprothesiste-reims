import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { SiteFooter } from './site-footer'

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-[#d2dde3] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="Audio Digital Conseil, retour à l'accueil">
            <Image src="/images/caducee.png" alt="" width={36} height={49} className="h-[49px] w-9" />
            <span className="text-lg font-semibold text-navy">Audio Digital Conseil</span>
          </Link>
          <Link href="/" className="text-base text-navy underline-offset-4 transition-colors hover:text-brand hover:underline">
            {"← Retour à l'accueil"}
          </Link>
        </div>
      </header>
      <main id="main" className="bg-white">
        <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <h1 className="text-balance text-4xl font-bold text-navy md:text-5xl">{title}</h1>
          <div className="mt-10 flex flex-col gap-10 text-lg leading-relaxed text-ink">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-navy">{title}</h2>
      {children}
    </section>
  )
}
