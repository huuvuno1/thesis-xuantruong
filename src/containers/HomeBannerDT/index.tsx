import dtbanner from '@/assets/images/dtbanner.png';
import dtbannerIcon1 from '@/assets/images/dtbannerIcon1.png';
import dtbannerIcon2 from '@/assets/images/dtbannerIcon2.png';
import dtbannerIcon3 from '@/assets/images/dtbannerIcon3.png';
import dtbannerIcon4 from '@/assets/images/dtbannerIcon4.png';
import Image from 'next/image';

import styles from './styles.module.css';

export default function HomeBannerDT() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Đối tác</h3>
      <div className={styles.cover}>
        <Image src={dtbanner} alt="homeBannerDT" />

        <div className={styles.logoWrapper}>
          <Image src={dtbannerIcon1} alt="dtbannerIcon1" />
          <Image src={dtbannerIcon2} alt="dtbannerIcon2" />
          <Image src={dtbannerIcon3} alt="dtbannerIcon3" />
          <Image src={dtbannerIcon4} alt="dtbannerIcon4" />
        </div>
      </div>
    </div>
  );
}
