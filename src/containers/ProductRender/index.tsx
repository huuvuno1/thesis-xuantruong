import productGrid1 from '@/assets/images/product-grid-1.png';
import productGrid2 from '@/assets/images/product-grid-2.png';
import productGrid3 from '@/assets/images/product-grid-3.png';
import productGrid4 from '@/assets/images/product-grid-4.png';
import productGrid5 from '@/assets/images/product-grid-5.png';
import productGrid6 from '@/assets/images/product-grid-6.png';
import productGrid7 from '@/assets/images/product-grid-7.png';
import productGrid8 from '@/assets/images/product-grid-8.png';
import productGrid9 from '@/assets/images/product-grid-9.png';
import productGrid10 from '@/assets/images/product-grid-10.png';
import productGrid11 from '@/assets/images/product-grid-11.png';
import productGrid12 from '@/assets/images/product-grid-12.png';
import productGrid13 from '@/assets/images/product-grid-13.png';
import productGrid14 from '@/assets/images/product-grid-14.png';
import ProductCard from '../ProductCard';
import ArrowDownIcon from '@/assets/images/ArrowDownIcon.png';

import styles from './styles.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const products = [
  {
    name: 'Áo Sweater Nam không họa tiết',
    desc: 'Ấm áp/ Xám',
    price: '259.000đ',
    colors: [
      { code: '#C5D7E9', isActive: true },
      { code: '#1B6D72', isActive: false },
    ],
    image: productGrid1,
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
    image: productGrid2,
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
    image: productGrid3,
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
    image: productGrid4,
    isOutOfStock: false,
    isSale: true,
    oldPrice: '550.000đ',
    percent: '-50%',
  },
  {
    name: 'Quần Shorts Nam kẻ sọc Basics',
    desc: 'Thoáng mát/ Nâu sữa',
    price: '199.000đ',
    colors: [
      { code: '#C6A47E', isActive: true },
      { code: '#1B6D72', isActive: false },
    ],
    image: productGrid5,
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
    image: productGrid6,
    isOutOfStock: false,
    isSale: true,
    oldPrice: '550.000đ',
    percent: '-50%',
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
    image: productGrid7,
    isOutOfStock: false,
    isNew: true,
  },
  {
    name: 'Áo Sơ mi Nam Basics',
    desc: 'Dày dặn/ Xanh rêu',
    price: '299.000đ',
    colors: [
      { code: '#B8CBF6', isActive: false },
      { code: '#6E7E6B', isActive: true },
      { code: '#72451B', isActive: false },
    ],
    image: productGrid8,
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
    image: productGrid9,
    isOutOfStock: false,
    isSale: true,
    oldPrice: '550.000đ',
    percent: '-50%',
  },
  {
    name: 'Áo Sweater Nam không họa tiết',
    desc: 'Ấm áp/ Xám',
    price: '259.000đ',
    colors: [
      { code: '#838486', isActive: true },
      { code: '#1B6D72', isActive: false },
    ],
    image: productGrid10,
    isOutOfStock: false,
    isSale: true,
    oldPrice: '550.000đ',
    percent: '-50%',
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
    image: productGrid11,
    isOutOfStock: false,
    isNew: true,
  },
  {
    name: 'Áo Sơ mi Nam Basics',
    desc: 'Dày dặn/ Xanh rêu',
    price: '299.000đ',
    colors: [
      { code: '#B8CBF6', isActive: false },
      { code: '#6E7E6B', isActive: true },
      { code: '#72451B', isActive: false },
    ],
    image: productGrid12,
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
    image: productGrid13,
    isOutOfStock: false,
    isSale: true,
    oldPrice: '550.000đ',
    percent: '-50%',
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
    image: productGrid14,
    isOutOfStock: false,
    isNew: true,
  },
];

interface ProductRenderProps {
  className?: string;
}
export default function ProductRender(props: Readonly<ProductRenderProps>) {
  const router = useRouter();

  const handleGotoProductDetail = useCallback(() => {
    router.push('/product-detail');
  }, [router]);

  return (
    <div className={`${styles.container} ${props.className}`}>
      <div className={styles.header}>
        <p className={styles.headerTitle}>181 Kết quả</p>

        <div className={styles.headerClassifyWrapper}>
          <p className={styles.headerClassify}>Phân loại</p>
          <div className={styles.headerNewest}>
            <p>Mới nhất</p>
            <Image src={ArrowDownIcon} alt="icon" />
          </div>
        </div>
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
            oldPrice={p.oldPrice}
            percent={p.percent}
            onClick={handleGotoProductDetail}
          />
        ))}
      </div>

      <div className={styles.line}></div>

      <button className={styles.viewmore}>XEM THÊM</button>
    </div>
  );
}
