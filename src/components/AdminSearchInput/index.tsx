import styles from './styles.module.css';
import SearchIcon from '@/assets/icons/search.svg';

export default function AdminSearchInput() {
  return (
    <div className={styles.container}>
      <SearchIcon />
      <input type="text" placeholder="Tìm kiếm" className={styles.input} />
    </div>
  );
}
