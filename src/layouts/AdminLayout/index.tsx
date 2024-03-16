import AdminHeader from '@/components/AdminHeader';
import styles from './styles.module.css';
import AdminNavbar from '@/components/AdminNavbar';

export default function AdminLayout({ children }: any) {
  return (
    <div className={styles.container}>
      <AdminHeader />
      <div className={styles.main}>
        <AdminNavbar />
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
