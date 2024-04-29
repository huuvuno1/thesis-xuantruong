/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import loginImage from '@/assets/images/loginpage.png';
import logoImage from '@/assets/images/logo.png';
import eyeOffImage from '@/assets/images/eye-off.png';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

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
          <TextField
            autoComplete="off"
            label="Email/SĐT của bạn"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e?.target.value)}
            sx={{
              m: 1,
              width: '100%',
              height: '75px',
              borderRadius: '20px',
              '& fieldset': { borderRadius: '20px', height: '75px' },
            }}
          />
          <FormControl
            sx={{ m: 1, width: '100%', height: '75px' }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Mật khẩu
            </InputLabel>
            <OutlinedInput
              autoComplete="off"
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
          <button className={styles.btnLogin} onClick={login}>
            Đăng nhập
          </button>
        </div>

        <p className={styles.forgotPass}>Quên mật khẩu</p>
      </div>
    </div>
  );
}
