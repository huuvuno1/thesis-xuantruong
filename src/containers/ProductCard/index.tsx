'use client';

import Image from 'next/image';
import FourStar from '@/assets/images/fourStar.png';
import HeartIcon from '@/assets/images/heartIcon.png';
import hot from '@/assets/images/hot.png';

import styles from './styles.module.css';
import Link from 'next/link';
import { useState } from 'react';

interface Color {
  code: string;
  isActive: boolean;
}

interface ProductCardProps {
  name: string;
  desc: string;
  price: string;
  colors: Color[];
  image: any;
  isOutOfStock: boolean;
  className?: string;
  isNew?: boolean;
  isSale?: boolean;
  oldPrice?: string;
  percent?: string;
  href?: string;
}
export default function ProductCard(props: Readonly<ProductCardProps>) {
  const [heart, setHeart] = useState(false);

  const toggle = () => {
    setHeart(!heart);
  };
  return (
    <div className={`${styles.container} ${props.className}`}>
      {props.isOutOfStock && (
        <div className={styles.soldout}>
          <div className={styles.soldoutInner}>Bán hết</div>
        </div>
      )}
      <Link href={props?.href!} className={styles.mainImage}>
        <div className={styles.header}>
          <Image src={FourStar} alt="FourStar" />
          {props.isNew && <div className={styles.newTag}>New</div>}
          {props.isSale && <div className={styles.saleTag}>Sale</div>}
        </div>
        <Image src={props?.image} alt="homeProductSection" />
        <p className={styles.textTag}>Simple</p>

        <div className={styles.sizeChoosed}>
          <p className={styles.sizeChoosedTitle}>Thêm nhanh vào giỏ hàng*</p>

          <div className={styles.sizeChoosedSizeWrapper}>
            <div className={styles.sizeChoosedSizeItem}>S</div>
            <div className={styles.sizeChoosedSizeItem}>M</div>
            <div className={styles.sizeChoosedSizeItem}>L</div>
            <div className={styles.sizeChoosedSizeItem}>XL</div>
            <div className={styles.sizeChoosedSizeItem}>2XL</div>
          </div>
        </div>
      </Link>

      <div className={styles.colorWrapper}>
        {props?.colors?.map((c) => (
          <div
            key={c?.code}
            className={`${styles.colorItem} ${
              c?.isActive && styles.colorItemActive
            }`}
          >
            <div
              style={{ backgroundColor: c?.code }}
              className={`${styles.colorItemInner}`}
            ></div>
          </div>
        ))}
      </div>

      <h5 className={styles.name}>{props.name}</h5>
      <p className={styles.desc}>{props.desc}</p>

      <div className={styles.priceWrapper}>
        <div className={styles.priceWrapper}>
          <p className={styles.price}>{props.price}</p>
          {props.oldPrice && (
            <p className={styles.oldPrice}>{props.oldPrice}</p>
          )}
          {props.percent && <p className={styles.percent}>{props.percent}</p>}
        </div>

        {heart ? (
          <Image src={hot} alt="hot" onClick={toggle} />
        ) : (
          <Image src={HeartIcon} alt="icon" onClick={toggle} />
        )}
      </div>
    </div>
  );
}
