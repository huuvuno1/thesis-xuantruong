'use client';

import { CartHeader } from '@/components/CartHeader';
import styles from './styles.module.css';
import cartItemP1 from '@/assets/images/cart-item-p-1.png';
import cartItemP2 from '@/assets/images/cart-item-p-2.png';
import cartItemP3 from '@/assets/images/cart-item-p-3.png';
import arrowDown from '@/assets/images/ArrowDownIcon.png';
import xIcon from '@/assets/images/x-icon.png';

import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import RecentViewedProductSection from '@/containers/RecentViewedProductSection';
import FavoriteProductListSection from '@/containers/FavoriteProductListSection';

const cartData = [
  {
    name: 'Áo khoác lông S2',
    desc: 'Be/S',
    price: '1.799.000đ',
    kind: ['Be', 'S'],
    image: cartItemP1,
  },
  {
    name: 'Quần tây nam SiteTab v2',
    desc: 'Đen/L',
    price: '499.000đ',
    kind: ['Đen', 'S'],
    image: cartItemP2,
  },
  {
    name: 'Quần Jeans Slimfit',
    desc: 'Đen/XL',
    price: '349.000đ',
    kind: ['Đen', 'XL'],
    image: cartItemP3,
  },
];

export default function Cart() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <CartHeader />

        <div className={styles.line}></div>

        <div className={styles.cartWrapper}>
          <div className={styles.cartItemWrapper}>
            <div className={styles.row}>
              <p className={styles.rowProduct}>Sản phẩm</p>
              <p className={styles.rowPrice}>Giá</p>
              <p className={styles.rowQuantity}>Số lượng</p>
              <p className={styles.rowProvisional}>Tạm tính</p>
            </div>

            {cartData.map((c) => (
              <div key={c.name} className={styles.row1}>
                <div className={styles.productInfo1}>
                  <div className={styles.xIconWrapper}>
                    <Image src={xIcon} alt="xIcon" />
                  </div>

                  <div className={styles.productInfo}>
                    <Image src={c.image} alt={c.name} />

                    <div className={styles.productInfoWrapper}>
                      <p className={styles.productInfoName}>{c.name}</p>
                      <p className={styles.productInfoDesc}>{c.desc}</p>

                      <div className={styles.productKindWrapper}>
                        {c.kind.map((k) => (
                          <div key={k} className={styles.productKindItem}>
                            <p>{k}</p>
                            <Image src={arrowDown} alt="icon" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.rowPrice1}>{c.price}</p>
                <div className={styles.quantityWrapper}>
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
                <p className={styles.rowPrice1}>{c.price}</p>
              </div>
            ))}

            <div className={styles.buyMore}>
              <p className={styles.buyMoreText}>{`Mua thêm sản phẩm >>>`}</p>
            </div>
          </div>
          <div className={styles.summary}>
            <div className={styles.summaryPadding}>
              <p className={styles.summaryTitle}>TÓM TẮT ĐƠN HÀNG</p>
              <p className={styles.summaryDesc}>Chưa bao gồm phí vận chuyển</p>
              <div className={styles.totalPriceWrapper}>
                <p className={styles.totalPrice}>Tổng tiền:</p>
                <p className={styles.priceValue}>1,647,000đ</p>
              </div>
            </div>

            <button className={styles.placeOrderBtn}>Tiến hành đặt hàng</button>
          </div>
        </div>

        <FavoriteProductListSection />

        <RecentViewedProductSection
          className={styles.recentViewedProductSection}
        />
      </div>
    </MainLayout>
  );
}
