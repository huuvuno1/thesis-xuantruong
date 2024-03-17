'use client';

import AdminLayout from '@/layouts/AdminLayout';
import styles from './styles.module.css';
import AdminSearchInput from '@/components/AdminSearchInput';
import AdminButton from '@/components/AdminButton';
import Product1Image from '@/assets/images/product-table-1.png';
import Image from 'next/image';
import PencilIcon from '@/assets/icons/pencil.svg';
import DeleteIcon from '@/assets/icons/DeleteIcon.svg';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const products = [
  {
    code: '#123456',
    name: 'Áo',
    quantity: 40,
    up: '45%',
    revenue: '149.500.000',
  },
  {
    code: '#123456',
    name: 'Quần',
    quantity: 20,
    up: '68% ',
    revenue: '19.500.000',
  },
  {
    code: '#123456',
    name: 'Phụ kiện',
    quantity: 15,
    up: '120% ',
    revenue: '59.200.000',
  },
  {
    code: '#123456',
    name: 'BST back to school',
    quantity: 12,
    up: '8.9% ',
    revenue: '219.300.000',
  },
  {
    code: '#123456',
    name: 'Sản phẩm SALE',
    quantity: 8,
    up: '143%',
    revenue: '329.600.000',
  },
];

export default function CategoriesAdmin() {
  const router = useRouter();

  const handleGoToNewCategory = useCallback(() => {
    router.push('/admin/categories/new');
  }, [router]);

  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Danh mục sản phẩm</h1>

          <div className={styles.headerAction}>
            <AdminSearchInput />

            <AdminButton
              value="Thêm danh mục"
              onClick={handleGoToNewCategory}
            />
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.row}>
            <div className={`${styles.col} ${styles.code}`}>Mã danh mục</div>
            <div className={`${styles.col} ${styles.name}`}>Tên danh mục</div>
            <div className={`${styles.col} ${styles.quantity}`}>
              Số lượng sản phẩm
            </div>
            <div className={`${styles.col} ${styles.up}`}>Tăng trưởng</div>
            <div className={`${styles.col} ${styles.revenue}`}>Doanh thu</div>
            <div className={`${styles.col} ${styles.action}`}>Hoạt động</div>
          </div>

          {products?.map((p) => (
            <div className={styles.row} key={p.name}>
              <div className={`${styles.code1} ${styles.code}`}>{p.code}</div>
              <div className={`${styles.name1} ${styles.name}`}>
                <Image src={Product1Image} alt="product" />
                <p>{p.name}</p>
              </div>
              <div className={`${styles.quantity1} ${styles.quantity}`}>
                {p.quantity}
              </div>
              <div className={`${styles.up1} ${styles.up}`}>{p.up}</div>
              <div className={`${styles.revenue1} ${styles.revenue}`}>
                {p.revenue}
              </div>
              <div className={`${styles.action1} ${styles.action}`}>
                <PencilIcon />
                <DeleteIcon />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>Hiển thị 5/5 danh mục</div>
      </div>
    </AdminLayout>
  );
}
