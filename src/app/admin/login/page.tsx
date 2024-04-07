/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import loginImage from '@/assets/images/loginpage.png';
import logoImage from '@/assets/images/logo.png';
import eyeOffImage from '@/assets/images/eye-off.png';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginAdmin() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = useCallback(() => {
    if (username === 'admin' && password === 'admin') {
      setError('');
      router.push('/admin/statistical');

      return;
    }

    setError('Tài khoản mật khẩu sai');
  }, [router, username, password]);

  return (
    <div className={styles.container}>
      <Image src={loginImage} alt="login" className={styles.cover} />

      <div>
        <Image src={logoImage} alt="logo" className={styles.cover} />

        <h2 className={styles.title}>Xin chào!</h2>
        <p className={styles.desc}>Chào mừng đến với trang quản lý</p>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.loginWrapper}>
          <input
            type="text"
            className={styles.input}
            placeholder="Email/SĐT của bạn"
            value={username}
            onChange={(e) => setUsername(e?.target.value)}
          />
          <div className={styles.inputPass}>
            <input
              type="password"
              placeholder="Mật khẩu"
              className={styles.inputInner}
              value={password}
              onChange={(e) => setPassword(e?.target.value)}
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
