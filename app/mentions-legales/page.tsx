import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, LegalSection } from '@/components/site/legal-page'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from '@/components/site/cta-link'

export const metadata: Metadata = {
  title: 'Mentions légales | Audio Digital Conseil',
  description: 'Mentions légales du site Audio Digital Conseil, audioprothésiste à Reims (SARL AUDIRE).',
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p>
        {"Ce site a pour but de vous fournir des informations générales sur l'audition et sur les solutions existantes pour corriger une éventuelle baisse auditive. En aucun cas ces informations ne sauraient se substituer à un avis médical. Seule la consultation de votre médecin généraliste ou d'un médecin O.R.L. a valeur médicale. Les résultats obtenus lors des bilans auditifs proposés sont donnés à titre indicatif et ne présument pas de la qualité de votre audition."}
      </p>
      <p>Les caractéristiques des produits présentés sur ce site sont fournies par les fabricants.</p>

      <LegalSection title="Propriétaire et éditeur du site">
        <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-[max-content_1fr]">
          <dt className="font-semibold text-navy">Nom commercial</dt>
          <dd>Audio Digital Conseil</dd>
          <dt className="font-semibold text-navy">Raison sociale</dt>
          <dd>SARL AUDIRE</dd>
          <dt className="font-semibold text-navy">Forme juridique</dt>
          <dd>SARL, société à responsabilité limitée</dd>
          <dt className="font-semibold text-navy">Capital social</dt>
          <dd>7 622,45 euros</dd>
          <dt className="font-semibold text-navy">Siège social</dt>
          <dd>55 rue Chanzy, 51100 Reims</dd>
          <dt className="font-semibold text-navy">RCS</dt>
          <dd>397 989 401 RCS Reims</dd>
          <dt className="font-semibold text-navy">SIRET (siège)</dt>
          <dd>397 989 401 00013</dd>
          <dt className="font-semibold text-navy">TVA intracommunautaire</dt>
          <dd>FR65397989401</dd>
          <dt className="font-semibold text-navy">Directeur de la publication</dt>
          <dd>Hervé LEFEBVRE, gérant</dd>
          <dt className="font-semibold text-navy">Téléphone</dt>
          <dd>
            <a href={PHONE_HREF} className="text-navy underline underline-offset-4 hover:text-brand">
              {PHONE_DISPLAY}
            </a>
          </dd>
          <dt className="font-semibold text-navy">E-mail</dt>
          <dd>
            <a href={`mailto:${EMAIL}`} className="text-navy underline underline-offset-4 hover:text-brand">
              {EMAIL}
            </a>
          </dd>
        </dl>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>Hébergeur : Cloudflare, Inc.</p>
        <p>Adresse : 101 Townsend St, San Francisco, CA 94107, USA</p>
        <p>
          {'Site web : '}
          <a href="https://www.cloudflare.com" className="text-navy underline underline-offset-4 hover:text-brand">
            https://www.cloudflare.com
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Protection des données personnelles">
        <p>
          {"Le traitement de vos données personnelles est détaillé dans notre "}
          <Link href="/politique-de-confidentialite" className="text-navy underline underline-offset-4 hover:text-brand">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle et industrielle">
        <p>
          {"La SARL AUDIRE et, dans certains cas, ses partenaires sont propriétaires de l'intégralité des droits de propriété intellectuelle et industrielle relatifs au contenu de ce site (textes, images, logos, mise en page)."}
        </p>
        <h3 className="text-xl font-semibold text-navy">{"Droits d'auteur"}</h3>
        <p>
          {"Toute mention relative à l'existence de droits ne peut être supprimée. Toute reproduction, totale ou partielle, non autorisée constitue un acte de contrefaçon sanctionné par le Code de la propriété intellectuelle."}
        </p>
        <h3 className="text-xl font-semibold text-navy">Marques et logos</h3>
        <p>
          {"Les marques et logos présents sur ce site appartiennent à Audio Digital Conseil ou à leurs propriétaires respectifs (notamment les fabricants d'aides auditives). Toute représentation, reproduction ou diffusion sans autorisation expose son auteur aux sanctions prévues par le Code de la propriété intellectuelle."}
        </p>
      </LegalSection>

      <LegalSection title="Limitation de responsabilité">
        <p>
          {"Audio Digital Conseil ne saurait être tenue responsable d'un éventuel dysfonctionnement du site, ni du contenu des sites tiers accessibles par des liens depuis ce site."}
        </p>
        <p>
          {"Audio Digital Conseil ne peut être tenue responsable d'aucun dommage, perte ou nuisance subi par un tiers lors de l'accès au site, de son utilisation ou à la suite de celle-ci."}
        </p>
      </LegalSection>

      <LegalSection title="Dispositions générales">
        <p>La SARL AUDIRE se réserve le droit de modifier les présentes mentions légales à tout moment.</p>
        <p>
          {"Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents du ressort de Reims seront seuls compétents."}
        </p>
      </LegalSection>
    </LegalPage>
  )
}
