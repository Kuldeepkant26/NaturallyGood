import React from 'react'
import './CertificatesSection.css'
import isoLogo from '../../assets/certificate-iso-9001-golden-logo-png_seeklogo-614384 Background Removed.png'
import fssaiLogo from '../../assets/fssi-logo.jpg'

const certificates = [
  {
    src: isoLogo,
    alt: 'ISO 9001 certification logo',
    title: 'ISO 9001 Certified',
    subtitle: 'Quality management standards',
  },
  {
    src: fssaiLogo,
    alt: 'FSSAI certification logo',
    title: 'FSSAI Certified',
    subtitle: 'Food safety and hygiene compliance',
  },
]

function CertificatesSection() {
  return (
    <section className="certificates-section" aria-label="Our certifications">
      <div className="certificates-section__inner">
        <div className="certificates-section__text">
          <p className="certificates-section__eyebrow">Trusted standards</p>
          <h2>Certified for quality and food safety</h2>
          <p>
            We uphold rigorous quality and safety standards so every delivery is fresh,
            reliable, and worthy of your table.
          </p>
        </div>

        <div className="certificates-section__logos" role="list">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title} role="listitem">
              <img src={certificate.src} alt={certificate.alt} className="certificate-card__image" />
              <div className="certificate-card__content">
                <h3>{certificate.title}</h3>
                <p>{certificate.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection
