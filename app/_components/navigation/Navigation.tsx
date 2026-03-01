import styles from './navigation.module.scss';
import Image from 'next/image';

export const Navigation = () => {
    
  return (
    <div className={styles.navigation}>
      {'Nawigacja'}
      {/*  Next.js logo width === 394px, height === 80px */}
      {/*  Image height === 30px to fill whole height of the navigation (30px without padding) */}
      {/*  width === 148, calculations => 30 * 80 = 0.375, 394 * 0.375 = 147.75 */}
      <Image
        className={styles.nextLogo}
        src={'/next.svg'}
        alt={'Next.js logo'}
        height={30}
        width={148}
      />
    </div>
  );
};