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
    id: '#127581',
    buyer: 'Đào Phương Anh',
    stock: 'Áo sơ mi n35',
    status: 'Chờ vận chuyển',
    price: '12.565.000',
  },
  {
    id: '#158572',
    buyer: 'Lê Văn Đức',
    stock: 'Áo sơ mi cộc tay 365 Z133',
    status: 'Chờ lấy hàng',
    price: '765.000',
  },
  {
    id: '#114585',
    buyer: 'Kiều Hoàng Dương',
    stock: 'Quần tây nam cao cấp g5',
    status: 'Chờ lấy hàng',
    price: '12.565.000',
  },
  {
    id: '#115786',
    buyer: 'Nguyễn Đình Văn',
    stock: 'Thắt lưng bản nhỏ f44',
    status: 'Đã hủy',
    price: '165.000',
  },
  {
    id: '#125546',
    buyer: 'Nguyễn Hữu Vũ',
    stock: 'Áo len giữ nhiệt v34',
    status: 'Hoàn thành',
    price: '465.000',
  },
  {
    id: '#114556',
    buyer: 'Vũ Xuân Trường',
    stock: 'Quần âu 365 K21 v2 giới hạn ',
    status: 'Hoàn thành',
    price: '2.565.000',
  },
  {
    id: '#115542',
    buyer: 'Mai Thế Tùng',
    stock: 'Thắt lưng thời trang v22',
    status: 'Hoàn thành',
    price: '165.000',
  },
  {
    id: '#128874',
    buyer: 'Đắc Tâm',
    stock: 'Áo len giữ nhiệt v34',
    status: 'Hoàn thành',
    price: '465.000',
  },
];

export default function LoginAdmin() {
  const router = useRouter();

  const handleGotoOrderDetail = useCallback(() => {
    router.push('/admin/orders/detail');
  }, [router]);
  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.headerTitle}>Quản lý đơn hàng</h3>

          <div className={styles.headerAction}>
            <AdminDropDown value="Sắp xếp theo: Giá tiền" />
            <AdminSearchInput />
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.menu}>
            <p>Tất cả</p>
            <p>Chờ vận chuyển</p>
            <p>Chờ lấy hàng</p>
            <p>Đang vận chuyển</p>
            <p>Đã giao hàng</p>
            <p>Đã hoàn thành</p>
            <p>Đã hủy</p>
          </div>

          <div className={styles.row}>
            <p className={styles.id}>ID đơn hàng</p>
            <p className={styles.buyer}>Người mua</p>
            <p className={styles.stock}>Mặt hàng</p>
            <p className={styles.status}>Trạng thái đơn hàng</p>
            <p className={styles.price}>Giá tiền</p>
            <p className={styles.action}>Thao tác</p>
          </div>

          {data?.map((d) => (
            <div
              className={styles.row1}
              key={d.id}
              onClick={handleGotoOrderDetail}
            >
              <p className={`${styles.id} ${styles.id1}`}>{d.id}</p>
              <p className={`${styles.buyer} ${styles.buyer1}`}>{d.buyer}</p>
              <p className={`${styles.stock} ${styles.stock1}`}>{d.stock}</p>
              <p
                className={`${styles.status} ${styles.status1} ${
                  'Chờ vận chuyển' === d.status && styles.status1Red
                } ${'Chờ lấy hàng' === d.status && styles.status1Red} ${
                  'Đã hủy' === d.status && styles.status1Red
                }`}
              >
                {d.status}
              </p>
              <p className={`${styles.price} ${styles.price1}`}>{d.price}</p>
              <p className={`${styles.action} ${styles.action1}`}>
                <PencilIcon />
                <DeleteIcon />
              </p>
            </div>
          ))}
        </div>

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
