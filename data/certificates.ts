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
    description: 'Comprehensive ML course covering supervised/unsupervised learning and best practices.',
    credentialId: 'ABC123XYZ',
    link: 'https://coursera.org/verify/ZYIQMBFIH7FB',
    logo: '/logos/tensorflow.svg',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Nov 2024',
    description: 'AWS Cloud concepts, services, security, architecture, pricing, and support.',
    credentialId: 'AWS-CCP-2024-001',
    link: 'https://aws.amazon.com/verification',
    logo: '/logos/react_icon.svg',
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'Oct 2024',
    description: 'Advanced React development with hooks, context, Redux, and modern patterns.',
    credentialId: 'UC-REACT-2024',
    link: 'https://udemy.com/certificate/UC-REACT-2024',
    logo: '/logos/react_icon.svg',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: 'Sep 2024',
    description: 'Data analysis and ML using Python, Pandas, NumPy, and Scikit-learn.',
    credentialId: 'IBM-DS-2024-001',
    link: 'https://coursera.org/verify/IBM-DS-2024-001',
    logo: '/logos/python.svg',
  },
  {
    title: 'JavaScript Algorithms',
    issuer: 'FreeCodeCamp',
    date: 'Aug 2024',
    description: 'Data structures, algorithms, and problem-solving in JavaScript.',
    credentialId: 'FCC-JS-2024',
    link: 'https://freecodecamp.org/certification/FCC-JS-2024',
    logo: '/logos/js_icon.svg',
  },
];
