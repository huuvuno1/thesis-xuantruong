'use client';

import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';
import RecentViewedProductSection from '@/containers/RecentViewedProductSection';
import RecentViewResponsive from '@/responsive/RecentViewResponsive';

export default function RecentView() {
  return (
    <MainLayout>
      <div className={styles.desktopOnly}>
        <div className={styles.container}>
          <div className={styles.comb}>
            <p>Trang chủ</p>
            <p>/</p>
            <p>Sản phẩm vừa xem</p>
          </div>

          <p className={styles.title}>Sản phẩm vừa xem</p>

          <RecentViewedProductSection />
        </div>
      </div>

      <div className={styles.mobileOnly}>
        <RecentViewResponsive />
      </div>
    </MainLayout>
  );
}
