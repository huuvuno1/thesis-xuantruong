'use client';

import styles from './styles.module.css';
import cartItemP1 from '@/assets/images/cart-item-p-1.png';
import cartItemP2 from '@/assets/images/cart-item-p-2.png';
import cartItemP3 from '@/assets/images/cart-item-p-3.png';
import ArrowIconDown from '@/assets/images/ArrowDownIcon.png';
import momoimage from '@/assets/images/momo.png';
import zalopay from '@/assets/images/zalopay.png';

import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import { CartPaymentHeader } from '@/components/CartPaymentHeader';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
  const router = useRouter();

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleInputChange = (e: any) => {
    setSelectedPayment(e.target.value);
  };
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
                  <input
                    type="radio"
                    id="thanhtoankhinhanhang"
                    name="payment"
                    className={styles.paymentMethodItemInputPUT}
                    onChange={handleInputChange}
                    checked={selectedPayment === 'ttknh'}
                    value="ttknh"
                  ></input>
                  <label
                    htmlFor="thanhtoankhinhanhang"
                    className={styles.paymentMethodItemInput}
                  >
                    COD (Thanh toán khi nhận hàng)
                  </label>
                </div>

                <div className={styles.paymentMethodItem}>
                  <input
                    type="radio"
                    id="thanhtoanvimomo"
                    name="payment"
                    className={styles.paymentMethodItemInputPUT}
                    checked={selectedPayment === 'ttvmm'}
                    value="ttvmm"
                    onChange={handleInputChange}
                  ></input>

                  <label
                    htmlFor="thanhtoanvimomo"
                    className={styles.paymentMethodItemInput}
                  >
                    Thanh toán qua ví MoMo
                  </label>
                </div>
                {'ttvmm' === selectedPayment && (
                  <div className={styles.wrapperPaymentW}>
                    <div className={styles.wrapperPayment}>
                      <p>Quét mã bên cạnh để thanh toán đơn hàng của bạn TÊN</p>
                      <p>STK: 0988889999</p>
                      <p>TK: 365 SIMPLE</p>
                    </div>

                    <Image src={momoimage} alt="momoimage" />
                  </div>
                )}

                <div className={styles.paymentMethodItem}>
                  <input
                    type="radio"
                    id="thanhtoanvizalo"
                    name="payment"
                    className={styles.paymentMethodItemInputPUT}
                    checked={selectedPayment === 'ttqvzalo'}
                    value="ttqvzalo"
                    onChange={handleInputChange}
                  ></input>

                  <label
                    htmlFor="thanhtoanvizalo"
                    className={styles.paymentMethodItemInput}
                  >
                    Thanh toán qua ví điện tử (ZaloPay / VNPAY..)
                  </label>
                </div>
                {'ttqvzalo' === selectedPayment && (
                  <div className={styles.wrapperPaymentW}>
                    <div className={styles.wrapperPayment}>
                      <p>Quét mã bên cạnh để thanh toán đơn hàng của bạn</p>
                      <p>STK: 0987654321</p>
                      <p>TK: 365 SIMPLE</p>
                    </div>

                    <Image src={zalopay} alt="zalopay" />
                  </div>
                )}

                <div className={styles.paymentMethodItem}>
                  <input
                    type="radio"
                    id="nganhang"
                    name="payment"
                    className={styles.paymentMethodItemInputPUT}
                    checked={selectedPayment === 'nganhang'}
                    value="nganhang"
                    onChange={handleInputChange}
                  ></input>

                  <label
                    htmlFor="nganhang"
                    className={styles.paymentMethodItemInput}
                  >
                    Quét QR / Thanh toán bằng ứng dụng ngân hàng
                  </label>
                </div>
                {'nganhang' === selectedPayment && (
                  <div className={styles.wrapperPaymentW}>
                    <div className={styles.wrapperPayment}>
                      <p>Quét mã bên cạnh để thanh toán đơn hàng của bạn</p>
                      <p>STK: 0987654321</p>
                      <p>TÊN TK: 365 SIMPLE</p>
                      <p>NGÂN HÀNG TIỀN PHONG (TP BANK)</p>
                    </div>

                    <Image src={zalopay} alt="zalopay" />
                  </div>
                )}
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
                <div key={c.name} className={styles.rowP}>
                  <div className={`${styles.colCart} ${styles.colCart1}`}>
                    <Image src={c.image} alt={c.name} />

                    <div className={styles.nameWrapper}>
                      <p className={styles.name}>{c.name}</p>
                      <p className={styles.desc1}>{c.desc}</p>

                      <div className={styles.sizeItemWrapper}>
                        {c.kind.map((k) => (
                          <div key={k} className={styles.sizeWrapper}>
                            <p>{k}</p>

                            <Image src={ArrowIconDown} alt="icon" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className={styles.quantity1}>1</p>

                  <p className={styles.price1}>{c.price}</p>
                </div>
              ))}
            </div>

            <div className={styles.discount}>
              <input
                className={styles.discountInput}
                type="text"
                placeholder="Nhập mã giảm giá"
              />

              <button className={styles.apply}>Áp dụng</button>
            </div>

            <div className={styles.completeWrapper}>
              <div className={styles.complete}>
                <p className={styles.nameComplete}>Tạm tính</p>

                <p className={styles.valueComplete}>1,647,000đ</p>
              </div>

              <div className={styles.complete}>
                <p className={styles.nameComplete}>Giảm giá</p>

                <p className={styles.valueComplete}>0đ</p>
              </div>

              <div className={styles.complete}>
                <p className={styles.nameComplete}>Phí giao hàng</p>

                <p className={styles.valueComplete}>Miễn phí</p>
              </div>

              <div className={styles.complete}>
                <p className={styles.nameCompleteT}>Tổng</p>

                <p className={styles.valueCompletT}>1,647,000đ</p>
              </div>
            </div>

            <button
              className={styles.btnComplete}
              onClick={() => {
                router.push('/cart-complete');
              }}
            >
              Hoàn tất đơn hàng
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
