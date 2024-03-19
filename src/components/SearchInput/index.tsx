'use client';

import SearchIcon from '@/assets/icons/search.svg';

import styles from './styles.module.css';

export const SearchInput = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <SearchIcon />
      </div>

      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        className={styles.input}
      />
    </div>
  );
};
