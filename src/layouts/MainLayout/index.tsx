import { Header } from '@/components/Header';

import styles from './styles.module.css';
import { Footer } from '@/components/Footer';

export default function MainLayout({ children }: any) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.body}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
