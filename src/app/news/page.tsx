'use client';

import styles from './styles.module.css';

import MainLayout from '@/layouts/MainLayout';

import checkBoxImg from '@/assets/images/CheckBoxIcon.png';
import newImage1 from '@/assets/images/new-image-1.png';
import newImage2 from '@/assets/images/new-image-2.png';
import newImage3 from '@/assets/images/new-image-3.png';
import newImage4 from '@/assets/images/new-image-4.png';
import newImage5 from '@/assets/images/new-image-5.png';
import ArrowRightWithCircle from '@/assets/images/ArrowRightWithCircle.png';

import Image from 'next/image';
import Link from 'next/link';
import NewsSection from '@/containers/HomeNewSection';
import NewsResponsive from '@/responsive/NewsResponsive';

const news = [
  {
    title: 'Tưng bừng khai trương, nhận vàn ưu đãi!',
    desc: 'Nhân dịp mới ra mắt website, 365 Simple tung ra chương trình khuyến mãi cực khủng, lên đến 50% toàn bộ sản phẩm....',
    img: newImage1,
  },
  {
    title: 'Ngày vía thần tài là gì? Tại sao lại mua vàng?',
    desc: 'Người người, nhà nhà đổ xô đi mua vàng vào ngày này, Lý do sau việc làm này là gì. Cùng tìm hiểu ngay sau đây...',
    img: newImage2,
  },
  {
    title: 'Phối đồ gì với áo sơ mi dáng rộng?',
    desc: 'Áo sơ mi thì mặc với quần gì? Mặc áo khoác gì? Bài viết này sẽ giúp bạn phối đồ với áo sơ mi chuẩn soái ca...',
    img: newImage3,
  },
  {
    title: 'Làm sao để giữ màu quần Jeans?',
    desc: 'Áo sơ mi thì mặc với quần gì? Mặc áo khoác gì? Bài viết này sẽ giúp bạn phối đồ với áo sơ mi chuẩn soái ca...',
    img: newImage4,
  },
  {
    title: 'Peach Fuzz - Xu hướng thời trang 2024',
    desc: 'Trong tháng 12, Viện màu sắc Pantone đã công bố 13-1023 Peach Fuzz (Hồng đào) là màu sắc xu hướng của năm 2024...',
    img: newImage5,
  },
];

export default function News() {
  return (
    <MainLayout>
      <div className={styles.desktopOnly}>
        <div className={styles.container}>
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
                <h1 className={styles.articleTitle}>TẤT CẢ BÀI VIẾT</h1>
              </div>

              <div className={styles.articleWrapperItem}>
                {news.map((n) => (
                  <Link
                    href="/news-detail"
                    key={n.title}
                    className={styles.articleItem}
                  >
                    <Image src={n.img} alt="cover" />

                    <h5 className={styles.articleItemTitle}>{n.title}</h5>

                    <p className={styles.articleItemDesc}>{n.desc}</p>

                    <div className={styles.articleItemArrow}>
                      <Image src={ArrowRightWithCircle} alt="cover" />
                    </div>
                  </Link>
                ))}
              </div>

              <button className={styles.btnViewMore}>XEM THÊM</button>
            </div>
          </div>

          <NewsSection />
        </div>
      </div>

      <div className={styles.mobileOnly}>
        <NewsResponsive />
      </div>
    </MainLayout>
  );
}
