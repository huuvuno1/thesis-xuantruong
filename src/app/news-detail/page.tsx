'use client';

import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';

import checkBoxImg from '@/assets/images/CheckBoxIcon.png';
import newDetail1 from '@/assets/images/news-detail-1.png';
import newDetail2 from '@/assets/images/news-detail-2.png';
import newDetail3 from '@/assets/images/news-detail-3.png';
import newDetail4 from '@/assets/images/news-detail-4.png';
import newDetail5 from '@/assets/images/news-detail-5.png';

import Image from 'next/image';
import NewsSection from '@/containers/HomeNewSection';

export default function NewsDetail() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.breadcum}>
          <p>Trang chủ</p>
          <p>/</p>
          <p>Tin tức</p>
          <p>/</p>
          <p className={styles.breadcumActive}>Chi tiết tin tức</p>
        </div>

        <div className={styles.main}>
          <div className={styles.search}>
            <div className={styles.searchContainer}>
              <h3>Tìm kiếm</h3>

              <div className={styles.checkboxItemWrapper}>
                <div className={styles.checkboxItem}>
                  <Image src={checkBoxImg} alt="checkbox" />
                  <p>Tin tức mới</p>
                </div>

                <div className={styles.checkboxItem}>
                  <Image src={checkBoxImg} alt="checkbox" />
                  <p>Xu hướng thời trang</p>
                </div>

                <div className={styles.checkboxItem}>
                  <Image src={checkBoxImg} alt="checkbox" />
                  <p>Tips phối đồ</p>
                </div>

                <div className={styles.checkboxItem}>
                  <Image src={checkBoxImg} alt="checkbox" />
                  <p>Khuyến mãi</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.articleWrapper}>
            <div className={styles.articleTitleWrapper}>
              <h1 className={styles.articleTitle}>Tất cả bài viết</h1>
            </div>

            <div className={styles.articleWrapperItem}>
              <h2 className={styles.detailTitle}>Phối đồ gì với áo Sơ mi?</h2>
              <Image src={newDetail1} alt="newDetail1" />

              <div className={styles.detailItem}>
                <p className={styles.detailItemTitle}>
                  Áo sơ mi dáng rộng và quần kaki
                </p>
                <Image
                  className={styles.detailItemImg}
                  src={newDetail2}
                  alt="newDetail1"
                />
                <p className={styles.detailItemDesc}>
                  Kết hợp giữa áo sơ mi form rộng với quần kaki cũng khá ổn,
                  giúp các bạn nam trở nên đỉnh đạc và menly hơn. Các bạn trẻ
                  không muốn quá nghiêm túc có thể sử dụng cách phối này
                </p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailItemTitle}>
                  Áo sơ mi dáng rộng và quần jean
                </p>
                <Image
                  className={styles.detailItemImg}
                  src={newDetail3}
                  alt="newDetail1"
                />
                <p className={styles.detailItemDesc}>
                  Quần jean cũng khá hợp khi phối cùng với áo sơ mi form
                  rộng, thường ngoài quần tây ra thì quần jean được các bạn nam
                  chọn dùng nhiều nhất bởi sự tiện lợi, năng động, hợp bất kỳ
                  kiểu dáng nào.
                </p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailItemTitle}>
                  Áo sơ mi dáng rộng và quần âu
                </p>
                <Image
                  className={styles.detailItemImg}
                  src={newDetail4}
                  alt="newDetail4"
                />
                <p className={styles.detailItemDesc}>
                  Một kiểu phối đồ luôn được nhiều bạn trẻ yêu thích, áo sơ mi
                  form rộng kết hợp với chiếc quần tây đen hoặc trắng tạo nên
                  nét thư sinh, thanh lịch và khá hợp thời trang, kiểu phối này
                  không cầu kỳ hay phức tạp nhưng luôn giữ được vẻ chất lừ.
                </p>
              </div>

              <div className={styles.detailItem}>
                <p className={styles.detailItemTitle}>
                  Áo sơ mi dáng rộng và quần short
                </p>
                <Image
                  className={styles.detailItemImg}
                  src={newDetail5}
                  alt="newDetail5"
                />
                <p className={styles.detailItemDesc}>
                  Chiếc quần short khi phối với chiếc quần short tạo nên phong
                  cách năng động, trẻ trung và linh hoạt, chiếc áo sơ form giúp
                  các chàng trai trông to con hơn nếu có vóc dáng gầy, tô điểm
                  cho ngoại hình.
                </p>
              </div>
            </div>
          </div>
        </div>

        <NewsSection />
      </div>
    </MainLayout>
  );
}
