import styles from './styles.module.css';

interface AdminButtonProps {
  value: string;
  onClick?: () => void;
}
export default function AdminButton(props: Readonly<AdminButtonProps>) {
  return (
    <button className={styles.container} onClick={props?.onClick}>
      {props.value}
    </button>
  );
}
