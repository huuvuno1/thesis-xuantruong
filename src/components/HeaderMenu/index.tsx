import Image from 'next/image';
import styles from './styles.module.css';

import menuRight1 from '@/assets/images/menuRight-1.png';
import menuRight2 from '@/assets/images/menuRight-2.png';
import menuRight3 from '@/assets/images/menuRight-3.png';
import menuRight4 from '@/assets/images/menuRight-4.png';
import Link from 'next/link';

interface HeaderMenuProps {
  className?: string;
}
export default function HeaderMenu(props: Readonly<HeaderMenuProps>) {
  const { className } = props;
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={`${styles.box}`}>
        <div className={`${styles.category}`}>
          <div>
            <Link href={'/products'} className={`${styles.title}`}>
              sản phẩm
            </Link>
            <div className={`${styles.line}`}></div>
            <p className={`${styles.item}`}>Tất cả</p>
            <p className={`${styles.item}`}>Sản phẩm mới</p>
          </div>

          <div>
            <Link href={'/products'} className={`${styles.title}`}>
              Áo nam
            </Link>
            <div className={`${styles.line}`}></div>
            <p className={`${styles.item}`}>Mùa hè</p>
            <p className={`${styles.item}`}>Mùa đông</p>
          </div>

          <div>
            <h5 className={`${styles.title}`}>Quần nam</h5>
            <div className={`${styles.line}`}></div>
            <p className={`${styles.item}`}>Quần Short</p>
            <p className={`${styles.item}`}>Quần Âu</p>
            <p className={`${styles.item}`}>Quần Jeans</p>
          </div>

          <div>
            <h5 className={`${styles.title}`}>Phụ kiện nam</h5>
            <div className={`${styles.line}`}></div>
            <p className={`${styles.item}`}>Dây lưng</p>
            <p className={`${styles.item}`}>Giầy dép</p>
            <p className={`${styles.item}`}>Túi xách</p>
          </div>
        </div>

        <div className={`${styles.right}`}>
          <div className={`${styles.rightItem}`}>
            <Image src={menuRight1} alt="menuRight1" />
            <div className={`${styles.rightItemBg}`}></div>
            <p className={`${styles.rightItemText}`}>Áo khoác dạ</p>
          </div>

          <div className={`${styles.rightItem}`}>
            <Image src={menuRight2} alt="menuRight2" />
            <div className={`${styles.rightItemBg}`}></div>
            <p className={`${styles.rightItemText}`}>Áo khoác dạ</p>
          </div>

          <div className={`${styles.rightItem}`}>
            <Image src={menuRight3} alt="menuRight3" />
            <div className={`${styles.rightItemBg}`}></div>
            <p className={`${styles.rightItemText}`}>Áo khoác dạ</p>
          </div>

          <div className={`${styles.rightItem}`}>
            <Image src={menuRight4} alt="menuRight4" />
            <div className={`${styles.rightItemBg}`}></div>
            <p className={`${styles.rightItemText}`}>Áo khoác dạ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
