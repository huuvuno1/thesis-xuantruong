'use client';

import AdminLayout from '@/layouts/AdminLayout';
import styles from './styles.module.css';
import AdminSearchInput from '@/components/AdminSearchInput';
import AdminButton from '@/components/AdminButton';
import EyeIcon from '@/assets/icons/EyeIcon.svg';
import themdanhmuc from '@/assets/images/themdanhmuc.png';
import Image from 'next/image';

export default function NewCategoriesAdmin() {
  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Thêm danh mục sản phẩm</h1>

          <AdminSearchInput />
        </div>

        <p className={styles.headerDesc}>thông tin danh mục sản phẩm</p>

        <div className={styles.content}>
          <div className={styles.btnViewWrapper}>
            <div className={styles.btnView}>
              <EyeIcon />
              <button>Xem trước</button>
            </div>
          </div>

          <div className={styles.formItemWrapperMain}>
            <div className={styles.formItemWrapper}>
              <div className={styles.formItem}>
                <p className={styles.formItemProductCode}>
                  Mã danh mục sản phẩm
                </p>
                <input
                  type="text"
                  placeholder="Mã danh mục sản phẩm"
                  className={styles.formItemInput}
                />
              </div>

              <div className={`${styles.formItem}`}>
                <p className={styles.formItemProductCode}>
                  Mã danh mục sản phẩm
                </p>
                <input
                  type="text"
                  placeholder="Mã danh mục sản phẩm"
                  className={`${styles.formItemInput} ${styles.formItemLong}`}
                />
              </div>
            </div>
          </div>

          <div className={styles.formItemDesc}>
            <div className={styles.formItemDescItem}>
              <p className={styles.formItemProductCode}>Mô tả</p>

              <div className={styles.formItemDescTextEditor}>
                <Image src={themdanhmuc} alt="icon" />
              </div>
            </div>

            <div className={styles.formItemDescItem}>
              <p className={styles.formItemProductCode}>
                Ảnh danh mục sản phẩm
              </p>

              <div className={styles.formItemDescImage}></div>
            </div>
          </div>

          <div className={styles.addProduct}>
            <AdminButton value="Thêm danh mục" />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
