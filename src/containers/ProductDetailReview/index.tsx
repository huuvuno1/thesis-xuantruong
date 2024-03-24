import Image from 'next/image';
import styles from './styles.module.css';

import reviewStart from '@/assets/images/review-star-product-detail.png';
import ArrowDownIcon from '@/assets/images/ArrowDownIcon.png';
import reviewStar from '@/assets/images/review-star.png';
import cmt1 from '@/assets/images/cmt1.png';
import cmt2 from '@/assets/images/cmt2.png';
import ArrowLeftIcon from '@/assets/images/ArrowLeftIcon.png';
import ArrowRightIcon from '@/assets/images/ArrowRightIcon.png';

interface ProductDetailReviewProps {
  className?: string;
}
export default function ProductDetailReview(
  props: Readonly<ProductDetailReviewProps>
) {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <div className={styles.common}>
        <p className={styles.commonTitle}>Đánh giá sản phẩm</p>
        <p className={styles.commonGrade}>4.5</p>
        <Image src={reviewStart} alt="reviewStart" />
        <p className={styles.reviewTotal}>145 đánh giá</p>
      </div>

      <div className={styles.reviewWrapper}>
        <div className={styles.reviewHeader}>
          <div className={styles.reviewItem}>
            <p>Đánh giá</p>
            <Image src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>

          <div className={styles.reviewItem}>
            <p>Ảnh</p>
            <Image src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>

          <div className={`${styles.reviewItem} ${styles.reviewItemHaha}`}>
            Viết đánh giá
          </div>
        </div>

        <div>
          <div className={styles.thisReviewItemWrapper}>
            <div className={styles.thisReviewItem}>
              <Image src={reviewStar} alt="fourStar" />
              <p className={styles.thisReviewItemName}>Nguyen Van Truong</p>
              <p className={styles.thisReviewItemKind}>Xanh rêu/L</p>

              <p className={styles.thisReviewItemCmt}>
                Áo đẹp và thoáng mát. 10 điểm. Chất lượng phù hợp với giá sảnhợp
                với học sinh sinh viên.
              </p>
              <p className={styles.thisReviewItemDate}>11.03.2024</p>
            </div>

            <div className={styles.thisReviewItem}>
              <Image src={reviewStar} alt="fourStar" />
              <p className={styles.thisReviewItemName}>Nguyen Van Truong</p>
              <p className={styles.thisReviewItemKind}>Xanh rêu/L</p>

              <div className={styles.cmtImageWrapper}>
                <Image src={cmt1} alt="cmt1" />
                <Image src={cmt2} alt="cmt2" />
              </div>

              <p className={styles.thisReviewItemCmt}>
                Áo đẹp và thoáng mát. 10 điểm.
              </p>
              <p className={styles.thisReviewItemDate}>11.03.2024</p>
            </div>
          </div>
          <div className={styles.thisReviewItemWrapper}>
            <div className={styles.thisReviewItem}>
              <Image src={reviewStar} alt="fourStar" />
              <p className={styles.thisReviewItemName}>Hoàng Thăng Long</p>
              <p className={styles.thisReviewItemKind}>Xanh rêu/L</p>

              <div className={styles.cmtImageWrapper}>
                <Image src={cmt1} alt="cmt1" />
              </div>

              <p className={styles.thisReviewItemCmt}>
                Chất lượng phù hợp với giá sản phẩm. Phù hợp với học sinh sinh
                viên.
              </p>
              <p className={styles.thisReviewItemDate}>11.03.2024</p>
            </div>

            <div className={styles.thisReviewItem}>
              <Image src={reviewStar} alt="fourStar" />
              <p className={styles.thisReviewItemName}>Nguyễn Vũ Nam</p>
              <p className={styles.thisReviewItemKind}>Xanh rêu/L</p>

              <p className={styles.thisReviewItemCmt}>
                Chất lượng phù hợp với giá sản phẩm. Phù hợp với học sinh sinh
                viên. Chất lượng phù hợp với giá sảnhợp với học sinh sinh viên.
                Ch hợp với học sinh sinh viên.
              </p>
              <p className={styles.thisReviewItemDate}>11.03.2024</p>
            </div>
          </div>
          <div className={styles.thisReviewItemWrapper}>
            <div className={styles.thisReviewItem}>
              <Image src={reviewStar} alt="fourStar" />
              <p className={styles.thisReviewItemName}>Vũ Đức Thọ</p>
              <p className={styles.thisReviewItemKind}>Xanh rêu/L</p>

              <p className={styles.thisReviewItemCmt}>
                Áo đẹp và thoáng mát, mỏng. Tông màu đẹp và hiện đại. 10 điểm.
              </p>
              <p className={styles.thisReviewItemDate}>11.03.2024</p>
            </div>

            <div className={styles.thisReviewItem}>
              <Image src={reviewStar} alt="fourStar" />
              <p className={styles.thisReviewItemName}>Hoa Văn Thắng</p>
              <p className={styles.thisReviewItemKind}>Xanh rêu/L</p>

              <p className={styles.thisReviewItemCmt}>
                Áo đẹp và thoáng mát. 10 điểm.
              </p>
              <p className={styles.thisReviewItemDate}>11.03.2024</p>
            </div>
          </div>
        </div>

        <button className={styles.viewMoreBtn}>XEM THÊM</button>

        <div className={styles.footer}>
          <p>Hiển thị 6/20 đánh giá</p>

          <div className={styles.paging}>
            <Image src={ArrowLeftIcon} alt="ArrowLeftIcon" />
            <p className={styles.pagingp}>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>...</p>
            <p>8</p>
            <Image src={ArrowRightIcon} alt="ArrowRightIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
