'use client';

import AdminLayout from '@/layouts/AdminLayout';
import styles from './styles.module.css';
import PrinterIcon from '@/assets/icons/printer.svg';
import ArrowRightLineIcon from '@/assets/icons/ArrowRightLine.svg';
import product1 from '@/assets/images/product-table-1.png';
import product2 from '@/assets/images/product-table-2.png';
import Image from 'next/image';

export default function LoginAdmin() {
  return (
    <AdminLayout>
      <div className={styles.container}>
        <header>
          <h1 className={styles.headerTitle}>Quản lý đơn hàng</h1>
        </header>

        <div className={styles.orderDetailWrapper}>
          <p className={styles.orderDetail}>Chi tiết đơn hàng</p>

          <div className={styles.orderDetailNav}>
            <p className={styles.orderInfo}>Thông tin đơn hàng</p>
            <p className={styles.customerInfo}>Thông tin khách hàng</p>
            <div className={styles.printer}>
              <p>In</p>
              <PrinterIcon />
            </div>
          </div>
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.orderInfoCard}>
            <div className={styles.orderInfoCardItem}>
              <Image
                src={product1}
                alt="product"
                className={styles.orderInfoCardItemImg}
              />

              <div className={styles.orderInfoCardItemInfo}>
                <p className={styles.orderInfoCardItemInfoName}>
                  Áo khoác dạ Nam Basic dày dặn form Regular
                </p>
                <p className={styles.orderInfoCardItemInfoSize}>Xám/L</p>
                <p className={styles.orderInfoCardItemInfoQuantity}>X 1</p>
              </div>

              <p className={styles.orderInfoCardItemInfoPrice}>890.000</p>
            </div>
            <div className={styles.orderInfoCardItem}>
              <Image
                src={product2}
                alt="product"
                className={styles.orderInfoCardItemImg}
              />

              <div className={styles.orderInfoCardItemInfo}>
                <p className={styles.orderInfoCardItemInfoName}>
                  Áo khoác măng tô Nam Basic
                </p>
                <p className={styles.orderInfoCardItemInfoSize}>Xanh/XL</p>
                <p className={styles.orderInfoCardItemInfoQuantity}>X 1</p>
              </div>

              <p className={styles.orderInfoCardItemInfoPrice}>1.599.000</p>
            </div>

            <div className={styles.hr} />

            <div className={styles.detailWrapper}>
              <div className={styles.detail}>
                <p>Tổng phụ: </p>
                <p>2.489.000</p>
              </div>
              <div className={styles.detail}>
                <p>Phí vận chuyển:</p>
                <p>0</p>
              </div>
              <div className={styles.detail}>
                <p>Giảm giá:</p>
                <p>250.000</p>
              </div>
              <div className={`${styles.detail} ${styles.detail1}`}>
                <p>Số tiền phải trả:</p>
                <p>2.239.000</p>
              </div>
            </div>
          </div>
          <div className={styles.customerInfoCard}>
            <div className={styles.customerInfoCardAddress}>
              <div className={styles.customerInfoCardAddressUserInfo}>
                <p>Vũ Xuân Trường</p>
                <p>Email: truong.vx22@gmail.com</p>
                <p>SĐT : 0987654321</p>
              </div>

              <div className={styles.customerInfoCardAddressUserAddress}>
                <p>Địa chỉ giao hàng</p>
                <p>99/223 Định Công, Hoàng Mai, Hà Nội</p>
              </div>
            </div>

            <div className={styles.customerInfoCardOrderHistory}>
              <p>Lịch sử đơn hàng</p>

              <ArrowRightLineIcon />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
