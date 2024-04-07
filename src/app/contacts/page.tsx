'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import contact_us_cover from '@/assets/images/contact_us_cover.png';
import lastBnnaer from '@/assets/images/lastBnnaer.png';

import MainLayout from '@/layouts/MainLayout';
import { useState } from 'react';

export default function Contacts() {
  const [active, setActive] = useState('1');
  return (
    <MainLayout>
      <div className={styles.container}>
        <Image src={contact_us_cover} alt="introBanner" />

        <div className={styles.search}>
          <h2 className={styles.titleSearch}>
            365 SIMPLE CÓ THỂ GIÚP GÌ CHO BẠN ?
          </h2>

          <input
            className={styles.intpuSearch}
            type="text"
            placeholder="Cho chúng mình biết câu hỏi của bạn..."
          />
        </div>

        <div className={styles.categoryWapper}>
          <h4 className={styles.categoryTitle}>Danh mục</h4>

          <div className={styles.categorycommonWrapper}>
            <div className={`${styles.categoryLeftWrapper} `}>
              <p
                className={`${styles.categoryLeftItem} ${
                  active === '1' && styles.categoryLeftItemActive
                }`}
                onClick={() => {
                  setActive('1');
                }}
              >
                Chính sách mua hàng
              </p>
              <p
                className={`${styles.categoryLeftItem} ${
                  active === '2' && styles.categoryLeftItemActive
                }`}
                onClick={() => {
                  setActive('2');
                }}
              >
                Chính sách đổi trả
              </p>
              <p
                className={`${styles.categoryLeftItem} ${
                  active === '3' && styles.categoryLeftItemActive
                }`}
                onClick={() => {
                  setActive('3');
                }}
              >
                Chính sách giao hàng
              </p>
              <p
                className={`${styles.categoryLeftItem} ${
                  active === '4' && styles.categoryLeftItemActive
                }`}
                onClick={() => {
                  setActive('4');
                }}
              >
                Khác...
              </p>
            </div>

            <div className={styles.categoryRight}>
              <div className={styles.categoryRightItemTop}>
                {active === '1' ? (
                  <div className={styles.categoryRightItem}>
                    <strong>365 có cửa hàng vật lý không?</strong>

                    <p>
                      Hiện nay 365 Simple chưa có cửa hàng vật lý nào, nhưng dự
                      định trong tương lai sẽ khai trương 2 chi nhánh tại Hà Nội
                      và Hồ Chí Minh.
                    </p>
                  </div>
                ) : (
                  <div className={styles.categoryRightItem}>
                    <strong>Cần gấp đơn hàng phải làm sao?</strong>

                    <p>
                      Các bạn có thể liên hệ qua fanpage, hoặc hotline để được
                      hỗ trợ.
                    </p>
                  </div>
                )}

                {active === '1' ? (
                  <div className={styles.categoryRightItem}>
                    <strong>Cần gấp đơn hàng phải làm sao?</strong>

                    <p>
                      Các bạn có thể liên hệ qua fanpage, hoặc hotline để được
                      hỗ trợ.
                    </p>
                  </div>
                ) : (
                  <div className={styles.categoryRightItem}>
                    <strong>365 có cửa hàng vật lý không?</strong>

                    <p>
                      Hiện nay 365 Simple chưa có cửa hàng vật lý nào, nhưng dự
                      định trong tương lai sẽ khai trương 2 chi nhánh tại Hà Nội
                      và Hồ Chí Minh.
                    </p>
                  </div>
                )}
              </div>

              <div className={styles.categoryRightItemTop}>
                {active === '3' ? (
                  <div className={styles.categoryRightItem}>
                    <strong>Nhận hàng có được kiểm tra không?</strong>

                    <p>
                      365 Simple có chính sách đồng kiểm, bạn hoàn toàn có thể
                      kiểm tra sản phẩm trước khi thanh toán.
                    </p>
                  </div>
                ) : (
                  <div className={styles.categoryRightItem}>
                    <strong>Sử dụng khuyến mãi ở đâu?</strong>

                    <p>
                      Mỗi khi thanh toán, đều có mục nhập voucher cho khách
                      hàng. Bạn hãy sử dụng mã voucher bạn có để được nhận ưu
                      đãi nhé!
                    </p>
                  </div>
                )}

                {active === '3' ? (
                  <div className={styles.categoryRightItem}>
                    <strong>Sử dụng khuyến mãi ở đâu?</strong>

                    <p>
                      Mỗi khi thanh toán, đều có mục nhập voucher cho khách
                      hàng. Bạn hãy sử dụng mã voucher bạn có để được nhận ưu
                      đãi nhé!
                    </p>
                  </div>
                ) : (
                  <div className={styles.categoryRightItem}>
                    <strong>Nhận hàng có được kiểm tra không?</strong>

                    <p>
                      365 Simple có chính sách đồng kiểm, bạn hoàn toàn có thể
                      kiểm tra sản phẩm trước khi thanh toán.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.anyquestionWrapper}>
          <h3 className={styles.anyquestion}>
            Nếu còn bất kỳ câu hỏi nào, bạn hãy liên hệ trực tiếp với chúng mình
          </h3>

          <button className={styles.anyquestionbtn}>Liên hệ trực tiếp</button>
        </div>

        <div className={styles.lastBannerWrapper}>
          <Image src={lastBnnaer} alt="lastBnnaer" />
        </div>
      </div>
    </MainLayout>
  );
}
