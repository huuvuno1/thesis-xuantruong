'use client';

import AdminLayout from '@/layouts/AdminLayout';
import styles from './styles.module.css';
import AdminSearchInput from '@/components/AdminSearchInput';
import AdminButton from '@/components/AdminButton';
import AdminDropDown from '@/components/AdminDropDown';
import PencilIcon from '@/assets/icons/pencil.svg';
import DeleteIcon from '@/assets/icons/DeleteIcon.svg';
import ArrowLeft from '@/assets/icons/ArrowLeft.svg';
import ArrowRight from '@/assets/icons/ArrowRight.svg';
import Product1Image from '@/assets/images/product-table-1.png';
import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginAdmin() {
  const router = useRouter();

  const handleGoToNewProduct = useCallback(() => {
    router.push('/admin/products/new');
  }, [router]);
  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header2}>
            <h2 className={styles.header2Title}>Tất cả sản phẩm</h2>

            <div className={styles.inputWrapper}>
              <AdminSearchInput />

              <AdminButton
                value="Thêm sản phẩm"
                onClick={handleGoToNewProduct}
              />
            </div>
          </div>

          <AdminDropDown value="Lọc số liệu: Mới nhất" />
        </div>

        <div className={styles.row}>
          <div className={`${styles.col} ${styles.productName}`}>
            Mã sản phẩm
          </div>
          <div className={`${styles.col} ${styles.product}`}>Sản phẩm</div>
          <div className={`${styles.col} ${styles.price}`}>Giá bán</div>
          <div className={`${styles.col} ${styles.sellQuantity}`}>
            Số lượng bán
          </div>
          <div className={`${styles.col} ${styles.quantityLeft}`}>
            Số lượng còn lại
          </div>
          <div className={`${styles.col} ${styles.revenue}`}>Doanh thu</div>
          <div className={`${styles.col} ${styles.action}`}>Hoạt động</div>
        </div>

        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={`${styles.row} ${styles.row1}`}>
              <div className={`${styles.productName1} ${styles.productName}`}>
                #123456
              </div>
              <div className={`${styles.product1} ${styles.product}`}>
                <Image src={Product1Image} alt="product" />
                <p>Áo khoác dạ Nam Basic dày dặn form Regular </p>
              </div>
              <div className={`${styles.price1} ${styles.price}`}>750.000</div>
              <div className={`${styles.sellQuantity1} ${styles.sellQuantity}`}>
                826
              </div>
              <div className={`${styles.quantityLeft1} ${styles.quantityLeft}`}>
                1500
              </div>
              <div className={`${styles.revenue1} ${styles.revenue}`}>
                619.500.000
              </div>
              <div className={`${styles.action1} ${styles.action}`}>
                <PencilIcon />

                <DeleteIcon />
              </div>
            </div>
          ))}

        <div className={styles.footer}>
          <p className={styles.footerText}>Hiển thị 10/150 sản phẩm</p>

          <div className={styles.paging}>
            <ArrowLeft />
            <p className={styles.pagingNumberOne}>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>...</p>
            <p>15</p>
            <ArrowRight />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
