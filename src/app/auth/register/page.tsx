'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import ggImage from '@/assets/images/google.png';
import facebookImage from '@/assets/images/facebook.png';
import loginBanner from '@/assets/images/loginBanner.png';
import eyeOffImage from '@/assets/images/eye-off.png';
import MainLayout from '@/layouts/MainLayout';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function Register() {
  const router = useRouter();

  const handleGotoLogin = useCallback(() => {
    router.push('/auth/login');
  }, [router]);
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <h1 className={styles.title}>Đăng ký</h1>
          <p className={styles.desc}>
            Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền cho bất kỳ
            đơn hàng nào.
          </p>
          <strong className={styles.subtitle}>
            Đăng nhập hoặc đăng ký (miễn phí)
          </strong>

          <div className={styles.socialWrapper}>
            <Image src={ggImage} alt="google" />
            <Image src={facebookImage} alt="facebook" />
          </div>

          <div className={styles.lineWrapper}>
            <div className={styles.line1}></div>
            <p>Hoặc</p>
            <div className={styles.line2}></div>
          </div>

          <div className={styles.form}>
            <div className={styles.formItem}>
              <input
                type="text"
                placeholder="Tên của bạn"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="SĐT của bạn"
                className={styles.input}
              />
            </div>
            <input
              type="text"
              placeholder="Email của bạn"
              className={styles.input}
            />
            <div className={styles.input}>
              <input type="text" placeholder="Mật khẩu" />
              <Image src={eyeOffImage} alt="eyeOffImage" />
            </div>
            <div className={styles.input}>
              <input type="text" placeholder="Nhập lại mật khẩu" />
              <Image src={eyeOffImage} alt="eyeOffImage" />
            </div>
            <button className={styles.btnLogin}>Đăng ký</button>
          </div>
          <div className={styles.actionWrapper}>
            <p onClick={handleGotoLogin}>Đăng nhập</p>
          </div>
        </div>
        <div>
          <Image src={loginBanner} alt="loginBanner" />
        </div>
      </div>
    </MainLayout>
  );
}
