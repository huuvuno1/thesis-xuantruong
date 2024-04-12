'use client';

import UserIcon from '@/assets/icons/account.svg';
import CartIcon from '@/assets/icons/cart.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import LogoIcon from '@/assets/images/LogoWhite.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { SearchInput } from '../SearchInput';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import HeaderMenu from '../HeaderMenu';
import LoginAvatar from '@/assets/images/LoginAvatar.png';

export const Header = () => {
  const router = useRouter();

  const handleGotoFavoritePage = useCallback(() => {
    router.push('/favorite');
  }, [router]);

  const isLogin = useMemo(() => {
    if (typeof window !== 'undefined') {
      return localStorage?.getItem('is_login');
    }

    return false;
  }, []);
  return (
    <header className={`${styles.container} ${styles.desktopOnly}`}>
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
                className={`text-lg font-medium ${styles.menuItem} ${styles.menuProduct}`}
              >
                Sản phẩm
                <HeaderMenu className={styles.menuShow} />
              </Link>
              <Link
                className={`text-lg font-medium ${styles.menuItem}`}
                href={'/news'}
              >
                Tin tức
              </Link>
              <Link
                className={`text-lg font-medium ${styles.menuItem}`}
                href={'/intro'}
              >
                Giới thiệu
              </Link>
              <Link
                className={`text-lg font-medium ${styles.menuItem}`}
                href={'/contacts'}
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

          {isLogin ? (
            <Link href={'/profile'}>
              <Image src={LoginAvatar} alt="LoginAvatar" />
            </Link>
          ) : (
            <Link href={'/auth/login'}>
              <UserIcon />
            </Link>
          )}

          <Link href={'/cart'}>
            <CartIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};
