'use client';

import styles from './styles.module.css';
import cartItemP1 from '@/assets/images/cart-item-p-1.png';
import cartItemP2 from '@/assets/images/cart-item-p-2.png';
import cartItemP3 from '@/assets/images/cart-item-p-3.png';
import ArrowIconDown from '@/assets/images/ArrowDownIcon.png';
import CircleIcon from '@/assets/images/CircleIcon.png';

import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import { CartPaymentHeader } from '@/components/CartPaymentHeader';

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

export default function CartPayment() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <CartPaymentHeader />

        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.headerText}>
              <p className={styles.headerTextTranformInfo}>
                Thông tin vận chuyển
              </p>
              <p className={styles.headerTextDefaultAddress}>
                Sử dụng địa chỉ mặc định
              </p>
            </div>

            <div className={styles.inputPadding}>
              <input
                type="text"
                placeholder="Họ và tên"
                className={`${styles.input} ${styles.nameInput}`}
              />
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Email"
                  className={`${styles.input}`}
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className={`${styles.input}`}
                />
              </div>
              <div className={styles.inputWrapper}>
                <div
                  className={`${styles.input} ${styles.inputWrapperWithIcon}`}
                >
                  <input type="text" placeholder="Thành phố" />

                  <Image src={ArrowIconDown} alt="icon" />
                </div>
                <div
                  className={`${styles.input} ${styles.inputWrapperWithIcon}`}
                >
                  <input type="text" placeholder="Quận/Huyện" />

                  <Image src={ArrowIconDown} alt="icon" />
                </div>
              </div>
              <input
                className={`${styles.input} ${styles.desc}`}
                type="text"
                placeholder="Ghi chú thêm"
              />

              <p className={styles.headerTextTranformInfoBelow}>
                Hình thức thanh toán
              </p>

              <div className={styles.paymentMethod}>
                <div className={styles.paymentMethodItem}>
                  <Image src={CircleIcon} alt="CircleIcon" />

                  <p className={styles.paymentMethodItemInput}>
                    COD (Thanh toán khi nhận hàng)
                  </p>
                </div>
                <div className={styles.paymentMethodItem}>
                  <Image src={CircleIcon} alt="CircleIcon" />

                  <p className={styles.paymentMethodItemInput}>
                    Thanh toán qua ví MoMo
                  </p>
                </div>
                <div className={styles.paymentMethodItem}>
                  <Image src={CircleIcon} alt="CircleIcon" />

                  <p className={styles.paymentMethodItemInput}>
                    Thanh toán qua ví điện tử (ZaloPay / VNPAY..)
                  </p>
                </div>
                <div className={styles.paymentMethodItem}>
                  <Image src={CircleIcon} alt="CircleIcon" />

                  <p className={styles.paymentMethodItemInput}>
                    Quét QR / Thanh toán bằng ứng dụng ngân hàng
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div>
              <div className={styles.row}>
                <p className={styles.colCart}>Giỏ hàng</p>
                <p className={styles.colQuantity}>Số lượng</p>
                <p className={styles.colPrice}>Giá</p>
              </div>

              {cartData.map((c) => (
                <div key={c.name}>
                  <div>
                    <Image src={c.image} alt={c.name} />

                    <div>
                      <p>{c.name}</p>
                      <p>{c.desc}</p>

                      <div>
                        {c.kind.map((k) => (
                          <div key={k}>
                            <p>{k}</p>

                            <Image src={ArrowIconDown} alt="icon" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p>1</p>

                  <p>{c.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
