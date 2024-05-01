import ArrawDownIcon from "@/assets/icons/arraw-down.svg";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface AdminDropDownProps {
  value: string | ReactNode;
}
export default function AdminDropDown(props: Readonly<AdminDropDownProps>) {
  return (
    <div className={styles.filterBox}>
      <p className={styles.filterTitle}>{props.value}</p>
      <ArrawDownIcon />
    </div>
  );
}
