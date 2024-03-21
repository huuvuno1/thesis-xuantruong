'use client';

import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';
import RecentViewedProductSection from '@/containers/RecentViewedProductSection';

export default function RecentView() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.comb}>
          <p>Trang chủ</p>
          <p>/</p>
          <p>Sản phẩm vừa xem</p>
        </div>

        <p className={styles.title}>Sản phẩm vừa xem</p>

        <RecentViewedProductSection />
      </div>
    </MainLayout>
  );
}
