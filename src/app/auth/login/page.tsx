'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import ggImage from '@/assets/images/google.png';
import facebookImage from '@/assets/images/facebook.png';
import loginBanner from '@/assets/images/loginBanner.png';
import eyeOffImage from '@/assets/images/eye-off.png';
import MainLayout from '@/layouts/MainLayout';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function Login() {
  const router = useRouter();

  const handleGotoRegister = useCallback(() => {
    router.push('/auth/register');
  }, [router]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log('login', username, password);

    if (username === 'admin@gmail.com' && password === '123456') {
      router.push('/');
      return;
    }

    setError('Tài khoản hoặc mật khẩu không đúng!');
  };
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <h1 className={styles.title}>Đăng nhập</h1>
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

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.form}>
            <input
              type="text"
              placeholder="Email/SĐT của bạn"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e?.target?.value)}
            />
            <div className={styles.input}>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e?.target?.value)}
              />
              <Image src={eyeOffImage} alt="eyeOffImage" />
            </div>
            <button onClick={handleLogin} className={styles.btnLogin}>
              Đăng nhập
            </button>
          </div>
          <div className={styles.actionWrapper}>
            <p onClick={handleGotoRegister}>Đăng ký tài khoản mới</p>
            <p>Quên mật khẩu</p>
          </div>
        </div>
        <div>
          <Image src={loginBanner} alt="loginBanner" />
        </div>
      </div>
    </MainLayout>
  );
}
