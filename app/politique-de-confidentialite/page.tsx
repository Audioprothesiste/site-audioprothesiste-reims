import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/site/legal-page'
import { EMAIL } from '@/components/site/cta-link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Audio Digital Conseil',
  description: 'Politique de protection des données personnelles du site Audio Digital Conseil, audioprothésiste à Reims.',
}

const linkClass = 'text-navy underline underline-offset-4 hover:text-brand'

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        {"Pour Audio Digital Conseil (SARL AUDIRE), la confiance est la base d'une relation durable avec chacun de nos patients. Nous veillons à ce que les données personnelles que vous nous confiez soient traitées avec soin, conformément au Règlement Général sur la Protection des Données (RGPD) entré en vigueur le 25 mai 2018 et à la loi Informatique et Libertés."}
      </p>

      <LegalSection title="Responsable du traitement">
        <p>
          SARL AUDIRE — Audio Digital Conseil, 55 rue Chanzy, 51100 Reims, représentée par Hervé LEFEBVRE, gérant.
          Contact :{' '}
          <a href={`mailto:${EMAIL}`} className={linkClass}>
            {EMAIL}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Données collectées et finalités">
        <p>
          {"Lorsque vous utilisez le formulaire de contact ou nous appelez, nous collectons uniquement les données nécessaires pour répondre à votre demande : nom, prénom, numéro de téléphone, adresse e-mail et contenu de votre message."}
        </p>
        <p>
          {"Ces données sont utilisées pour vous recontacter, organiser votre rendez-vous et assurer votre suivi. Elles ne sont ni vendues, ni cédées à des tiers à des fins commerciales."}
        </p>
        <p>
          {"Les données de santé recueillies au centre (bilan auditif, prescription, appareillage) sont traitées dans le respect du secret professionnel et uniquement pour votre prise en charge, y compris auprès de l'Assurance Maladie et de votre complémentaire santé dans le cadre du tiers payant."}
        </p>
      </LegalSection>

      <LegalSection title="Base légale et durée de conservation">
        <p>
          {"Le traitement repose sur votre consentement (formulaire de contact), sur l'exécution de la prestation demandée et sur nos obligations légales. Les données de contact sont conservées au maximum 3 ans après le dernier échange ; les dossiers patients sont conservés selon les durées prévues par la réglementation applicable aux professionnels de santé."}
        </p>
      </LegalSection>

      <LegalSection title="Cookies et services tiers">
        <p>
          {"Ce site n'utilise pas de cookies publicitaires. La carte d'accès intégrée est fournie par Google Maps, qui peut déposer ses propres cookies lors de son affichage ; ceux-ci sont régis par la "}
          <a href="https://policies.google.com/privacy?hl=fr" className={linkClass} target="_blank" rel="noopener noreferrer">
            politique de confidentialité de Google
          </a>
          .
        </p>
        <p>
          {"Vous pouvez refuser ou supprimer les cookies à tout moment en paramétrant votre navigateur, sans que cela n'affecte votre navigation sur le site."}
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          {"Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour exercer ces droits, écrivez-nous à "}
          <a href={`mailto:${EMAIL}`} className={linkClass}>
            {EMAIL}
          </a>
          {" ou par courrier au 55 rue Chanzy, 51100 Reims, en joignant un justificatif d'identité."}
        </p>
        <p>
          {"Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL ("}
          <a href="https://www.cnil.fr" className={linkClass} target="_blank" rel="noopener noreferrer">
            cnil.fr
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection title="Modification de la politique">
        <p>
          {"Audio Digital Conseil se réserve le droit de modifier la présente politique de confidentialité. Dernière mise à jour : octobre 2026."}
        </p>
      </LegalSection>
    </LegalPage>
  )
}
