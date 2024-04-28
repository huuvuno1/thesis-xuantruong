'use client';

import { CartHeader } from '@/components/CartHeader';
import styles from './styles.module.css';
import cartItemP1 from '@/assets/images/cart-item-p-1.png';
import cartItemP2 from '@/assets/images/cart-item-p-2.png';
import cartItemP3 from '@/assets/images/cart-item-p-3.png';

import MainLayout from '@/layouts/MainLayout';
import RecentViewedProductSection from '@/containers/RecentViewedProductSection';
import FavoriteProductListSection from '@/containers/FavoriteProductListSection';
import { useRouter } from 'next/navigation';
import CartItemCart from '@/components/CartItemCart';
import CartResponsive from '@/responsive/CartResponsive';

const cartData = [
  {
    name: 'Áo khoác lông S2',
    desc: 'Be/S',
    price: 1799000,
    kind: ['Be', 'S'],
    image: cartItemP1,
  },
  {
    name: 'Quần tây nam SiteTab v2',
    desc: 'Đen/L',
    price: 499000,
    kind: ['Đen', 'S'],
    image: cartItemP2,
  },
  {
    name: 'Quần Jeans Slimfit',
    desc: 'Đen/XL',
    price: 349000,
    kind: ['Đen', 'XL'],
    image: cartItemP3,
  },
];

export default function Cart() {
  const router = useRouter();
  return (
    <MainLayout>
      <div className={styles.desktopOnly}>
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
                <CartItemCart
                  desc={c.desc}
                  image={c.image}
                  kind={c.kind}
                  name={c.name}
                  price={c.price}
                  key={c.name}
                />
              ))}

              <div className={styles.buyMore}>
                <p className={styles.buyMoreText}>{`Mua thêm sản phẩm >>>`}</p>
              </div>
            </div>
            <div className={styles.summary}>
              <div className={styles.summaryPadding}>
                <p className={styles.summaryTitle}>TÓM TẮT ĐƠN HÀNG</p>
                <p className={styles.summaryDesc}>
                  Chưa bao gồm phí vận chuyển
                </p>
                <div className={styles.totalPriceWrapper}>
                  <p className={styles.totalPrice}>Tổng tiền:</p>
                  <p className={styles.priceValue}>1,647,000đ</p>
                </div>
              </div>

              <button
                className={styles.placeOrderBtn}
                onClick={() => {
                  router.push('/cart-payment');
                }}
              >
                Tiến hành đặt hàng
              </button>
            </div>
          </div>

          <FavoriteProductListSection />

          <RecentViewedProductSection
            className={styles.recentViewedProductSection}
          />
        </div>
      </div>

      <div className={styles.mobileOnly}>
        <CartResponsive />
      </div>
    </MainLayout>
  );
}
