import Image from 'next/image';
import { 
  VscCode, 
  VscDatabase, 
  VscGlobe, 
  VscTools, 
  VscCloud,
  VscBrowser,
  VscServer,
  VscRocket
} from 'react-icons/vsc';

import styles from '@/styles/SkillsPage.module.css';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', icon: '/logos/js_icon.svg', level: 90, category: 'Frontend' },
  { name: 'TypeScript', icon: '/logos/typescript.svg', level: 85, category: 'Frontend' },
  { name: 'React', icon: '/logos/react_icon.svg', level: 90, category: 'Frontend' },
  { name: 'Next.js', icon: '/logos/nextjs.svg', level: 85, category: 'Frontend' },
  { name: 'HTML5', icon: '/logos/html_icon.svg', level: 95, category: 'Frontend' },
  { name: 'CSS3', icon: '/logos/css_icon.svg', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '/logos/tailwind.svg', level: 80, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: '/logos/nodejs.svg', level: 85, category: 'Backend' },
  { name: 'Express.js', icon: '/logos/express.svg', level: 80, category: 'Backend' },
  { name: 'Python', icon: '/logos/python.svg', level: 75, category: 'Backend' },
  
  
  // Database
  { name: 'MongoDB', icon: '/logos/mongodb.svg', level: 80, category: 'Database' },
  { name: 'MySQL', icon: '/logos/mysql.svg', level: 75, category: 'Database' },
  // { name: 'PostgreSQL', icon: '/logos/postgresql.svg', level: 70, category: 'Database' },
  
  // Tools & Others
  { name: 'Git', icon: '/logos/git.svg', level: 85, category: 'Tools' },
  // { name: 'Docker', icon: '/logos/docker.svg', level: 65, category: 'Tools' },
  // { name: 'AWS', icon: '/logos/aws.svg', level: 60, category: 'Cloud' },
  { name: 'Vercel', icon: '/logos/vercel.svg', level: 80, category: 'Cloud' },
  
  // AI & Machine Learning
  { name: 'Python (AI/ML)', icon: '/logos/python.svg', level: 85, category: 'AI/ML' },
  { name: 'TensorFlow', icon: '/logos/tensorflow.svg', level: 80, category: 'AI/ML' },
  { name: 'PyTorch', icon: '/logos/pytorch.svg', level: 75, category: 'AI/ML' },
  { name: 'Scikit-learn', icon: '/logos/sklearn.svg', level: 85, category: 'AI/ML' },
  { name: 'Pandas', icon: '/logos/pandas.svg', level: 90, category: 'AI/ML' },
  { name: 'NumPy', icon: '/logos/numpy.svg', level: 90, category: 'AI/ML' },
  { name: 'OpenAI API', icon: '/logos/openai.svg', level: 80, category: 'AI/ML' },
  { name: 'Jupyter', icon: '/logos/jupyter.svg', level: 85, category: 'AI/ML' },
];

const categories = ['Frontend', 'Backend', 'Database', 'AI/ML', 'Tools', 'Cloud'];

const categoryIcons = {
  Frontend: VscBrowser,
  Backend: VscServer,
  Database: VscDatabase,
  'AI/ML': VscRocket,
  Tools: VscTools,
  Cloud: VscCloud,
};

const SkillsPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>Technical Skills & AI/ML Expertise</h1>
        <p className={styles.pageSubtitle}>
          A comprehensive overview of my technical skills in full-stack development 
          and practical AI/ML implementation. Focused on building intelligent web 
          applications with modern technologies and machine learning integration.
        </p>
      </div>

      <div className={styles.skillsContainer}>
        {categories.map((category) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
          
          return (
            <div key={category} className={styles.categorySection}>
              <div className={styles.categoryHeader}>
                <CategoryIcon className={styles.categoryIcon} />
                <h2 className={styles.categoryTitle}>{category}</h2>
              </div>
              
              <div className={styles.skillsGrid}>
                {categorySkills.map((skill) => (
                  <div key={skill.name} className={styles.skillCard}>
                    <div className={styles.skillHeader}>
                      <div className={styles.skillIcon}>
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className={styles.skillInfo}>
                        <h3 className={styles.skillName}>{skill.name}</h3>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className={styles.progressContainer}>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.additionalInfo}>
        <div className={styles.infoCard}>
          <VscCode className={styles.infoIcon} />
          <h3>Always Learning</h3>
          <p>
            I&apos;m constantly exploring new technologies and improving my skills.
            Currently diving deeper into advanced AI/ML techniques, MLOps, and modern deployment strategies.
          </p>
        </div>
        
        <div className={styles.infoCard}>
          <VscGlobe className={styles.infoIcon} />
          <h3>Full Stack + AI Focus</h3>
          <p>
            Experienced in both frontend and backend development, with practical expertise in AI/ML integration.
            I build intelligent web applications that leverage machine learning for enhanced user experiences.
          </p>
        </div>
        
        <div className={styles.infoCard}>
          <VscRocket className={styles.infoIcon} />
          <h3>AI & Machine Learning</h3>
          <p>
            Practical experience with ML algorithms, model training/testing, and AI integration in web apps.
            Focus on understanding how algorithms work rather than mathematical theory, with hands-on implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Skills' },
  };
}

export default SkillsPage;
