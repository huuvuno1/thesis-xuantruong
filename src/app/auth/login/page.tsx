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
import LoginResponsive from '@/responsive/LoginResponsive';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

export default function Login() {
  const router = useRouter();

  const handleGotoRegister = useCallback(() => {
    router.push('/auth/register');
  }, [router]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (
      username === 'user' &&
      password === 'user' &&
      typeof window !== 'undefined'
    ) {
      localStorage.setItem('is_login', 'true');
      router.push('/');
      return;
    }

    setError('Tài khoản hoặc mật khẩu không đúng!');
  };
  return (
    <MainLayout>
      <div className={styles.desktopOnly}>
        <div className={styles.container}>
          <div className={styles.loginForm}>
            <h1 className={styles.title}>Đăng nhập</h1>
            <p className={styles.desc}>
              Đăng nhập để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền cho bất
              kỳ đơn hàng nào.
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
              <TextField
                label="Email/SĐT của bạn"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e?.target?.value)}
                sx={{
                  m: 1,
                  width: '100%',
                  borderRadius: '20px',
                  '& fieldset': { borderRadius: '20px' },
                }}
                InputProps={{ classes: { input: styles.inputinput } }}
              />
              <FormControl
                sx={{ m: 1, width: '100%', height: '75px' }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Mật khẩu
                </InputLabel>
                <OutlinedInput
                  sx={{
                    borderRadius: '20px',
                    height: '75px',
                    '& fieldset': { borderRadius: '20px', height: '75px' },
                  }}
                  value={password}
                  onChange={(e) => setPassword(e?.target.value)}
                  id="outlined-adornment-password"
                  type={'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <Image src={eyeOffImage} alt="logo" />
                    </InputAdornment>
                  }
                  label="Mật khẩu"
                />
              </FormControl>
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
      </div>

      <div className={styles.mobileOnly}>
        <LoginResponsive />
      </div>
    </MainLayout>
  );
}
