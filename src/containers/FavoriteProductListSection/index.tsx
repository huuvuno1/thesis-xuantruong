import homeProductSectionImage1 from '@/assets/images/homeProductSection.png';
import homeProductSectionImage2 from '@/assets/images/homeProductSection2.png';
import homeProductSectionImage3 from '@/assets/images/homeProductSection3.png';
import homeProductSectionImage4 from '@/assets/images/homeProductSection4.png';
import homeProductSectionImage5 from '@/assets/images/homeProductSection5.png';
import ProductCard from '../ProductCard';

import styles from './styles.module.css';

const products = [
  {
    name: 'Áo Sơ mi Nam Basics',
    desc: 'Dày dặn/ Xanh rêu',
    price: '299.000đ',
    colors: [
      { code: '#B8CBF6', isActive: false },
      { code: '#6E7E6B', isActive: true },
      { code: '#72451B', isActive: false },
    ],
    image: homeProductSectionImage1,
    isOutOfStock: false,
    isNew: true,
  },
  {
    name: 'Quần Shorts Nam kẻ sọc Basics',
    desc: 'Thoáng mát/ Nâu sữa',
    price: '199.000đ',
    colors: [
      { code: '#C6A47E', isActive: true },
      { code: '#1B6D72', isActive: false },
    ],
    image: homeProductSectionImage2,
    isOutOfStock: false,
    isNew: true,
  },
  {
    name: 'Áo Polo Nam Basics',
    desc: 'Dày dặn/ Xanh da trời',
    price: '299.000đ',
    colors: [
      { code: '#B8CBF6', isActive: true },
      { code: '#1B6D72', isActive: false },
      { code: '#72451B', isActive: false },
    ],
    image: homeProductSectionImage3,
    isOutOfStock: false,
    isNew: true,
  },
  {
    name: 'Quần Âu ống rộng Nam Basics',
    desc: 'Mềm mại/ Xám',
    price: '399.000đ',
    colors: [
      { code: '#CCCCCC', isActive: false },
      { code: '#232323', isActive: false },
      { code: '#44444C', isActive: true },
    ],
    image: homeProductSectionImage4,
    isOutOfStock: false,
    isNew: true,
  },
  {
    name: 'Áo Sweater Nam không họa tiết',
    desc: 'Ấm áp/ Xám',
    price: '259.000đ',
    colors: [
      { code: '#838486', isActive: true },
      { code: '#1B6D72', isActive: false },
    ],
    image: homeProductSectionImage5,
    isOutOfStock: false,
    isNew: true,
  },
];

export default function FavoriteProductListSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Sản phẩm bạn có thể thích</p>
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
            isNew={p.isNew}
            href="/product-detail"
          />
        ))}
      </div>
    </div>
  );
}
