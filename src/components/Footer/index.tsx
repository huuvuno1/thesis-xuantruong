'use client';
import Image from 'next/image';
import styles from './styles.module.css';

import bocongthuong from '@/assets/images/bocongthuong.png';
import contactUrl from '@/assets/images/contact.png';
import mailUrl from '@/assets/images/mail.png';
import map from '@/assets/images/map.png';
import phoneUrl from '@/assets/images/phone.png';
import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const notify = () => {
    setOpen(false);
    return toast.success('365 sẽ liên hệ với bạn sớm nhất!', {
      position: 'top-center',

      style: {
        fontSize: '14px',
      },
    });
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box className={styles.modalBox}>
          <h3 className={styles.modalTitle}>
            Vui lòng điền thông tin để chúng mình có thể hỗ trợ bạn!
          </h3>

          <div className={styles.modalMain}>
            <input
              className={styles.modalInput}
              type="text"
              placeholder="Họ và tên"
            />

            <div className={styles.modalInputWrapper}>
              <input
                className={styles.modalInput}
                type="text"
                placeholder="Email"
              />
              <input
                className={styles.modalInput}
                type="text"
                placeholder="Số điện thoại"
              />
            </div>

            <input
              className={styles.modalInput}
              type="text"
              placeholder="Nội dung muốn nhắn nhủ tới 365"
            />
          </div>

          <button className={styles.anyquestionbtn} onClick={notify}>
            Gửi hỗ trợ
          </button>
        </Box>
      </Modal>
      <footer className={`${styles.container} ${styles.desktopOnly}`}>
        <div className={styles.container1Wrapepr}>
          <div className={styles.container1}>
            <div className={styles.content}>
              <strong className={styles.contentTitle}>
                365 Simple - Chọn đơn giản - Sống dễ dàng !
              </strong>
              <p className={styles.contentDesc}>
                Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
                góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
                phẩm tốt hơn nữa.
              </p>

              <button className={styles.btn} onClick={handleOpen}>Đóng góp ý kiến</button>
            </div>

            <div className={styles.mail}>
              <div className={styles.mailItem}>
                <Image src={phoneUrl} alt="phoneUrl" />

                <div>
                  <p className={styles.mailItemHotline}>Hotline</p>
                  <p className={styles.mailItemNumber}>
                    1900-100023 - 027.918.2981
                  </p>
                </div>
              </div>

              <div className={styles.mailItem}>
                <Image src={mailUrl} alt="mailUrl" />

                <div>
                  <p className={styles.mailItemHotline}>Email</p>
                  <p className={styles.mailItemNumber}>365simple@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <Image src={contactUrl} alt="contactUrl" />
            </div>
          </div>
        </div>

        <div className={styles.container1Wrapepr}>
          <div className={styles.address}>
            <div className={styles.mem}>
              <p>365 Club</p>
              <p>Đăng ký thành viên</p>
              <p>Ưu đãi & độc quyền</p>

              <Image
                className={styles.bocongthuong}
                src={bocongthuong}
                alt="bocongthuong"
              />
            </div>
            <div className={styles.policy}>
              <p>Chính sách</p>
              <p>Điều khoản và điều kiện</p>
              <p>Chính sách khuyến mãi</p>
              <p>Chính sách bảo mật</p>
              <p>Chính sách giao hàng</p>
            </div>
            <div className={styles.csWrapper}>
              <div className={styles.cs}>
                <p>Chăm sóc khách hàng</p>
                <p>Trải nghiệm mua sắm 100% hài lòng</p>
                <p>Hỏi đáp - FAQs</p>
              </div>
              <div className={styles.knowledge}>
                <p>Hướng dẫn chọn size</p>
                <p>Blog</p>
                <p>Group mặc đơn giản sống chất</p>
              </div>
            </div>
            <div className={styles.contactAddressWrapper}>
              <p className={styles.contactAddress}>Địa chỉ liên hệ</p>

              <div className={styles.contactAddressItem}>
                <Image src={map} alt="map" />
                <p>
                  Cơ sở 1: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </p>
              </div>
              <div className={styles.contactAddressItem}>
                <Image src={map} alt="map" />
                <p>
                  Cơ sở 2: Số XXX Nguyễn Văn A, phường Cống Vị, quận Ba Đình,
                  Thành phố Hà Nội
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.last}>Copyright © 365 Simple Viet Nam</div>
      </footer>
    </>
  );
};
