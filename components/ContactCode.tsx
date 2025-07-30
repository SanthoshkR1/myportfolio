import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'portfolioruhith.vercel.app',
    href: 'https://portfolioruhith.vercel.app',
  },
  {
    social: 'email',
    link: 'pro.ruhithpasha@gmail.com',
    href: 'mailto:pro.ruhithpasha@gmail.com',
  },
  {
    social: 'github',
    link: 'ruhithpasha',
    href: 'https://github.com/ruhithpasha',
  },
  {
    social: 'linkedin',
    link: 'ruhithpasha',
    href: 'https://www.linkedin.com/in/ruhithpasha/',
  },
  {
    social: 'twitter',
    link: 'iamruhithpasha',
    href: 'https://www.twitter.com/iamruhithpasha',
  },
  {
    social: 'telegram',
    link: 'iamruhithpasha',
    href: 'https://t.me/iamruhithpasha',
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
