'use client';

import AdminLayout from '@/layouts/AdminLayout';
import styles from './styles.module.css';
import AdminSearchInput from '@/components/AdminSearchInput';
import EyeIcon from '@/assets/icons/EyeIcon.svg';
import PlusSquareIcon from '@/assets/icons/plus-square.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import AdminButton from '@/components/AdminButton';

export default function NewProduct() {
  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Thêm sản phẩm</h1>

          <AdminSearchInput />
        </div>

        <div className={styles.form}>
          <div className={styles.btnViewWrapper}>
            <div className={styles.btnView}>
              <EyeIcon />
              <button>Xem trước</button>
            </div>
          </div>

          <div className={styles.formItemWrapperMain}>
            <div className={styles.formItemWrapper}>
              <div className={styles.formItem}>
                <p className={styles.formItemProductCode}>Mã sản phẩm</p>
                <input
                  type="text"
                  placeholder="Mã sản phẩm"
                  className={styles.formItemInput}
                />
              </div>

              <div className={`${styles.formItem}`}>
                <p className={styles.formItemProductCode}>Tên sản phẩm</p>
                <input
                  type="text"
                  placeholder="Tên sản phẩm"
                  className={`${styles.formItemInput} ${styles.formItemLong}`}
                />
              </div>
            </div>
            <div className={styles.formItemWrapper}>
              <div className={styles.formItem}>
                <p className={styles.formItemProductCode}>Giá bán</p>
                <input
                  type="text"
                  placeholder="Nhập giá bán"
                  className={styles.formItemInput}
                />
              </div>

              <div className={`${styles.formItem}`}>
                <p className={styles.formItemProductCode}>Danh mục sản phẩm</p>
                <input
                  type="text"
                  placeholder="Chọn danh mục sản phẩm"
                  className={`${styles.formItemInput} ${styles.formItemLong}`}
                />
              </div>
            </div>
          </div>

          <div className={styles.formDescWrapper}>
            <p className={styles.formDesc}>Mô tả</p>
          </div>

          <div className={styles.formImage}>
            <p className={styles.formDesc}>Ảnh sản phẩm</p>

            <div className={styles.pointWrapperHorizontal}>
              <div className={styles.pointWrapper}>
                <div className={styles.point}></div>
                <p>Thêm hình ảnh chính Kích thước tối đa 5MB</p>
              </div>

              <div className={styles.smallPointWrapper1}>
                <div className={styles.smallPointWrapper}>
                  <div className={styles.smallPoint}></div>
                  <p className={styles.smallPointText}>Chính diện</p>
                </div>

                <div className={styles.smallPointWrapper}>
                  <div className={styles.smallPoint}></div>
                  <p className={styles.smallPointText}>Ảnh chụp cận</p>
                </div>
              </div>

              <div className={styles.smallPointWrapper1}>
                <div className={styles.smallPointWrapper}>
                  <div className={styles.smallPoint}></div>
                  <p className={styles.smallPointText}>Góc nghiêng</p>
                </div>

                <div className={styles.smallPointWrapper}>
                  <div className={styles.smallPoint}></div>
                  <p className={styles.smallPointText}>Biến thể</p>
                </div>
              </div>

              <div className={styles.smallPointWrapper1}>
                <div className={styles.smallPointWrapper}>
                  <div className={styles.smallPoint}></div>
                  <p className={styles.smallPointText}>Biến thể</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formColor}>
            <div className={styles.formColorTitle}>
              <p className={styles.formColorTitleText}>Màu sắc - Kích thước</p>
              <PlusSquareIcon />
            </div>

            <div className={styles.colorItem}>
              <div className={styles.formItem}>
                <input
                  type="text"
                  placeholder="Nhập tên màu sắc"
                  className={styles.formItemInput}
                />
              </div>

              <div className={styles.moreSize}>
                <p className={styles.moreSizeText}>Thêm kích thước, số lượng</p>

                <PlusIcon />
              </div>
            </div>
          </div>

          <div className={styles.addProduct}>
            <AdminButton value="Thêm sản phẩm" />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
