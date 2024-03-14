import logoImage from '@/assets/images/logo.png';
import searchImage from '@/assets/icons/search.png';
import chevronDownImage from '@/assets/images/chevron-down.png';
import bellImage from '@/assets/images/bell.png';
import Image from 'next/image';

import styles from './styles.module.css';

export default function AdminHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header2}>
          <Image className={styles.logo} src={logoImage} alt="logo" />

          <div className={styles.inputWrapper}>
            <Image className={styles.search} src={searchImage} alt="logo" />
            <input
              type="text"
              className={styles.input}
              placeholder="Tìm kiếm"
            />
          </div>
        </div>

        <div className={styles.leftHeader}>
          <Image className={styles.search} src={bellImage} alt="bellImage" />

          <div className={styles.actionWrapper}>
            <div className={styles.actionWrapper1}>
              <h5 className={styles.name}>Vu Xuan Truong</h5>
              <p className={styles.role}>Quản trị viên</p>
            </div>

            <Image
              className={styles.search}
              src={chevronDownImage}
              alt="chevronDownImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
