'use client';

import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';
import { CartCompleteHeader } from '@/components/CartCompleteHeader';
import { useRouter } from 'next/navigation';

export default function CartComplete() {
  const router = useRouter();
  return (
    <MainLayout>
      <div className={styles.container}>
        <CartCompleteHeader />

        <div className={styles.content}>
          <h3 className={styles.title}>
            Cảm ơn bạn đã tin tưởng lựa chọn 365 Simple!
          </h3>

          <div className={styles.main}>
            <div className={styles.mainItem}>
              <p className={styles.name}>Mã đơn hàng</p>
              <p className={styles.value}>#22122001</p>
            </div>
            <div className={styles.mainItem}>
              <p className={styles.name}>Ngày đặt hàng</p>
              <p className={styles.value}>22/12/2023</p>
            </div>
            <div className={styles.mainItem}>
              <p className={styles.name}>Thành tiền</p>
              <p className={styles.value}>1,647,000đ </p>
            </div>
            <div className={styles.mainItem}>
              <p className={styles.name}>Phương thức thanh toán</p>
              <p className={styles.value}>1,647,000đ </p>
            </div>
          </div>

          <button
            className={styles.backBtn}
            onClick={() => {
              router.push('/');
            }}
          >
            Quay lại Trang chủ
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
