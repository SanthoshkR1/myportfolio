export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  link?: string;
  logo: string;
}

export const certificates: Certificate[] = [
  {
    title: 'Python Scripting: Files, Inheritance, and Databases',
    issuer: 'Coursera',
    date: 'Dec 2024',
    description: ' Learn how to use Python to work with files, inherit from classes, and work with databases.',
    // credentialId: 'ABC123XYZ',
    link: 'https://coursera.org/verify/ZYIQMBFIH7FB',
    logo: '/logos/python.svg',
  },
  {
    title: 'Database Management Essentials',
    issuer: 'Coursera',
    date: 'Jan 2025',
    description: 'Learn how to manage and optimize databases for efficient data storage and retrieval.',
    // credentialId: 'AWS-CCP-2024-001',
    link: 'https://coursera.org/verify/14WJCW0HOY53',
    logo: '/logos/mysql.svg',
  },
  {
    title: 'Building AI Powered Chatbots Without Programming',
    issuer: 'Coursera',
    date: 'Oct 2024',
    description: 'Learn how to build AI-powered chatbots without any programming experience.',
    // credentialId: 'May 29 2025',
    link: 'https://coursera.org/verify/KGPDBV438VBT',
    logo: '/logos/openai.svg',
  },
  {
    title: 'Black-box and White-box Testing',
    issuer: 'Coursera',
    date: 'May 30 2025',
    description: 'Black-box and white-box testing techniques for software quality assurance.',
    // credentialId: 'IBM-DS-2024-001',
    link: 'https://coursera.org/verify/P3CPZHMV93J2',
    logo: '/logos/vscode_icon.svg',
  },
  {
    title: 'Machine Learning with Big Data',
    issuer: 'Coursera',
    date: 'Aug 2024',
    description: 'Learn how to leverage big data technologies for machine learning tasks.',
    // credentialId: 'FCC-JS-2024',
    link: 'https://coursera.org/verify/PX7A6TH4LUPG',
    logo: '/logos/tensorflow.svg',
  },
];
