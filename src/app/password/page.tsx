'use client';

import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';

import LogOutIcon from '@/assets/icons/LogOutIcon.svg';
import UserXanhIcon from '@/assets/icons/UserXanhIcon.svg';
import WhiteLockIcon from '@/assets/icons/WhiteLockIcon.svg';
import EyeOffIcon from '@/assets/icons/eye-off.svg';
import Link from 'next/link';

export default function Password() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.breadcum}>
          <p>Trang chủ</p>
          <p>/</p>
          <p>Tài khoản</p>
          <p>/</p>
          <p className={styles.breadcumActive}>Thay đổi mật khẩu</p>
        </div>

        <div className={styles.main}>
          <div className={styles.left}>
            <h5 className={styles.hello}>Xin chào Xuân Trường</h5>
            <p className={styles.desc}>Chào mừng đến với tài khoản</p>

            <div className={`${styles.btnWrapper}`}>
              <Link href={'/profile'} className={`${styles.btn}`}>
                <UserXanhIcon />
                <p>Thông tin cá nhân</p>
              </Link>
              <Link
                href={'/password'}
                className={`${styles.btn} ${styles.btnActive}`}
              >
                <WhiteLockIcon />
                <p>Thay đổi mật khẩu</p>
              </Link>
              <Link href={"/auth/register"} onClick={() => {
                localStorage.clear();
              }} className={`${styles.btn}`}>
                <LogOutIcon />
                <p>Đăng xuất</p>
              </Link>
            </div>
          </div>

          <div className={styles.rightWrapper}>
            <h5 className={styles.hello}>Thay đổi mật khẩu</h5>

            <div className={styles.right}>
              <div className={styles.rightInputItemWW}>
                <div className={styles.rightInputItem}>
                  <p className={styles.rightLabelName}>Mật khẩu hiện tại</p>
                  <div className={styles.rightInputW}>
                    <input type="password" placeholder="******" />

                    <EyeOffIcon />
                  </div>
                </div>

                <div className={styles.rightInputItem}>
                  <p className={styles.rightLabelName}>Mật khẩu mới</p>
                  <div className={styles.rightInputW}>
                    <input type="password" placeholder="******" />

                    <EyeOffIcon />
                  </div>
                </div>

                <div className={styles.rightInputItem}>
                  <p className={styles.rightLabelName}>Nhập lại mật khẩu</p>
                  <div className={styles.rightInputW}>
                    <input type="password" placeholder="******" />

                    <EyeOffIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.btnGroup}>
              <button className={styles.ccbtn}>Hủy</button>

              <button className={`${styles.ccbtn} ${styles.ccbtnActive}`}>
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
