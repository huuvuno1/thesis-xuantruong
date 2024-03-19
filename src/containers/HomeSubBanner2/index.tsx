import subbanner2 from '@/assets/images/subbanner2.png';
import Image from 'next/image';

import styles from './styles.module.css';

export default function HomeSubBanner2() {
  return (
    <div className={styles.container}>
      <Image src={subbanner2} alt="sub banner" />
    </div>
  );
}
