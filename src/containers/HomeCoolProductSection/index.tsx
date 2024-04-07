import pcool from '@/assets/images/pcool.png';
import pcool2 from '@/assets/images/pcool2.png';
import pcool3 from '@/assets/images/pcool3.png';
import pcool4 from '@/assets/images/pcool4.png';
import ProductCard from '../ProductCard';

import styles from './styles.module.css';

const products = [
  {
    name: 'Áo Sơ mi Nam',
    desc: 'Thoáng mát/ Xanh da trời',
    price: '259.000đ',
    colors: [
      { code: '#C5D7E9', isActive: true },
      { code: '#1B6D72', isActive: false },
    ],
    image: pcool,
    isOutOfStock: false,
    isNew: true,
  },
  {
    name: 'Áo Măng tô dày dặn cho mùa đông',
    desc: 'Dày dặn/ Xanh đen',
    price: '259.000đ',
    colors: [
      { code: '#303C55', isActive: true },
      { code: '#828282', isActive: false },
      { code: '#111010', isActive: false },
    ],
    image: pcool2,
    isOutOfStock: false,
    isSale: true,
  },
  {
    name: 'Áo Hoodie cổ cục bấm độc lạ ',
    desc: 'Dày dặn/ Xám',
    price: '259.000đ',
    colors: [
      { code: '#818088', isActive: true },
      { code: '#1B6D72', isActive: false },
    ],
    image: pcool3,
    isOutOfStock: false,
    isNew: true,
  },
  {
    name: 'Áo Phao dày dặn cho mùa đông',
    desc: 'Dày dặn/ Xanh Đen',
    price: '399.000đ',
    colors: [
      { code: '#303C55', isActive: true },
      { code: '#828282', isActive: false },
      { code: '#111010', isActive: false },
    ],
    image: pcool4,
    isOutOfStock: false,
    isSale: true,
  },
];

export default function HomeCoolProductSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Sản phẩm thu đông</p>
      </div>

      <div className={styles.prdList}>
        {products.map((p) => (
          <ProductCard
            key={p.name}
            colors={p.colors}
            desc={p.desc}
            image={p.image}
            name={p.name}
            price={p.price}
            isOutOfStock={p.isOutOfStock}
            isSale={p.isSale}
            isNew={p.isNew}
            className={styles.productItem}
            href="/product-detail"
          />
        ))}
      </div>
    </div>
  );
}
