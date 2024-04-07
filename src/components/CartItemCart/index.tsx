import styles from './styles.module.css';

import arrowDown from '@/assets/images/ArrowDownIcon.png';
import xIcon from '@/assets/images/x-icon.png';
import { formatCurrencyVND } from '@/utils/formatCurrencyVND';

import Image from 'next/image';
import { useState } from 'react';

interface CartItemCartProps {
  name: string;
  image: any;
  desc: string;
  kind: any;
  price: number;
}
export default function CartItemCart(props: Readonly<CartItemCartProps>) {
  const { name, image, desc, kind, price } = props;

  const [quantity, setQuantity] = useState(1);

  return (
    <div key={name} className={styles.row1}>
      <div className={styles.productInfo1}>
        <div className={styles.xIconWrapper}>
          <Image src={xIcon} alt="xIcon" />
        </div>

        <div className={styles.productInfo}>
          <Image src={image} alt={name} />

          <div className={styles.productInfoWrapper}>
            <p className={styles.productInfoName}>{name}</p>
            <p className={styles.productInfoDesc}>{desc}</p>

            <div className={styles.productKindWrapper}>
              {kind?.map((k: any) => (
                <div key={k} className={styles.productKindItem}>
                  <p>{k}</p>
                  <Image src={arrowDown} alt="icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className={styles.rowPrice1}>{formatCurrencyVND(price)}</p>
      <div className={styles.quantityWrapper}>
        <p className={styles.bam} onClick={() => setQuantity(quantity - 1)}>
          -
        </p>
        <p>{quantity}</p>
        <p className={styles.bam} onClick={() => setQuantity(quantity + 1)}>
          +
        </p>
      </div>
      <p className={styles.rowPrice1}>{formatCurrencyVND(price * quantity)}</p>
    </div>
  );
}
