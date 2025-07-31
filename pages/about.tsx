import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ruhith Pasha</h1>
        <div className={styles.subtitle}>Full Stack Developer & AI/ML Specialist</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a full-stack developer from India with a passion for integrating 
              AI and Machine Learning into web applications. I primarily work with JavaScript, 
              TypeScript, Python, and the React ecosystem to build intelligent solutions.
            </p>
            <p className={styles.paragraph}>
              My expertise spans both frontend and backend development, with a special focus on 
              implementing AI/ML models in real-world applications. I understand machine learning 
              algorithms, model training processes, and how to effectively integrate ML APIs and 
              frameworks into web applications.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education & Focus</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}><b>Garden City University</b>, Bengaluru</span> as
              Student, Pursuing Masters in Information Technology with a focus on Artificial Intelligence and Machine Learning.
              This academic background complements my practical development skills with AI/ML theory and implementation.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve worked on numerous projects combining web development with AI/ML integration, including 
              <span className={styles.highlight}> cloudSync</span> - a cloud storage application with intelligent 
              features, and various ML-powered web applications that demonstrate practical AI implementation.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Expertise</h2>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Frontend:</span> Building responsive, 
              interactive UIs with React, Next.js, and TypeScript that seamlessly integrate 
              AI-powered features and real-time ML predictions.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Backend:</span> Developing robust APIs 
              with Node.js, Express, and Python that handle ML model inference, data 
              processing, and serve intelligent applications at scale.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>AI/ML Integration:</span> Practical 
              implementation of machine learning models using TensorFlow, PyTorch, and 
              scikit-learn. Focus on algorithm understanding, model training, testing, 
              evaluation, and deployment rather than deep mathematical theory.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              When I&apos;m not coding or working with ML models, I enjoy exploring new AI technologies, 
              reading about emerging trends in machine learning, and experimenting with different frameworks. 
              I also like to read, listen to music, and continuously learn about the evolving landscape of AI/ML.
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
