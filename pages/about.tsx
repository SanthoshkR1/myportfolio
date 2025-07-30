import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ruhith Pasha</h1>
        <div className={styles.subtitle}>Full Stack Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from Mumbai, India. I primarily
              work with JavaScript / TypeScript and the React ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React, but
              you&apos;ll also find me working with Node.js, MongoDB and Express
              while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}><b>Garden City University</b>, Bengaluru</span> as
              Student, Pursuing Masters in Information Technology with a focus on Artificial Intelligence and Machine Learning
            </p>
            <p className={styles.paragraph}>
              I&apos;ve worked on many projects, to Learn and Explore the world of Web Development. which includes technologies like React, Node.js, MongoDB, Express and more.
              By creating an Web application named cloudSync which is a cloud storage application that allows users to store, share and manage their images securely in the cloud and This portfolio is one of my projects that showcases my skills and projects.
            </p>
          </section>

          {/* <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}>100ms Blog</span>,{' '}
              <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section> */}

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read a good
              dystopian novel, listen to calm piano music or just laze around.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
