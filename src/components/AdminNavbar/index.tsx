import { usePathname, useRouter } from 'next/navigation';
import styles from './styles.module.css';

import DatabaseIcon from '@/assets/icons/database.svg';
import StatisticalIcon from '@/assets/icons/statistical.svg';
import CategoriesIcon from '@/assets/icons/categories.svg';
import OrdersIcon from '@/assets/icons/shopping-bag.svg';
import UserIcon from '@/assets/icons/user.svg';
import CustomerIcon from '@/assets/icons/customer.svg';

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.menuIconNoActive} ${
          '/admin/statistical' === pathname && styles.menuIcon
        }`}
        onClick={() => {
          router.push('/admin/statistical');
        }}
      >
        <StatisticalIcon
          className={`${
            '/admin/statistical' === pathname && styles.activeIcon
          }`}
        />
        <p className={styles.name}>Thống kê</p>
      </button>

      <button
        className={`${styles.menuIconNoActive} ${
          '/admin/products' === pathname && styles.menuIcon
        } ${'/admin/products/new' === pathname && styles.menuIcon}`}
        onClick={() => {
          router.push('/admin/products');
        }}
      >
        <DatabaseIcon
          className={`${'/admin/products' === pathname && styles.activeIcon}`}
        />
        <p className={styles.name}>Sản phẩm</p>
      </button>

      <button
        className={`${styles.menuIconNoActive} ${
          '/admin/categories' === pathname && styles.menuIcon
        } ${styles.menuIconNoActive} ${
          '/admin/categories/new' === pathname && styles.menuIcon
        }`}
        onClick={() => {
          router.push('/admin/categories');
        }}
      >
        <CategoriesIcon
          className={`${'/admin/categories' === pathname && styles.activeIcon}`}
        />
        <p className={styles.name}>Danh mục</p>
      </button>

      <button
        className={`${styles.menuIconNoActive} ${
          '/admin/orders' === pathname && styles.menuIcon
        } ${'/admin/orders/detail' === pathname && styles.menuIcon}`}
        onClick={() => {
          router.push('/admin/orders');
        }}
      >
        <OrdersIcon
          className={`${'/admin/orders' === pathname && styles.activeIcon}`}
        />
        <p className={styles.name}>Đơn hàng</p>
      </button>

      <button
        className={`${styles.menuIconNoActive} ${
          '/admin/users' === pathname && styles.menuIcon
        }`}
        onClick={() => {
          router.push('/admin/users');
        }}
      >
        <UserIcon
          className={`${'/admin/users' === pathname && styles.activeIcon}`}
        />
        <p className={styles.name}>Nhân viên</p>
      </button>

      <button
        className={`${styles.menuIconNoActive} ${
          '/admin/customers' === pathname && styles.menuIcon
        }`}
        onClick={() => {
          router.push('/admin/customers');
        }}
      >
        <CustomerIcon
          className={`${'/admin/customers' === pathname && styles.activeIcon}`}
        />
        <p className={styles.name}>Khách hàng</p>
      </button>
    </div>
  );
}
