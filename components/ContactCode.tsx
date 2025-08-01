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
    href: 'https://www.linkedin.com/in/ruhith-pasha-8a3625245?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFrAfDqUsSkqctu7FvjPIDQ%3D%3D',
  },
  {
    social: 'instagram',
    link: 'ruhithpasha',
    href: 'https://www.instagram.com/_ruhith_pasha_/',
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
