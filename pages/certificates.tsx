import { useMemo } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { certificates } from '@/data/certificates';
import type { Certificate } from '@/data/certificates';
import styles from '@/styles/CertificatesPage.module.css';

// Fix: Remove SSR or handle loading state properly
const CertificateCard = dynamic(() => import('@/components/CertificateCard'), {
  loading: () => <div className={styles.cardSkeleton} />,
  ssr: false, // Changed from true to false to prevent hydration mismatch
});

const CertificatesPage: NextPage = () => {
  // Memoize certificate count to avoid recalculation
  const certificateCount = useMemo(() => {
    return certificates?.length || 0;
  }, []);
  
  // Fix: Use suppressHydrationWarning for dynamic content
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  // Handle case where certificates might not be loaded
  if (!certificates || certificates.length === 0) {
    return (
      <div className={styles.layout}>
        <div className={styles.pageHeading}>
          <h1 className={styles.pageTitle}>Certifications & Achievements</h1>
          <p>No certificates found.</p>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>Certifications & Achievements</title>
        <meta 
          name="description" 
          content="Professional certifications and courses completed to enhance skills in full-stack development, AI/ML technologies, and cloud computing." 
        />
      </Head>
      
      <div className={styles.layout}>
        <div className={styles.pageHeading}>
          <h1 className={styles.pageTitle}>Certifications & Achievements</h1>
          <p className={styles.pageSubtitle}>
            Professional certifications and courses completed to enhance my skills in 
            full-stack development, AI/ML technologies, and cloud computing. 
            These certifications validate my practical knowledge and commitment to continuous learning.
          </p>
        </div>

        <div className={styles.container}>
          {certificates.map((certificate: Certificate, index: number) => (
            <CertificateCard 
              key={certificate.credentialId || `cert-${index}`} 
              certificate={certificate} 
            />
          ))}
        </div>

        <div className={styles.statsSection}>
          <h2 className={styles.statsTitle}>Achievement Statistics</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{certificateCount}</h3>
              <p className={styles.statLabel}>Certifications Earned</p>
            </div>
            
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>5+</h3>
              <p className={styles.statLabel}>Learning Platforms</p>
            </div>
            
            <div className={styles.statCard}>
              {/* Fix: Add suppressHydrationWarning for dynamic content */}
              <h3 className={styles.statNumber} suppressHydrationWarning>
                {currentYear}
              </h3>
              <p className={styles.statLabel}>Most Recent Year</p>
            </div>
            
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>100%</h3>
              <p className={styles.statLabel}>Completion Rate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { 
      title: 'Certificates' 
    },
  };
}

export default CertificatesPage;
