import styles from "./styles.module.css";

interface AdminButtonProps {
  value: string;
  onClick?: () => void;
  className?: string;
}
export default function AdminButton(props: Readonly<AdminButtonProps>) {
  return (
    <button
      className={`${styles.container} ${props.className}`}
      onClick={props?.onClick}
    >
      {props.value}
    </button>
  );
}
