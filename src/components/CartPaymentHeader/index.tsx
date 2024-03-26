'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import ArrowRight from '@/assets/images/ArrowRight.png';

export const CartPaymentHeader = () => {
  return (
    <div className={`${styles.container}`}>
      <p>Giỏ hàng</p>
      <Image src={ArrowRight} alt="ArrowRight" />
      <p className={`${styles.active}`}>Thanh toán</p>
      <Image src={ArrowRight} alt="ArrowRight" />
      <p>Hoàn tất</p>
    </div>
  );
};
