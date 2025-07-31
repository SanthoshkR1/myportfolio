import Image from 'next/image';
import Link from 'next/link';
import { VscLinkExternal, VscVerified } from 'react-icons/vsc';
import { memo, useMemo } from 'react';

import { Certificate } from '@/data/certificates';

import styles from '@/styles/CertificateCard.module.css';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = memo(({ certificate }: CertificateCardProps) => {
  // Memoize the credential display to avoid recalculation
  const credentialDisplay = useMemo(() => {
    return certificate.credentialId ? `ID: ${certificate.credentialId}` : null;
  }, [certificate.credentialId]);

  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <div className={styles.logoContainer}>
          <Image
            src={certificate.logo}
            alt={`${certificate.issuer} logo`}
            width={50}
            height={50}
            className={styles.logo}
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjMzMzIi8+Cjwvc3ZnPgo="
          />
        </div>
        <div className={styles.headerInfo}>
          <h3 className={styles.title}>{certificate.title}</h3>
          <div className={styles.issuer}>
            <VscVerified className={styles.verifiedIcon} aria-hidden="true" />
            {certificate.issuer}
          </div>
        </div>
      </header>

      <main className={styles.cardBody}>
        <p className={styles.description}>{certificate.description}</p>
        
        <footer className={styles.cardFooter}>
          <div className={styles.metadata}>
            <time className={styles.date} dateTime={certificate.date}>
              {certificate.date}
            </time>
            {credentialDisplay && (
              <span className={styles.credentialId} aria-label="Credential ID">
                {credentialDisplay}
              </span>
            )}
          </div>
          
          {certificate.link && (
            <Link 
              href={certificate.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.verifyLink}
              aria-label={`Verify ${certificate.title} certificate`}
            >
              Verify <VscLinkExternal aria-hidden="true" />
            </Link>
          )}
        </footer>
      </main>
    </article>
  );
});

CertificateCard.displayName = 'CertificateCard';

export default CertificateCard;
