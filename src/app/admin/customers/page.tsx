'use client';

import AdminLayout from '@/layouts/AdminLayout';
import styles from './styles.module.css';
import AdminDropDown from '@/components/AdminDropDown';
import AdminSearchInput from '@/components/AdminSearchInput';
import PencilIcon from '@/assets/icons/pencil.svg';
import DeleteIcon from '@/assets/icons/DeleteIcon.svg';
import ArrowLeft from '@/assets/icons/ArrowLeft.svg';
import ArrowRight from '@/assets/icons/ArrowRight.svg';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const data = [
  {
    id: 'Nguyễn Vũ Trung Nguyên',
    buyer: 'trungnguyen12@gmail.com',
    stock: '0987654321',
    status: 'Thanh Xuân, Hà Nội',
    price: '20/09/2023',
  },
  {
    id: 'Nguyễn Đình Văn',
    buyer: 'trungnguyen12@gmail.com',
    stock: '0987654321',
    status: 'Thanh Xuân, Hà Nội',
    price: '20/09/2023',
  },
  {
    id: 'Nguyễn Vũ Nguyên',
    buyer: 'trungnguyen12@gmail.com',
    stock: '0987654321',
    status: 'Thanh Xuân, Hà Nộihàng',
    price: '20/09/2023',
  },
  {
    id: 'Phạm Lê Trung Nguyên',
    buyer: 'trungnguyen12@gmail.com',
    stock: '0987654321',
    status: 'Thanh Xuân, Hà Nội',
    price: '20/09/2023',
  },
  {
    id: 'Vũ Đình Bắc',
    buyer: 'trungnguyen12@gmail.com',
    stock: '0987654321',
    status: 'Thanh Xuân, Hà Nội',
    price: '20/09/2023',
  },
  {
    id: 'Nguyễn Hoàng Đức',
    buyer: 'trungnguyen12@gmail.com',
    stock: '0987654321',
    status: 'Thanh Xuân, Hà Nội',
    price: '20/09/2023',
  },
];

export default function LoginAdmin() {
  const router = useRouter();

  const handleGotoCustomerDetail = useCallback(() => {
    router.push('/admin/customers/detail');
  }, [router]);
  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.headerTitle}>Khách hàng</h3>

          <div className={styles.headerAction}>
            <AdminDropDown value="Sắp xếp theo: Mã KH" />
            <AdminSearchInput />
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.row}>
            <p className={styles.id}>Tên khách hàng</p>
            <p className={styles.buyer}>Địa chỉ email</p>
            <p className={styles.stock}>Số điện thoại</p>
            <p className={styles.status}>Địa chỉ hoàn thành</p>
            <p className={styles.price}>Giao dịch cuối cùng</p>
            <p className={styles.action}>Hoạt động</p>
          </div>

          {data?.map((d) => (
            <div
              className={styles.row1}
              key={d.id}
              onClick={handleGotoCustomerDetail}
            >
              <p className={`${styles.id} ${styles.id1}`}>{d.id}</p>
              <p className={`${styles.buyer} ${styles.buyer1}`}>{d.buyer}</p>
              <p className={`${styles.stock} ${styles.stock1}`}>{d.stock}</p>
              <p className={`${styles.status} ${styles.status1}`}>{d.status}</p>
              <p className={`${styles.price} ${styles.price1}`}>{d.price}</p>
              <p className={`${styles.action} ${styles.action1}`}>
                <PencilIcon />
                <DeleteIcon />
              </p>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>Hiển thị 6/159 khách hàng</p>

          <div className={styles.paging}>
            <ArrowLeft />
            <p className={styles.pagingNumberOne}>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>...</p>
            <p>19</p>
            <ArrowRight />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
