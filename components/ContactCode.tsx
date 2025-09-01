import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'portfolioruhith.vercel.app', 
    href: 'https://portfolioruhith.vercel.app',
  },
  {
    social: 'email',
    link: 'santhoshkr366@gmail.com',
    href: 'mailto:santhoshkr366@gmail.com',
  },
  {
    social: 'github',
    link: 'Santhosh K R',
    href: 'https://github.com/SanthoshkR1',
  },
  {
    social: 'linkedin',
    link: 'Santhosh K R',
    href: 'https://www.linkedin.com/in/santhosh-k-r-aa1426277/',
  },
  {
    social: 'instagram',
    link: 'Santhosh K R',
    href: 'https://www.instagram.com/_._santhosh_._shetty/',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
