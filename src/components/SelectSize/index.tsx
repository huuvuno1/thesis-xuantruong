'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import arrowDown from '@/assets/images/ArrowDownIcon.png';
interface SelectSizeProps {
  list: string[];
  d: string;
}
export default function SelectSize(props: Readonly<SelectSizeProps>) {
  const { list, d } = props;
  return (
    <div className={styles.container}>
      <div>
        <p>{d}</p>

        <Image src={arrowDown} alt="icon" />
      </div>
    </div>
  );
}
