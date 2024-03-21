'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import ArrowRight from '@/assets/images/ArrowRight.png';

export const CartHeader = () => {
  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.active}`}>Giỏ hàng</p>
      <Image src={ArrowRight} alt="ArrowRight" />
      <p>Thanh toán</p>
      <Image src={ArrowRight} alt="ArrowRight" />
      <p>Hoàn tất</p>
    </div>
  );
};
