'use client';

import ProductRender from '@/containers/ProductRender';
import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';
import ProductFilter from '@/containers/ProductFilter';

import FilterIcon from '@/assets/images/FilterIcon.png';
import Image from 'next/image';
import ProductFavoriteProductSection from '@/containers/ProductFavoriteProductSection';
import ProductResponsive from '@/responsive/ProductResponsive';

export default function Products() {
  return (
    <MainLayout>
      <div className={styles.desktopOnly}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h3 className={styles.title}>Tất cả sản phẩm</h3>
            <button className={styles.btnWrapper}>
              <Image src={FilterIcon} alt="filter" />
              <span className={styles.btnText}>Bộ lọc</span>
            </button>
          </div>

          <div className={styles.main}>
            <ProductFilter />
            <ProductRender />
          </div>

          <ProductFavoriteProductSection />
        </div>
      </div>

      <div className={styles.mobileOnly}>
        <ProductResponsive />
      </div>
    </MainLayout>
  );
}
