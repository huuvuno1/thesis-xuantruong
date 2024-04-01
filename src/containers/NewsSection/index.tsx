import homeArticle from '@/assets/images/home-article-1.png';
import homeArticle2 from '@/assets/images/home-article-2.png';
import homeArticle3 from '@/assets/images/home-article-3.png';
import Image from 'next/image';

import styles from './styles.module.css';

const articles = [
  {
    title: 'Phối đồ với sơ mi trắng sao cho hợp ??',
    desc: 'Chỉ cần biết cách phối đồ với áo sơ mi trắng nam bạn đã có thể tạo ra những set đồ “cực chất”!',
    image: homeArticle,
  },
  {
    title: '4 cách phối đồ với giày derby lịch lãm chuẩn men cho phái mạnh',
    desc: 'Đâu là cách phối đồ lịch lãm cùng giày Derby? Đây là câu hỏi được khá nhiều anh chàng quan tâm. Bài viết này hãy cùng chúng tôi giải đáp ngay thắc mắc này nhé.',
    image: homeArticle2,
  },
  {
    title: 'Bỏ túi 6 cách phối đồ với áo sơ mi nam cổ vest ấn tượng nhất 2024',
    desc: 'Các chàng đã biết cách phối đồ với áo sơ mi nam cổ vest hot hit hiện nay chưa? Nếu chưa thì đừng bỏ qua bài viết dưới đây',
    image: homeArticle3,
  },
];

export default function HomeNewSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Tin tức</h3>
      </div>
      <div className={styles.articles}>
        {articles.map((a) => (
          <div key={a.title} className={styles.articleItem}>
            <div className={styles.articleItemLine}>
              <Image src={a.image} alt={a.title} />

              <h4 className={styles.title}>{a.title}</h4>
            </div>

            <p className={styles.desc}>{a.desc}</p>

            <button className={styles.btn}>Chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
}
