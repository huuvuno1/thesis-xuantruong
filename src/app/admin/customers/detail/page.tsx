'use client';

import AdminLayout from '@/layouts/AdminLayout';
import styles from './styles.module.css';
import AdminSearchInput from '@/components/AdminSearchInput';
import ArrowLeft from '@/assets/icons/ArrowLeft.svg';
import ArrowRight from '@/assets/icons/ArrowRight.svg';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import AvatarImage from '@/assets/images/avatar.png';
import Image from 'next/image';

const data = [
  {
    id: '#114556',
    buyer: 'Quần âu 365 K21 v2 giới hạn ',
    stock: '2',
    status: '2.565.000',
    price: '20/09/2023',
  },
  {
    id: '#158572',
    buyer: 'Áo sơ mi cộc tay 365 Z133',
    stock: '3',
    status: '765.000',
    price: '21/08/2023',
  },
  {
    id: '#114585',
    buyer: 'Quần tây nam cao cấp g5  ',
    stock: '4',
    status: '12.565.000',
    price: '12/12/2023',
  },
  {
    id: '#115786',
    buyer: 'Thắt lưng bản nhỏ f44',
    stock: '5',
    status: '165.000',
    price: '12/09/2023',
  },
  {
    id: '#125546',
    buyer: 'Áo len giữ nhiệt v34',
    stock: '3',
    status: '465.000',
    price: '12/09/2023',
  },
  {
    id: '#127581',
    buyer: 'Áo sơ mi n35',
    stock: '6',
    status: '12.565.000',
    price: '31/12/2023',
  },
  {
    id: '#115542',
    buyer: 'Thắt lưng thời trang v22',
    stock: '6',
    status: '165.000',
    price: '23/06/2023',
  },
  {
    id: '#128874',
    buyer: 'Áo len giữ nhiệt v34',
    stock: '3',
    status: '465.000',
    price: '12/07/2023',
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
          <h3 className={styles.headerTitle}>Chi tiết khách hàng</h3>

          <div className={styles.headerAction}>
            <AdminSearchInput />
          </div>
        </div>

        <div className={styles.profile}>
          <Image src={AvatarImage} alt="avatar" />

          <div className={styles.usernameWrapper}>
            <p className={styles.username}>Vũ Xuân Trường</p>

            <div className={styles.userInfoWrapper}>
              <div className={styles.userInfoWrapperItem}>
                <p>Địa chỉ email</p>
                <p>Email: truong.vx22@gmail.com</p>
              </div>

              <div className={styles.userInfoWrapperItem}>
                <p>Số điện thoại</p>
                <p>SĐT : 0987654321</p>
              </div>

              <div className={styles.userInfoWrapperItem}>
                <p>Địa chỉ giao hàng</p>
                <p>99/223 Định Công, Hoàng Mai, Hà Nội</p>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.historyLine}>Lịch sử giao dịch</p>

        <div className={styles.table}>
          <div className={styles.row}>
            <p className={styles.id}>ID đơn hàng </p>
            <p className={styles.buyer}>Mặt hàng đã mua</p>
            <p className={styles.stock}>Số lượng</p>
            <p className={styles.status}>Giá tiền</p>
            <p className={styles.price}>Ngày mua hàng</p>
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
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
