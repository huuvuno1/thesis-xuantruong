import styles from './styles.module.css';

import bannerDesc1 from '@/assets/images/banner-desc-1.png';
import bannerDesc2 from '@/assets/images/banner-desc-2.png';
import Image from 'next/image';

interface ProductDetailDescProps {
  className?: string;
}
export default function ProductDetailDesc(
  props: Readonly<ProductDetailDescProps>
) {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <div>
        <div className={styles.header}>Chi tiết sản phẩm</div>
        <div className={styles.itemWrapper}>
          <div className={styles.item}>
            <p className={styles.itemKey}>Danh mục</p>
            <p
              className={styles.itemValue}
            >{`365 Simple > Sản phẩm mới > Áo Nam`}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Thương hiệu</p>
            <p className={styles.itemValue}>{`365 Simple`}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Mẫu</p>
            <p className={styles.itemValue}>{`Form Regular`}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Phong cách</p>
            <p className={styles.itemValue}>{`Đơn giản`}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Chất liệu</p>
            <p className={styles.itemValue}>{`Vải thái`}</p>
          </div>
          <div className={styles.item}>
            <p className={styles.itemKey}>Gửi từ</p>
            <p className={styles.itemValue}>{`Hà Nội`}</p>
          </div>
        </div>
      </div>

      <div className={styles.descWrapper}>
        <div className={styles.header}>Mô tả sản phẩm</div>
        <div className={styles.desc}>
          <p className={styles.titleCommon}> GIỚI THIỆU CHUNG</p>
          <div className={styles.content}>
            <p>Áo Sơ mi Nam Basic co giãn, thoáng khí cho form Regular</p>
            <p>- Màu sắc: Trắng </p>
            <p>- Size: S / M / L / XL.</p>
            <p>- Kiểu dáng: Oversized.</p>
          </div>
          <p className={styles.titleCommon}>HƯỚNG DẪN SỬ DỤNG:</p>
          <div className={styles.content}>
            <p>- Lần giặt đầu chỉ nên xả nước lạnh rồi phơi khô.</p>
            <p>- Khuyến cáo nên giặt tay, hạn chế giặt máy.</p>
            <p>
              - Chú ý lộn trái sản phẩm trước khi giặt để không ảnh hướng tới bề
              mặt vải.
            </p>
            <p>
              - Không sử dụng thuốc tẩy, không giặt chung với các sản phẩm dễ
              phai màu.
            </p>
            <p>
              - Hạn chế phơi trực tiếp dưới ánh nắng mặt trời, nên phơi khô dưới
              ảnh sáng tự nhiên.
            </p>
          </div>

          <Image
            className={styles.banner1}
            src={bannerDesc1}
            alt="bannerDesc1"
          />
          <Image
            className={styles.banner2}
            src={bannerDesc2}
            alt="bannerDesc2"
          />

          <button className={styles.viewmoreBtn}>XEM THÊM</button>
        </div>
      </div>
    </div>
  );
}
