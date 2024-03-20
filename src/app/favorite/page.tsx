'use client';

import FavoriteProductSection from '@/containers/FavoriteProductSection';
import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';

export default function Favorite() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.comb}>
          <p>Trang chủ</p>
          <p>/</p>
          <p>Sản phẩm yêu thích</p>
        </div>

        <p className={styles.title}>Sản phẩm yêu thích</p>

        <FavoriteProductSection />
      </div>
    </MainLayout>
  );
}
