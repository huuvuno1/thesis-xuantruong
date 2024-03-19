import Image from 'next/image';
import styles from './styles.module.css';

import homebannerWarehouse1 from '@/assets/images/home-banner-warehouse1.png';
import homebannerWarehouse2 from '@/assets/images/home-banner-warehouse2.png';

export default function HomeBannerWarehouse() {
  return (
    <div className={styles.container}>
      <Image src={homebannerWarehouse1} alt="homebannerWarehouse1" />
      <Image src={homebannerWarehouse2} alt="homebannerWarehouse2" />
    </div>
  );
}
