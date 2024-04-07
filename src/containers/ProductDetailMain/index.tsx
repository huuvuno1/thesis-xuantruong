import Image from 'next/image';
import styles from './styles.module.css';

import productDetailMain from '@/assets/images/product-detail-main.png';
import productSmall1 from '@/assets/images/product-detail-small-1.png';
import productSmall2 from '@/assets/images/product-detail-small-2.png';
import productSmall3 from '@/assets/images/product-detail-small-3.png';
import productSmall4 from '@/assets/images/product-detail-small-4.png';
import productSmall5 from '@/assets/images/product-detail-small-5.png';

import previousIcon from '@/assets/images/previousIcon.png';
import afterIcon from '@/assets/images/afterIcon.png';

import reviewStar from '@/assets/images/review-star.png';
import chooseColor from '@/assets/images/choose-color.png';

import cartIcon from '@/assets/images/cartIcon.png';

import playIcon from '@/assets/images/playIcon.png';

import chat365 from '@/assets/images/chat-vs-365.png';

import { ToastContainer, toast } from 'react-toastify';

const imageSmall = [
  productSmall1,
  productSmall2,
  productSmall3,
  productSmall4,
  productSmall5,
];

const sizes = ['S', 'M', 'L', 'XL', '2XL'];

interface ProductDetailMainProps {
  className?: string;
}
export default function ProductDetailMain(
  props: Readonly<ProductDetailMainProps>
) {
  const notify = () =>
    toast.success('Đã thêm vào giỏ hàng!', {
      position: 'top-center',

      style: {
        fontSize: '14px',
      },
    });
  return (
    <div className={`${styles.container} ${props.className}`}>
      <div className={styles.imageLeft}>
        <div className={styles.imageLeftSmall}>
          {imageSmall.map((i) => (
            <Image src={i} alt="image" key={String(i)} />
          ))}
        </div>
        <div className={styles.mainImage}>
          <Image src={previousIcon} alt="image" className={styles.arrowLeft} />
          <Image src={afterIcon} alt="image" className={styles.arrowRight} />
          <Image src={productDetailMain} alt="productDetailMain" />
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Áo Sơ mi Nam Basic dày dặn, thoáng mát form Regular
        </h1>
        <p className={styles.desc}>Chất liệu: Dày dặn</p>
        <div className={styles.reviewWrapper}>
          <Image src={reviewStar} alt="reviewStar" />
          <p>(145)</p>
          <p>|</p>
          <p>Đã bán (web): 1.909</p>
        </div>
        <p className={styles.price}>299.000đ</p>
        <p className={styles.priceDiscount}>Các mã giảm giá có thể áp dụng:</p>

        <button className={styles.discountBtn}>Giảm 10%</button>

        <p className={styles.color}>Màu sắc: Xanh rêu </p>

        <Image src={chooseColor} alt="chooseColor" />

        <div className={styles.sizeGuideWrapper}>
          <p className={styles.size}>
            Kích thước: S (1m50 - 1m60 | 45kg - 55kg)
          </p>

          <p className={styles.sizeGuide}>Hướng dẫn chọn size</p>
        </div>

        <div className={styles.chooseSizeWrapper}>
          {sizes.map((s, index) => (
            <div
              className={`${styles.chooseSizeItem} ${
                index === 1 && styles.chooseSizeItemDisactive
              }`}
              key={s}
            >
              {s}
            </div>
          ))}
        </div>

        <div className={styles.cartWrapper}>
          <div className={styles.countWrapper}>
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>

          <button className={styles.addToCart} onClick={notify}>
            <p>Thêm vào giỏ hàng</p>
            <Image src={cartIcon} alt="cartIcon" />
          </button>
        </div>

        <button className={styles.buyNow}>
          <p>Mua ngay</p>

          <Image src={playIcon} alt="playIcon" />
        </button>

        <div className={styles.line}></div>

        <Image src={chat365} alt="chat365" />
      </div>

      <ToastContainer />
    </div>
  );
}
