export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
   {
    title: 'Data Analysis for Zepto E-Commerce Inventory-SQL',
    description:
      'Developed a comprehensive data analysis solution for Zepto\'s e-commerce inventory using SQL, enabling efficient data retrieval and insights generation.',
    logo: '/logos/mysql.svg',
    link: 'https://cloudapp-frontend-kohl.vercel.app/',
    slug: 'cloudsync',
  },

  {
    title: 'Sales Dashboard - Excel',
    description:
      'Interactive sales dashboard created in Excel, featuring data visualization and analysis tools to drive business insights.',
    logo: '/logos/pandas.svg',
    link: 'https://github.com/ruhithpasha/ai-content-platform',
    slug: 'ai-content-platform',
  },
  {
    title: 'HR Analytics PowerBI Dashboard',
    description:
      'Power BI dashboard for HR analytics, providing insights into employee performance and engagement.',
    logo: '/logos/powerbi.svg',
    link: 'https://github.com/ruhithpasha/hr-analytics-dashboard',
    slug: 'hr-analytics-dashboard',
  },
  {
    title: 'AI Chatbot built using Streamlit',
    description:
      'An AI chatbot application built using Streamlit, showcasing natural language processing capabilities.',
    logo: '/logos/streamlit.svg',
    link: 'https://github.com/ruhithpasha/ai-chatbot',
    slug: 'ai-chatbot',
  },
  {
    title: 'Vendor Performance Analysis - Sql , Python, PowerBI',
    description:
      'Python-powered web app for data analysis with integrated ML algorithms and visualization.',
    logo: '/logos/python.svg',
    link: 'https://github.com/ruhithpasha/smart-analytics',
    slug: 'vendor-performance-analysis',
  },
];
