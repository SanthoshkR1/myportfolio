import ArticleCard from '@/components/ArticleCard';

import { Article } from '@/types';

import styles from '@/styles/ArticlesPage.module.css';

// Curated list of important articles
const favoriteArticles: Article[] = [
  {
    id: '1',
    title: 'Learn HTML & CSS - Complete Web Development Guide',
    description: 'Comprehensive free tutorial covering HTML, CSS, and responsive web design fundamentals. Perfect for beginners starting their web development journey.',
    cover_image: '/articles/freecodecamp-web.svg',
    url: 'https://www.freecodecamp.org/news/ultimate-tool-stack-for-indie-hackers/',
    page_views_count: 850000,
    public_reactions_count: 15200,
    comments_count: 2400,
  },
  {
    id: '2',
    title: 'Data Structures and Algorithms Complete Tutorial',
    description: 'In-depth guide to DSA concepts with code examples, practice problems, and interview preparation. Essential for any software developer.',
    cover_image: '/articles/geeksforgeeks-dsa.svg',
    url: 'https://www.geeksforgeeks.org/data-structures/',
    page_views_count: 1200000,
    public_reactions_count: 28500,
    comments_count: 5600,
  },
  {
    id: '3',
    title: 'JavaScript Guide - Complete Documentation',
    description: 'The official JavaScript guide from MDN Web Docs. Comprehensive coverage of JS fundamentals, advanced concepts, and best practices.',
    cover_image: '/articles/devto-closures.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    page_views_count: 2100000,
    public_reactions_count: 45000,
    comments_count: 1200,
  },
  {
    id: '4',
    title: 'CSS Grid Layout - W3Schools Tutorial',
    description: 'Complete CSS Grid tutorial with interactive examples and exercises. Learn modern layout techniques step by step.',
    cover_image: '/articles/css-tricks-grid.svg',
    url: 'https://www.w3schools.com/css/css_grid.asp',
    page_views_count: 1800000,
    public_reactions_count: 32000,
    comments_count: 3400,
  },
  {
    id: '5',
    title: 'React Official Documentation - Learn React',
    description: 'Official React documentation with tutorials, examples, and best practices. The definitive guide to learning React development.',
    cover_image: '/articles/react-docs.svg',
    url: 'https://react.dev/learn',
    page_views_count: 3200000,
    public_reactions_count: 78000,
    comments_count: 1800,
  },
  {
    id: '6',
    title: 'OWASP Top 10 Web Application Security Risks',
    description: 'Comprehensive guide to the most critical web application security risks. Learn about common vulnerabilities and how to prevent them in your applications.',
    cover_image: '/articles/cybersecurity-owasp.svg',
    url: 'https://owasp.org/www-project-top-ten/',
    page_views_count: 890000,
    public_reactions_count: 25600,
    comments_count: 1800,
  },
];

interface ArticlesPageProps {
  articles: Article[];
}

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Articles I Love</h1>
      <p className={styles.pageSubtitle}>
        A curated collection of articles, books, and resources that have significantly 
        influenced my approach to software development, system design, and problem-solving. 
        These pieces contain timeless wisdom that every developer should explore.
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
