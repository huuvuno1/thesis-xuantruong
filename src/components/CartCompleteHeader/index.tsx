'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import ArrowRight from '@/assets/images/ArrowRight.png';

export const CartCompleteHeader = () => {
  return (
    <div className={`${styles.container}`}>
      <p>Giỏ hàng</p>
      <Image src={ArrowRight} alt="ArrowRight" />
      <p>Thanh toán</p>
      <Image src={ArrowRight} alt="ArrowRight" />
      <p className={`${styles.active}`}>Hoàn tất</p>
    </div>
  );
};
