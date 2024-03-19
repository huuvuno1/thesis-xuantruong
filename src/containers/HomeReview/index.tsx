import Image from 'next/image';
import styles from './styles.module.css';

import star from '@/assets/images/star.png';
import reviewAvatar from '@/assets/images/reviewAvatar.png';

const reviews = [
  {
    name: 'San francisco',
    cmt: 'Great Work or great work may refer to: A masterpiece or magnumopus, a creation that has been given much critical praise.',
  },
  {
    name: 'San francisco',
    cmt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to m",
  },
  {
    name: 'San francisco',
    cmt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard inter took a galley of type and scrambled it to m",
  },
];

export default function HomeReview() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Đánh giá</h3>

      <div className={styles.reviews}>
        {reviews.map((r) => (
          <div key={r.cmt} className={styles.reviewItem}>
            <div className={styles.reviewItemHeader}>
              <div className={styles.avatarWrapper}>
                <Image src={reviewAvatar} alt="avatar" />
                <p>{r.name}</p>
              </div>

              <Image src={star} alt="star" />
            </div>

            <p className={styles.cmt}>{r.cmt}</p>

            <p className={styles.date}>18 ngày trước</p>
          </div>
        ))}
      </div>
    </div>
  );
}
