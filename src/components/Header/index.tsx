'use client';

import UserIcon from '@/assets/icons/account.svg';
import CartIcon from '@/assets/icons/cart.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import LogoIcon from '@/assets/images/LogoWhite.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { SearchInput } from '../SearchInput';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();

  const handleGotoFavoritePage = useCallback(() => {
    router.push('/favorite');
  }, [router]);
  return (
    <header className={styles.container}>
      <div
        className={`flex items-center justify-between px-8 py ${styles.header}`}
      >
        <div className={styles.menuLeft}>
          <Link href={'/'}>
            <Image src={LogoIcon} alt="" className={styles.logo} />
          </Link>
          <div className={styles.menu}>
            <div className={styles.menuPc}>
              <Link
                href="/products"
                className={`text-lg font-medium ${styles.menuItem}`}
              >
                Sản phẩm
              </Link>
              <Link
                className={`text-lg font-medium ${styles.menuItem}`}
                href={'/female'}
              >
                Tin tức
              </Link>
              <Link
                className={`text-lg font-medium ${styles.menuItem}`}
                href={'/male'}
              >
                Giới thiệu
              </Link>
              <Link
                className={`text-lg font-medium ${styles.menuItem}`}
                href={'/male'}
              >
                Liên hệ
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`cursor-pointer flex items-center justify-between ${styles.menuRight}`}
        >
          <SearchInput />
          <HeartIcon onClick={handleGotoFavoritePage} />
          <UserIcon />
          <CartIcon />
        </div>
      </div>
    </header>
  );
};
