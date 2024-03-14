'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import loginImage from '@/assets/images/loginpage.png';
import logoImage from '@/assets/images/logo.png';
import eyeOffImage from '@/assets/images/eye-off.png';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginAdmin() {
  const router = useRouter();

  const login = useCallback(() => {
    router.push('/admin/statistical');
  }, [router]);

  return (
    <div className={styles.container}>
      <Image src={loginImage} alt="login" className={styles.cover} />

      <div>
        <Image src={logoImage} alt="logo" className={styles.cover} />

        <h2 className={styles.title}>Xin chào!</h2>
        <p className={styles.desc}>Chào mừng đến với trang quản lý</p>

        <div className={styles.loginWrapper}>
          <input
            type="text"
            className={styles.input}
            placeholder="Email/SĐT của bạn"
          />
          <div className={styles.inputPass}>
            <input
              type="text"
              placeholder="Mật khẩu"
              className={styles.inputInner}
            />
            <Image src={eyeOffImage} alt="logo" />
          </div>
          <button className={styles.btnLogin} onClick={login}>
            Đăng nhập
          </button>
        </div>

        <p className={styles.forgotPass}>Quên mật khẩu</p>
      </div>
    </div>
  );
}
