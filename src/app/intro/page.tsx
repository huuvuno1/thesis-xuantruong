'use client';

import Image from 'next/image';
import styles from './styles.module.css';

import introBanner from '@/assets/images/introBanner.png';
import introMem from '@/assets/images/introMem.png';
import talkhehe from '@/assets/images/talkhehe.png';
import fullstart from '@/assets/images/fullstart=.png';
import previousFullCircle from '@/assets/images/previousFullCircle.png';
import afterFullCircle from '@/assets/images/afterFullCircle.png';

import MainLayout from '@/layouts/MainLayout';
import IntroResponsive from '@/responsive/IntroResponsive';

export default function Intro() {
  return (
    <MainLayout>
      <div className={styles.desktopOnly}>
        <div className={styles.container}>
          <Image src={introBanner} alt="introBanner" />

          <div className={styles.content}>
            <h3 className={styles.contentTitle}>365 Simple là ai?</h3>

            <div className={styles.contentWrapper}>
              <Image src={introMem} alt="introMem" />

              <div>
                <div className={styles.quoteWrapper}>
                  <p>
                    Nếu bạn thường xuyên khó khăn trong việc chọn lựa hay phối
                    đồ, không biết mặc gì khi đi làm, đi chơi, hay dự tiệc...
                    Đến với 365 Simple, chúng tôi sẽ giúp bạn phần còn lại
                  </p>
                  <p>
                    1 Startup trong lĩnh vực thời trang thành lập vào năm 2024.
                    365 Simple mang thông điệp thời trang đơn giản đến mức tối
                    giản có thể mặc hàng ngày trong nhiều dịp khác nhau
                  </p>
                  <p>
                    {`Với mục tiêu tạo ra không gian mua sắm trực tuyến tiện lợi và
                tiếp cận đa khách hàng, mang đậm dấu ấn và phản chiếu phong cách
                thời trang của "365 Simple"`}
                  </p>
                </div>

                <p className={styles.Simple}>
                  365 Simple - Chọn đơn giản, Sống dễ dàng
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ptWrapper}>
            <h3 className={styles.ptWrapperTitle}>Phương châm hoạt động</h3>

            <div className={styles.hehe}>
              <div className={styles.ptWrapperContentWrapper}>
                <div className={styles.ptWrapperContent}>
                  <h4>Tử Tế</h4>

                  <p>Tử tế với khách hàng, với đồng nghiệp, với lãnh đạo</p>
                </div>

                <div className={styles.ptWrapperContent}>
                  <h4>Tinh Tế</h4>

                  <p>
                    Tinh tế trong công việc, Tinh tế trong các vấn đề của khách
                    hàng
                  </p>
                </div>

                <div className={styles.ptWrapperContent}>
                  <h4>Sẵn sàng</h4>

                  <p>
                    Sẵn sàng với mọi công việc, đáp ưng mọi yêu cầu của khách
                    hàng
                  </p>
                </div>
              </div>

              <div className={styles.ptWrapperContentWrapper}>
                <div className={styles.ptWrapperContent}>
                  <h4>Sáng tạo</h4>

                  <p>Luôn đổi mới, sáng tạo trong các sản phẩm của 365</p>
                </div>

                <div className={styles.ptWrapperContent}>
                  <h4>Trách nhiệm</h4>

                  <p>
                    Trách nhiệm với khách hàng, trách nhiệm trong mọi lời nói
                    của chúng tôi
                  </p>
                </div>

                <div className={styles.ptWrapperContent}>
                  <h4>Hết mình</h4>

                  <p>
                    Làm mọi việc luôn hết mình vì cộng đồng, vì khách hàng và vì
                    tương lai của 365
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.customerTalkAboutMe}>
            <div>
              <h3 className={styles.customerTalkAboutMeTitle}>
                Khách hàng nói gì về chúng tôi
              </h3>

              <p className={styles.customerTalkAboutMeDesc}>
                Mình rất hài lòng khi trải nghiệm sản phẩm tại đây, trước đây
                mỗi ngày đều rất mất thời gian để chọn đồ, phối đồ. Khi biết tới
                365 Simple mình được tư vấn rất nhiệt tình, sản phẩm mua về cũng
                chất lượng. Nói chung là đáng để thử
              </p>

              <div className={styles.customerTalkAboutMeName}>
                <p>Lê Đức - Hà Nội</p>

                <Image src={fullstart} alt="talkhehe" />
              </div>

              <div className={styles.customerTalkAboutMeBackNext}>
                <Image src={previousFullCircle} alt="talkhehe" />
                <Image src={afterFullCircle} alt="talkhehe" />
              </div>
            </div>

            <Image src={talkhehe} alt="talkhehe" />
          </div>
        </div>
      </div>

      <div className={styles.mobileOnly}>
        <IntroResponsive />
      </div>
    </MainLayout>
  );
}
