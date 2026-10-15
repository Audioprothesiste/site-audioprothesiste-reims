'use client'

import { useState } from 'react'
import { EMAIL } from './cta-link'

const inputClass =
  'mt-2 block w-full rounded-lg border border-[#d2dde3] bg-white px-4 py-3 text-base text-navy placeholder:text-[#9aa6ab] focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const details = [`Nom : ${name}`, `E-mail : ${email}`]
    if (phone) details.push(`Téléphone : ${phone}`)
    const body = message ? `${details.join('\n')}\n\n${message}` : details.join('\n')

    const subject = `Demande de rendez-vous - ${name}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="rounded-sm bg-mist p-6 md:p-7">
      <h3 className="text-[25px] leading-tight font-semibold tracking-tight text-navy">
        Demander un rendez-vous
      </h3>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        <label className="text-lg text-navy">
          Nom et prénom *
          <input name="name" required autoComplete="name" placeholder="Votre nom" className={inputClass} />
        </label>
        <label className="text-lg text-navy">
          Adresse e-mail *
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@exemple.fr"
            className={inputClass}
          />
        </label>
        <label className="text-lg text-navy">
          Téléphone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Votre numéro"
            className={inputClass}
          />
        </label>
        <label className="text-lg text-navy">
          Votre demande
          <textarea
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="Indiquez vos disponibilités, sans information médicale sensible."
            className={`${inputClass} resize-y`}
          />
        </label>
        <p className="text-sm leading-relaxed text-ink">
          Les informations demandées servent à vous recontacter pour organiser votre rendez-vous.
          Ne transmettez pas de données médicales dans ce formulaire.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="inline-flex h-12 items-center rounded-sm bg-brand px-6 text-lg font-semibold text-navy transition-colors hover:bg-[#6cb2e3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Envoyer ma demande
          </button>
          <p role="status" className="text-sm text-ink">
            {sent ? 'Votre messagerie s’ouvre pour finaliser l’envoi.' : ''}
          </p>
        </div>
      </form>
    </div>
  )
}
