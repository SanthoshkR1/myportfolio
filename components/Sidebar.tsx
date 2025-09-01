import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
  VscEdit,
  VscRocket,
  VscCloudDownload,
  VscMortarBoard,
} from 'react-icons/vsc';

import styles from '@/styles/Sidebar.module.css';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/' },
  { Icon: VscGithubAlt, path: '/github' },
  { Icon: VscCode, path: '/projects' },
  { Icon: VscEdit, path: '/articles' },
  { Icon: VscMail, path: '/contact' },
  { Icon: VscRocket, path: '/skills' },
  { Icon: VscMortarBoard, path: '/certificates' },
  { Icon: VscCloudDownload, path: '#', action: 'download-resume' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/about' },
  { Icon: VscSettings, path: '/settings' },
];

const Sidebar = () => {
  const router = useRouter();

  const handleResumeDownload = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Use a more efficient download method
    const link = document.createElement('a');
    link.href = '/santoshresume.pdf';
    link.download = 'santoshresume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Append to body temporarily for cross-browser compatibility
    document.body.appendChild(link);
    link.click();
    
    // Clean up
  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
};  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, action }) => (
          <div key={path} className={styles.iconContainer}>
            {action === 'download-resume' ? (
              <div
                className={`${styles.iconContainer} ${styles.resumeButton}`}
                onClick={handleResumeDownload}
                title="Download Resume"
              >
                <Icon
                  size={16}
                  fill="rgb(106, 115, 125)"
                  className={styles.icon}
                />
              </div>
            ) : (
              <Link href={path}>
                <div
                  className={`${styles.iconContainer} ${
                    router.pathname === path && styles.active
                  }`}
                >
                  <Icon
                    size={16}
                    fill={
                      router.pathname === path
                        ? 'rgb(225, 228, 232)'
                        : 'rgb(106, 115, 125)'
                    }
                    className={styles.icon}
                  />
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
