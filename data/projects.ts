export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
   {
    title: 'CloudSync',
    description:
      'Image management system with dual storage - uploads to Cloudinary with local backup storage to ensure data integrity and prevent image loss.',
    logo: '/logos/react_icon.svg',
    link: 'https://cloudapp-frontend-kohl.vercel.app/',
    slug: 'cloudsync',
  },
  {
    title: 'Employee Management System',
    description:
      'Modern employee management application built with React and Vite. ',
    logo: '/logos/react_icon.svg',
    link: 'https://ruhithems.vercel.app/',
    slug: 'employee-management-system',
  },
  {
    title: 'AI-Powered Content Platform',
    description:
      'Full-stack web application with AI integration for intelligent content generation and analysis.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/ruhithpasha/ai-content-platform',
    slug: 'ai-content-platform',
  },
  {
    title: 'ML Model Deployment Dashboard',
    description:
      'React-based dashboard for deploying and monitoring machine learning models with real-time analytics.',
    logo: '/logos/tensorflow.svg',
    link: 'https://github.com/ruhithpasha/ml-dashboard',
    slug: 'ml-dashboard',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio showcasing full-stack and AI/ML expertise.',
    logo: '/logos/vsc.svg',
    link: 'https://portfolioruhith.vercel.app/',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Smart Data Analytics Tool',
    description:
      'Python-powered web app for data analysis with integrated ML algorithms and visualization.',
    logo: '/logos/python.svg',
    link: 'https://github.com/ruhithpasha/smart-analytics',
    slug: 'smart-analytics',
  },
];
