'use client';

import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';

import LockIcon from '@/assets/icons/LockIcon.svg';
import LogOutIcon from '@/assets/icons/LogOutIcon.svg';
import UserLineIcon from '@/assets/icons/UserLineIcon.svg';
import EyeOffIcon from '@/assets/icons/eye-off.svg';
import ArrowDownIcon from '@/assets/images/ArrowDownIcon.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.breadcum}>
          <p>Trang chủ</p>
          <p>/</p>
          <p>Tài khoản</p>
          <p>/</p>
          <p className={styles.breadcumActive}>Thông tin cá nhân</p>
        </div>

        <div className={styles.main}>
          <div className={styles.left}>
            <h5 className={styles.hello}>Xin chào Xuân Trường</h5>
            <p className={styles.desc}>Chào mừng đến với tài khoản</p>

            <div className={`${styles.btnWrapper}`}>
              <div className={`${styles.btn}, ${styles.btnActive}`}>
                <UserLineIcon />
                <p>Thông tin cá nhân</p>
              </div>
              <Link href={'/password'} className={`${styles.btn}`}>
                <LockIcon />
                <p>Thay đổi mật khẩu</p>
              </Link>
              <Link href={"/auth/login"} onClick={() => localStorage.clear()} className={`${styles.btn}`}>
                <LogOutIcon />
                <p>Đăng xuất</p>
              </Link>
            </div>
          </div>

          <div className={styles.rightWrapper}>
            <h5 className={styles.hello}>Xin chào Xuân Trường</h5>
            <p className={styles.rightDesc}>Chi tiết liên hệ</p>

            <div className={styles.right}>
              <div>
                <div className={styles.rightInputItem}>
                  <p className={styles.rightLabelName}>Họ và tên</p>
                  <input
                    className={styles.rightInput}
                    type="text"
                    placeholder="Vũ Xuân Trường"
                  />
                </div>

                <div className={styles.rightInputItemRow}>
                  <div className={styles.rightInputItem}>
                    <p className={styles.rightLabelName}>Email</p>
                    <input
                      className={styles.rightInput}
                      type="text"
                      placeholder="truong@gmail,com"
                    />
                  </div>

                  <div className={styles.rightInputItem}>
                    <p className={styles.rightLabelName}>Số điện thoại</p>
                    <input
                      className={styles.rightInput}
                      type="text"
                      placeholder="0987654321"
                    />
                  </div>
                </div>

                <div className={styles.rightInputItem}>
                  <p className={styles.rightLabelName}>Mật khẩu</p>
                  <div className={styles.rightInputW}>
                    <input type="password" placeholder="******" />

                    <EyeOffIcon />
                  </div>
                </div>
              </div>

              <p className={styles.address}>Địa chỉ</p>

              <div className={styles.rightDownDropItemRowD}>
                <div className={styles.rightDownDropItemRow}>
                  <div className={styles.rightDownDropItem}>
                    <p className={styles.rightDownDropItemCityName}>
                      Thành phố
                    </p>

                    <div className={styles.rightDownDropItemInput}>
                      <p>Hà Nội</p>

                      <Image src={ArrowDownIcon} alt="ArrowDownIcon" />
                    </div>
                  </div>

                  <div className={styles.rightDownDropItem}>
                    <p className={styles.rightDownDropItemCityName}>
                      Quận/Huyện
                    </p>

                    <div className={styles.rightDownDropItemInput}>
                      <p>Hoàng Mai</p>
                    </div>
                  </div>
                </div>

                <div className={styles.rightDownDropItemRow}>
                  <div className={styles.rightDownDropItem}>
                    <p className={styles.rightDownDropItemCityName}>
                      Xã/Phường
                    </p>

                    <div className={styles.rightDownDropItemInput}>
                      <p>Định Công</p>

                      <Image src={ArrowDownIcon} alt="ArrowDownIcon" />
                    </div>
                  </div>

                  <div className={styles.rightDownDropItem}>
                    <p className={styles.rightDownDropItemCityName}>Địa chỉ</p>

                    <div className={styles.rightDownDropItemInput}>
                      <p>9s Định Công</p>
                    </div>
                  </div>
                </div>

                <button className={styles.btnWrapperrrr}>Lưu thay đổi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
