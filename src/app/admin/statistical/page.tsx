'use client';

import AdminLayout from '@/layouts/AdminLayout';
import styles from './styles.module.css';
import ArrawDownIcon from '@/assets/icons/arraw-down.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import statisticalChartImage from '@/assets/images/statistical_chart.png';
import productTable1 from '@/assets/images/product-table-1.png';
import productTable2 from '@/assets/images/product-table-2.png';
import productTable3 from '@/assets/images/product-table-3.png';
import star from '@/assets/images/star.png';
import Image from 'next/image';
import AdminSearchInput from '@/components/AdminSearchInput';
import AdminDropDown from '@/components/AdminDropDown';

export default function LoginAdmin() {
  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Chào mừng trở lại, Truong</h2>
            <p className={styles.desc}>
              Cùng xem cửa hàng 365 Simple đã đạt được những gì!
            </p>
          </div>

          <AdminDropDown value="Lọc số liệu: Hàng tháng" />
        </div>

        <div className={styles.revenue}>
          <div className={`${styles.revenueItem} ${styles.revenueItemActive}`}>
            <p className={styles.revenueTitle}>Doanh thu</p>
            <p className={styles.revenuePrice}>38.780.289</p>
          </div>

          <div className={styles.revenueItem}>
            <p className={styles.revenueTitle}>Tổng đơn hàng</p>
            <p className={styles.revenuePrice}>51.899</p>
          </div>

          <div className={styles.revenueItem}>
            <p className={styles.revenueTitle}>Đơn hoàn thành</p>
            <p className={styles.revenuePrice}>48.895</p>
          </div>

          <div className={styles.revenueItem}>
            <p className={styles.revenueTitle}>Hoàn trả</p>
            <p className={styles.revenuePrice}>3.004</p>
          </div>
        </div>

        <div className={styles.newOrders}>
          <div className={styles.newOrdersBox}>
            <h5 className={styles.newOrdersBoxTitle}>Đơn hàng mới nhất</h5>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className={styles.newOrdersBoxItem}>
                  <div className={styles.newOrdersBoxItemFirst}>
                    <CheckCircleIcon />

                    <div className={styles.orderIdBox}>
                      <strong className={styles.orderId}>#239232</strong>
                      <p className={styles.orderDate}>28/02/2024</p>
                    </div>
                  </div>

                  <div className={styles.priceBox}>
                    <strong className={styles.price}>230.000 vnd</strong>
                    <p className={styles.completed}>Hoàn thành</p>
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.newOrdersChart}>
            <Image src={statisticalChartImage} alt="chart" />
          </div>
        </div>

        <div className={styles.newReview}>
          <div className={styles.newReviewHeader}>
            <h4 className={styles.newReviewHeaderTitle}>Đánh giá mới nhất</h4>

            <AdminSearchInput />
          </div>
        </div>

        <div className={styles.tableProduct}>
          <div className={styles.tableHeader}>
            <p className={styles.columnName}>Sản phẩm</p>
            <p className={styles.columnName}>Đánh giá</p>
            <p className={styles.columnName}>Phản hồi</p>
            <p className={styles.columnName}>Thời gian</p>
          </div>
          <div className={styles.row}>
            <div className={styles.rowProductNameWrapper}>
              <Image src={productTable1} alt="product" />

              <p className={styles.rowProductName}>
                Áo khoác dạ Nam Basic dày dặn form Regular
              </p>
            </div>

            <Image src={star} alt="star" />

            <p className={styles.rowProductDesc}>
              Chất lượng phù hợp với giá sản phẩm. Lần đầu mình mua hàng mà thấy
              rất ưng, sẽ ủng hộ shop dài dài. Có điều là phần tay hơi ngắn, nếu
              dài ra 1 chút thì đẹp, mình 1m70 65kg mặc size L và vừa như in,
              các bạn thích mặc rộng có thể tăng 1 size nhé
            </p>

            <p className={styles.time}>Vừa xong</p>
          </div>
          <div className={styles.row}>
            <div className={styles.rowProductNameWrapper}>
              <Image src={productTable2} alt="product" />

              <p className={styles.rowProductName}>
                Áo khoác măng tô Nam Basic
              </p>
            </div>

            <Image src={star} alt="star" />

            <p className={styles.rowProductDesc}>
              Chất lượng phù hợp với giá sản phẩm. Có điều là phần tay hơi ngắn,
              nếu dài ra 1 chút thì đẹp, mình 1m70 65kg mặc size L và vừa như
              in,
            </p>

            <p className={styles.time}>11/02/24 8.00am</p>
          </div>
          <div className={styles.row}>
            <div className={styles.rowProductNameWrapper}>
              <Image src={productTable3} alt="product" />

              <p className={styles.rowProductName}>Quần âu ống suông</p>
            </div>

            <Image src={star} alt="star" />

            <p className={styles.rowProductDesc}>
              Lần đầu mình mua hàng mà thấy rất ưng, sẽ ủng hộ shop dài dài. Có
              điều là phần tay hơi ngắn, nếu dài ra 1 chút thì đẹp, mình 1m70
              65kg mặc size L và vừa như in,
            </p>

            <p className={styles.time}>11/02/24 16.00pm</p>
          </div>
        </div>

        <div className={styles.analyticsProduct}>
          <div className={styles.analyticsProductHeader}>
            <p className={styles.analyticsProductHeaderTitle}>
              Thống kê sản phẩm
            </p>

            <div className={styles.analyticsProductHeaderAction}>
              <div className={styles.filterBox}>
                <p className={styles.filterTitle}>Bán chạy nhất</p>
                <ArrawDownIcon />
              </div>

              <AdminSearchInput />
            </div>
          </div>

          <div className={styles.analyticsProductRow}>
            <div className={styles.analyticsProductProductCodeColumn}>
              Mã sản phẩm
            </div>
            <div className={styles.analyticsProductProductColumn}>Sản phẩm</div>
            <div className={styles.analyticsProductPriceColumn}>Giá bán</div>
            <div className={styles.analyticsProductQuantityColumn}>
              Số lượng bán
            </div>
            <div className={styles.analyticsProductRevenueColumn}>
              Doanh thu
            </div>
          </div>

          <div className={styles.analyticsProductRow}>
            <div
              className={`${styles.analyticsProductProductCodeColumn} ${styles.analyticsProductProductCodeColumn1}`}
            >
              #123456
            </div>
            <div
              className={`${styles.analyticsProductProductColumn} ${styles.analyticsProductProductColumn2}`}
            >
              <Image src={productTable1} alt="product" />
              <p className={styles.rowProductName1}>
                Áo khoác dạ Nam Basic dày dặn form Regular
              </p>
            </div>
            <div
              className={`${styles.analyticsProductPriceColumn} ${styles.analyticsProductPriceColumn3}`}
            >
              750.000
            </div>
            <div
              className={`${styles.analyticsProductQuantityColumn} ${styles.analyticsProductQuantityColumn4}`}
            >
              826
            </div>
            <div
              className={`${styles.analyticsProductRevenueColumn} ${styles.analyticsProductRevenueColumn5}`}
            >
              619.500.000
            </div>
          </div>
          <div className={styles.analyticsProductRow}>
            <div
              className={`${styles.analyticsProductProductCodeColumn} ${styles.analyticsProductProductCodeColumn1}`}
            >
              #456782
            </div>
            <div
              className={`${styles.analyticsProductProductColumn} ${styles.analyticsProductProductColumn2}`}
            >
              <Image src={productTable3} alt="product" />
              <p className={styles.rowProductName1}>Quần âu ống suông</p>
            </div>
            <div
              className={`${styles.analyticsProductPriceColumn} ${styles.analyticsProductPriceColumn3}`}
            >
              450.000
            </div>
            <div
              className={`${styles.analyticsProductQuantityColumn} ${styles.analyticsProductQuantityColumn4}`}
            >
              750
            </div>
            <div
              className={`${styles.analyticsProductRevenueColumn} ${styles.analyticsProductRevenueColumn5}`}
            >
              750
            </div>
          </div>
          <div className={styles.analyticsProductRow}>
            <div
              className={`${styles.analyticsProductProductCodeColumn} ${styles.analyticsProductProductCodeColumn1}`}
            >
              #1828456
            </div>
            <div
              className={`${styles.analyticsProductProductColumn} ${styles.analyticsProductProductColumn2}`}
            >
              <Image src={productTable2} alt="product" />
              <p className={styles.rowProductName1}>
                Áo khoác măng tô Nam Basic
              </p>
            </div>
            <div
              className={`${styles.analyticsProductPriceColumn} ${styles.analyticsProductPriceColumn3}`}
            >
              850.000
            </div>
            <div
              className={`${styles.analyticsProductQuantityColumn} ${styles.analyticsProductQuantityColumn4}`}
            >
              655
            </div>
            <div
              className={`${styles.analyticsProductRevenueColumn} ${styles.analyticsProductRevenueColumn5}`}
            >
              556.750.000
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
