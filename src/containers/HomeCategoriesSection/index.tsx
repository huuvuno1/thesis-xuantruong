import Image from 'next/image';
import styles from './styles.module.css';
import ShirtHome from '@/assets/images/ShirtHome.png';
import information from '@/assets/images/information-bulb 1.png';
import secured from '@/assets/images/secured 1.png';
import support from '@/assets/images/support-services.png';

const categories = [
  {
    icon: <Image src={ShirtHome} alt="ShirtHome" />,
    title: 'Sản phẩm đa dạng',
  },
  {
    icon: <Image src={information} alt="information" />,
    title: 'Thông tin rõ ràng',
  },
  {
    icon: <Image src={secured} alt="secured" />,
    title: 'Thanh toán an toàn',
  },
  {
    icon: <Image src={support} alt="support" />,
    title: 'Hỗ trợ 24/7',
  },
];

export default function HomeCategoriesSection() {
  return (
    <div className={styles.container}>
      {categories.map((c) => (
        <div className={styles.categoryItem} key={c.title}>
          {c.icon}
          <p style={{ color: '#012755' }}>{c.title}</p>
        </div>
      ))}
    </div>
  );
}
