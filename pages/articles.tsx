import ArticleCard from '@/components/ArticleCard';

import { Article } from '@/types';

import styles from '@/styles/ArticlesPage.module.css';

// Curated list of important articles
const favoriteArticles: Article[] = [
  {
    id: '1',
    title: 'Article on data analysis by simplilearn',
    description: 'Comprehensive guide covering data analysis methods, processes, and types. Perfect introduction to fundamental data analysis concepts and practical implementation techniques.',
    cover_image: '/articles/database-design.svg',
    url: 'https://www.simplilearn.com/data-analysis-methods-process-types-article',
    page_views_count: 850000,
    public_reactions_count: 15200,
    comments_count: 2400,
  },
  {
    id: '2',
    title: 'An Overview of the Fundamentals of Data Management, Analysis, and Interpretation in Quantitative Research',
    description: 'In-depth academic paper exploring data management fundamentals, statistical analysis techniques, and proper interpretation methods in quantitative research methodologies.',
    cover_image: '/articles/ml-yearning.svg',
    url: 'https://www.sciencedirect.com/science/article/pii/S0749208123000293',
    page_views_count: 1200000,
    public_reactions_count: 28500,
    comments_count: 5600,
  },
  {
    id: '3',
    title: 'Top Research Papers on Data Analytics',
    description: 'Curated collection of influential research papers in data analytics. Comprehensive resource covering cutting-edge methodologies, algorithms, and applications in the field.',
    cover_image: '/articles/clean-architecture.svg',
    url: 'https://paperguide.ai/papers/top/research-papers-data-analytics/',
    page_views_count: 2100000,
    public_reactions_count: 45000,
    comments_count: 1200,
  },
  // {
  //   id: '4',
  //   title: 'CSS Grid Layout - W3Schools Tutorial',
  //   description: 'Complete CSS Grid tutorial with interactive examples and exercises. Learn modern layout techniques step by step.',
  //   cover_image: '/articles/css-tricks-grid.svg',
  //   url: 'https://www.w3schools.com/css/css_grid.asp',
  //   page_views_count: 1800000,
  //   public_reactions_count: 32000,
  //   comments_count: 3400,
  // },
  // {
  //   id: '5',
  //   title: 'React Official Documentation - Learn React',
  //   description: 'Official React documentation with tutorials, examples, and best practices. The definitive guide to learning React development.',
  //   cover_image: '/articles/react-docs.svg',
  //   url: 'https://react.dev/learn',
  //   page_views_count: 3200000,
  //   public_reactions_count: 78000,
  //   comments_count: 1800,
  // },
  // {
  //   id: '6',
  //   title: 'OWASP Top 10 Web Application Security Risks',
  //   description: 'Comprehensive guide to the most critical web application security risks. Learn about common vulnerabilities and how to prevent them in your applications.',
  //   cover_image: '/articles/cybersecurity-owasp.svg',
  //   url: 'https://owasp.org/www-project-top-ten/',
  //   page_views_count: 890000,
  //   public_reactions_count: 25600,
  //   comments_count: 1800,
  // },
];

interface ArticlesPageProps {
  articles: Article[];
}

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Articles I Love</h1>
      <p className={styles.pageSubtitle}>
        A curated collection of articles, research papers, and resources that have significantly 
        influenced my approach to data analysis, statistical methods, and analytical problem-solving. 
        These pieces contain valuable insights that every data analyst should explore.
      </p>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Articles', articles: favoriteArticles },
    revalidate: false, // Static content, no need to revalidate
  };
}

export default ArticlesPage;
