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
    title: 'Programming for everybody (Getting started with python)',
    issuer: 'Coursera',
    date: 'Dec 2024',
    description: ' Learn how to use Python to work with files, inherit from classes, and work with databases.',
    // credentialId: 'ABC123XYZ',
    link: 'https://coursera.org/share/69a62bebcc5609ba1338d3b7eaf904f3',
    logo: '/logos/python.svg',
  },
  {
    title: 'The Data Science Course : Complete Data Science Bootcamp 2025',
    issuer: 'Udemy',
    date: 'Aug 2025',
    description: 'This comprehensive course covers all aspects of data science, from data manipulation to machine learning.',
    // credentialId: 'AWS-CCP-2024-001',
    link: 'https://www.udemy.com/certificate/UC-4f306c13-6933-416c-897b-e5db75e5ac25/',
    logo: '/logos/mysql.svg',
  },
  {
    title: 'Database Management Essentials',
    issuer: 'Coursera',
    date: 'Oct 2024',
    description: 'Learn how to manage and optimize data for effective decision-making.',
    // credentialId: 'May 29 2025',
    link: 'https://coursera.org/share/a8d4bd28ab99d4ae1981bb67978fba25',
    logo: '/logos/openai.svg',
  },
  {
    title: 'Python Functions, Files and Dictionaries',
    issuer: 'Coursera',
    date: 'May 30 2025',
    description: 'Learn about functions, file handling, and dictionaries in Python.',
    // credentialId: 'IBM-DS-2024-001',
    link: 'https://coursera.org/share/2bf74ff59f3c063ed87cdac825232349',
    logo: '/logos/tensorflow.svg',
  },
  // {
  //   title: 'Machine Learning with Big Data',
  //   issuer: 'Coursera',
  //   date: 'Aug 2024',
  //   description: 'Learn how to leverage big data technologies for machine learning tasks.',
  //   // credentialId: 'FCC-JS-2024',
  //   link: 'https://coursera.org/verify/PX7A6TH4LUPG',
  //   logo: '/logos/tensorflow.svg',
  // },
];
