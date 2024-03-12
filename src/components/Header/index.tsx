"use client";

import UserIcon from "@/assets/icons/account.svg";
import CartIcon from "@/assets/icons/cart.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import LogoIcon from "@/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <div
        className={`flex items-center justify-between px-8 py ${styles.header}`}
      >
        <Link href={"/"}>
          <Image src={LogoIcon} alt="" className={styles.logo} />
        </Link>
        <div className={styles.menu}>
          <div className={styles.menuPc}>
            <Link href="/" className={`text-lg font-medium ${styles.menuItem}`}>
              Sản phẩm
            </Link>
            <Link
              className={`text-lg font-medium ${styles.menuItem}`}
              href={"/female"}
            >
              Tin tức
            </Link>
            <Link
              className={`text-lg font-medium ${styles.menuItem}`}
              href={"/male"}
            >
              Giới thiệu
            </Link>
            <Link
              className={`text-lg font-medium ${styles.menuItem}`}
              href={"/male"}
            >
              Liên hệ
            </Link>
          </div>
        </div>
        <div className="cursor-pointer flex items-center justify-between">
          <input type="text" className={styles.inpSearch} />
          <Image src={HeartIcon} width={26} height={26} alt="Heart icon" />
          <Image src={UserIcon} width={39} height={39} alt="User icon" />
          <Image src={CartIcon} width={35} height={40} alt="Shopping cart" />
        </div>
      </div>
    </header>
  );
};
