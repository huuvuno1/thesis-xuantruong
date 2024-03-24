'use client';

import ProductDetailMain from '@/containers/ProductDetailMain';
import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';
import ProductDetailDesc from '@/containers/ProductDetailDesc';
import FavoriteProductSection from '@/containers/FavoriteProductSection';
import ProductDetailReview from '@/containers/ProductDetailReview';

export default function ProductDetail() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.comb}>
          <p>Trang chủ</p>
          <p>/</p>
          <p>Sản phẩm</p>
          <p>/</p>
          <p>Chi tiết sản phẩm</p>
        </div>

        <ProductDetailMain />

        <ProductDetailDesc />

        <FavoriteProductSection />

        <ProductDetailReview />
      </div>
    </MainLayout>
  );
}
