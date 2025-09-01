import Image from 'next/image';
import { 
  VscCode, 
  VscDatabase, 
  VscGlobe, 
  VscTools, 
  VscCloud,
  VscBrowser,
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
  // Core Programming & Data Analysis
  { name: 'Python', icon: '/logos/python.svg', level: 85, category: 'Programming' },
  { name: 'SQL', icon: '/logos/mysql.svg', level: 90, category: 'Database' },
  
  // Data Analysis & Visualization Tools
  { name: 'Power BI', icon: '/logos/powerbi.svg', level: 80, category: 'Visualization' },
  { name: 'Excel', icon: '/logos/pandas.svg', level: 85, category: 'Visualization' },
  { name: 'Matplotlib', icon: '/logos/python.svg', level: 85, category: 'Visualization' },
  { name: 'Seaborn', icon: '/logos/python.svg', level: 80, category: 'Visualization' },
  
  // Version Control & Collaboration
  { name: 'Git', icon: '/logos/git.svg', level: 85, category: 'Tools' },
  { name: 'GitHub', icon: '/logos/git.svg', level: 85, category: 'Tools' },
  
  // AI & Machine Learning Libraries
  { name: 'Pandas', icon: '/logos/pandas.svg', level: 90, category: 'AI/ML' },
  { name: 'NumPy', icon: '/logos/numpy.svg', level: 90, category: 'AI/ML' },
  { name: 'Jupyter', icon: '/logos/jupyter.svg', level: 85, category: 'AI/ML' },
  { name: 'Scikit-learn', icon: '/logos/sklearn.svg', level: 80, category: 'AI/ML' },
  { name: 'PyTorch', icon: '/logos/pytorch.svg', level: 70, category: 'AI/ML' },
  { name: 'Machine Learning Algorithms', icon: '/logos/sklearn.svg', level: 75, category: 'AI/ML' },
  
  // Cloud & Statistics
  { name: 'AWS (Basic)', icon: '/logos/aws.svg', level: 65, category: 'Cloud' },
  { name: 'Statistics', icon: '/logos/python.svg', level: 75, category: 'Analytics' },
  { name: 'Data Visualization tools', icon: '/logos/python.svg', level: 85, category: 'Analytics' },
  { name: 'Exploratory Data Analysis', icon: '/logos/pandas.svg', level: 85, category: 'Analytics' },
  { name: 'Data Cleaning & Preparation', icon: '/logos/pandas.svg', level: 90, category: 'Analytics' },
];

const categories = ['Programming', 'Database', 'Visualization', 'Tools', 'AI/ML', 'Cloud', 'Analytics'];

const categoryIcons = {
  Programming: VscCode,
  Database: VscDatabase,
  Visualization: VscBrowser,
  Tools: VscTools,
  'AI/ML': VscRocket,
  Cloud: VscCloud,
  Analytics: VscGlobe,
};

const SkillsPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>Data Analysis & AI Skills</h1>
        <p className={styles.pageSubtitle}>
          A comprehensive overview of my technical skills in data analysis, 
          visualization, and basic AI/ML implementation. Focused on extracting 
          insights from data using modern tools and statistical methods.
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
          <h3>Continuous Learning</h3>
          <p>
            I&apos;m constantly exploring new data analysis techniques and improving my skills.
            Currently expanding my knowledge in advanced statistical methods and machine learning algorithms.
          </p>
        </div>
        
        <div className={styles.infoCard}>
          <VscGlobe className={styles.infoIcon} />
          <h3>Data Analysis Focus</h3>
          <p>
            Experienced in extracting insights from data using SQL, Python, and visualization tools.
            I specialize in transforming raw data into actionable business intelligence and clear reports.
          </p>
        </div>
        
        <div className={styles.infoCard}>
          <VscRocket className={styles.infoIcon} />
          <h3>AI & Statistics</h3>
          <p>
            Basic knowledge of machine learning algorithms and statistical methods.
            Focus on understanding practical applications of AI in data analysis and predictive modeling.
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
