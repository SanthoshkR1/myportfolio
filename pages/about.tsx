import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Santhosh K R</h1>
        <div className={styles.subtitle}>Data Analyst</div>

          <div className={styles.aboutContent}>
            <section className={styles.section}>
              <p className={styles.paragraph}>
                Hello! I&apos;m a data analyst from India with a strong foundation in data analysis and visualization. My main tools are SQL, Excel, Python and PowerBI which I use to extract insights and create clear, informative dashboards.
              </p>
              <p className={styles.paragraph}>
                I have basic knowledge of artificial intelligence concepts and am interested in how AI can enhance data analysis. I am familiar with simple machine learning techniques and enjoy learning how automation and predictive analytics can add value to business decisions.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Education & Focus</h2>
              <p className={styles.paragraph}>
                Currently studying at <span className={styles.highlight}><b>Garden City University</b>, Bengaluru</span>, pursuing a Masters in Information Technology. My coursework includes the basics of artificial intelligence and machine learning, which I apply to practical data analysis tasks.
              </p>
              <p className={styles.paragraph}>
                I&apos;ve worked on projects that combine data analytics with introductory AI concepts, such as simple classification and regression models, and I am keen to expand my skills further in this area.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Technical Expertise</h2>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Data Analysis:</span> Skilled in using SQL, Excel, PowerBI and basic Python for data cleaning, visualization, and reporting.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>AI Basics:</span> Understanding of fundamental machine learning concepts such as supervised and unsupervised learning, and experience with simple models using libraries like scikit-learn.
              </p>
              <p className={styles.paragraph}>
                <span className={styles.highlight}>Tools:</span> Experience with data visualization tools and Python scripting for automating repetitive tasks and analyzing datasets.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
              <p className={styles.paragraph}>
                Outside of work, I enjoy exploring new trends in data analytics and AI, reading about technology, and learning new skills to stay updated in the field. I also like music, reading, and connecting with others who share an interest in data and technology.
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
