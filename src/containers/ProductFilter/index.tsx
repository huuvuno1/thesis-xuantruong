import Image from 'next/image';
import styles from './styles.module.css';

import CheckBoxIcon from '@/assets/images/CheckBoxIcon.png';

const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '29', '30', '31', '32', '33'];

const colors = [
  {
    name: '#000000',
    code: 'Đen',
  },
  {
    name: '#939393',
    code: 'Xám',
  },
  {
    name: '#125799',
    code: 'Xanh navy',
  },
  {
    name: '#F6F6F6',
    code: 'Trắng',
  },
  {
    name: '#D6CCAD',
    code: 'Be',
  },
  {
    name: '#E71515',
    code: 'Đỏ',
  },
  {
    name: '#9B7642',
    code: 'Nâu',
  },
  {
    name: '#3D6420',
    code: 'Xanh rêu',
  },
  {
    name: '#EA7300',
    code: 'Cam',
  },
];

interface ProductFilterProps {
  className?: string;
}
export default function ProductFilter(props: Readonly<ProductFilterProps>) {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <h3 className={styles.title}>181 Kết quả</h3>

      <div>
        <strong className={styles.categoryTitle}>Danh mục</strong>
        <div className={styles.checkboxWrapperList}>
          <div className={styles.checkboxWrapper}>
            <input className={styles.checkboxinput} type="checkbox"></input>
            <p className={styles.checkboxTitle}>Bán chạy</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input className={styles.checkboxinput} type="checkbox"></input>
            <p className={styles.checkboxTitle}>Áo nam</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input className={styles.checkboxinput} type="checkbox"></input>
            <p className={styles.checkboxTitle}>Quần nam</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input className={styles.checkboxinput} type="checkbox"></input>
            <p className={styles.checkboxTitle}>Phụ kiện</p>
          </div>
        </div>
      </div>

      <div className={styles.category}>
        <strong className={styles.categoryTitle}>Kích cỡ</strong>
        <div className={styles.sizeWapper}>
          {sizes.map((s) => (
            <div key={s} className={styles.sizeItem}>
              {s}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.color}>
        <strong className={styles.categoryTitle}>Màu sắc</strong>
        <div className={styles.colorWapper}>
          {colors.map((c) => (
            <div key={c.code} className={styles.colorItem}>
              <span
                style={{ backgroundColor: c.name }}
                className={styles.colorCircle}
              ></span>
              <p className={styles.colorText}>{c.code}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <strong className={styles.categoryTitle}>Nhu cầu</strong>
        <div className={styles.checkboxWrapperList}>
          <div className={styles.checkboxWrapper}>
            <input className={styles.checkboxinput} type="checkbox"></input>
            <p className={styles.checkboxTitle}>Mặc ở nhà</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input className={styles.checkboxinput} type="checkbox"></input>
            <p className={styles.checkboxTitle}>Mặc hằng ngày</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input className={styles.checkboxinput} type="checkbox"></input>
            <p className={styles.checkboxTitle}>Mặc đi làm</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input className={styles.checkboxinput} type="checkbox"></input>
            <p className={styles.checkboxTitle}>Đi chơi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
