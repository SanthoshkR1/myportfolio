import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Ruhith Pasha is a full-stack web developer with expertise in AI/ML integration. Specializing in building intelligent web applications using modern frameworks and machine learning APIs."
      />
      <meta
        name="keywords"
        content="ruhith pasha, ruhith, pasha, full stack developer, ai ml developer, machine learning integration, web developer portfolio, react developer, nextjs developer, python developer, tensorflow pytorch, ai web applications, ruhith pasha portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Ruhith Pasha - Full Stack Developer & AI/ML Specialist" />
      <meta
        property="og:description"
        content="Full-stack developer specializing in AI/ML integration and intelligent web applications. Expert in React, Node.js, Python, and machine learning frameworks."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Santhosh K R - Data Analyst',
};
