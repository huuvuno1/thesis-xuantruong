'use client';

import ArrowLeft from '@/assets/icons/ArrowLeft.svg';
import ArrowRight from '@/assets/icons/ArrowRight.svg';
import DeleteIcon from '@/assets/icons/DeleteIcon.svg';
import PencilIcon from '@/assets/icons/pencil.svg';
import AdminDropDown from '@/components/AdminDropDown';
import AdminSearchInput from '@/components/AdminSearchInput';
import AdminLayout from '@/layouts/AdminLayout';
import styles from './styles.module.css';

const data = [
  {
    id: '#123456',
    buyer: 'Nguyễn Vũ Trung Nguyên',
    stock: 'trungnguyen12@gmail.com',
    status: '0987654321',
    price: 'Thanh Xuân, Hà Nội',
  },
  {
    id: '#123456',
    buyer: 'Nguyễn Đình Văn',
    stock: 'trungnguyen12@gmail.com',
    status: '0987654321',
    price: 'Thanh Xuân, Hà Nội',
  },
  {
    id: '#123456',
    buyer: 'Vũ Xuân Trường',
    stock: 'trungnguyen12@gmail.com',
    status: '0987654321',
    price: 'Thanh Xuân, Hà Nội',
  },
  {
    id: '#123456',
    buyer: 'Nguyễn Lê Việt Phan',
    stock: 'Thắt lưng bản nhỏ f44',
    status: '0987654321',
    price: 'Thanh Xuân, Hà Nội',
  },
  {
    id: '#123456',
    buyer: 'Trấn Thị Phương Anh',
    stock: 'Áo len giữ nhiệt v34',
    status: '0987654321',
    price: 'Thanh Xuân, Hà Nội',
  },
  {
    id: '#123456',
    buyer: 'Đinh Quốc Đạt',
    stock: 'Quần âu 365 K21 v2 giới hạn ',
    status: '0987654321',
    price: 'Thanh Xuân, Hà Nội',
  },
  {
    id: '#123456',
    buyer: 'Trần Văn Tiến',
    stock: 'Thắt lưng thời trang v22',
    status: '0987654321',
    price: 'Thanh Xuân, Hà Nội',
  },
];

export default function LoginAdmin() {
  return (
    <AdminLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.headerTitle}>Nhân viên</h3>

          <div className={styles.headerAction}>
            <AdminDropDown value="Sắp xếp theo: Mã NV" />
            <AdminSearchInput />
          </div>
        </div>

        <div className={styles.table}>
          <div className={styles.row}>
            <p className={styles.id}>Mã nhân viên</p>
            <p className={styles.buyer}>Tên nhân viên</p>
            <p className={styles.stock}>Địa chỉ email</p>
            <p className={styles.status}>Số điện thoại</p>
            <p className={styles.price}>Địa chỉ nhân viên</p>
            <p className={styles.action}>Hoạt động</p>
          </div>

          {data?.map((d) => (
            <div className={styles.row1} key={d.id}>
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
          <p className={styles.footerText}>Hiển thị 7/20 nhân viên</p>

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
