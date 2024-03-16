import styles from './styles.module.css';
import ArrawDownIcon from '@/assets/icons/arraw-down.svg';

interface AdminDropDownProps {
  value: string;
}
export default function AdminDropDown(props: Readonly<AdminDropDownProps>) {
  return (
    <div className={styles.filterBox}>
      <p className={styles.filterTitle}>{props.value}</p>
      <ArrawDownIcon />
    </div>
  );
}
