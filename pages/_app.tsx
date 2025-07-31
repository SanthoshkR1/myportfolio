import { useEffect, useCallback } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import '@/styles/globals.css';
import '@/styles/themes.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Optimize theme loading
  const loadTheme = useCallback(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  // Preload critical routes
  useEffect(() => {
    router.prefetch('/');
    router.prefetch('/about');
    router.prefetch('/projects');
  }, [router]);

  return (
    <Layout>
      <Head title={`Ruhith Pasha | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
