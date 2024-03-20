import Image from 'next/image';
import FourStar from '@/assets/images/fourStar.png';
import HeartIcon from '@/assets/images/heartIcon.png';

import styles from './styles.module.css';

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
}
export default function ProductCard(props: Readonly<ProductCardProps>) {
  return (
    <div className={`${styles.container} ${props.className}`}>
      {props.isOutOfStock && (
        <div className={styles.soldout}>
          <div className={styles.soldoutInner}>Bán hết</div>
        </div>
      )}
      <div className={styles.mainImage}>
        <div className={styles.header}>
          <Image src={FourStar} alt="FourStar" />
          {props.isNew && <div className={styles.newTag}>New</div>}
          {props.isSale && <div className={styles.saleTag}>Sale</div>}
        </div>
        <Image src={props?.image} alt="homeProductSection" />
        <p className={styles.textTag}>Simple</p>
      </div>

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

        <Image src={HeartIcon} alt="icon" />
      </div>
    </div>
  );
}
