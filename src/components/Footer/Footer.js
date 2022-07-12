//   IMPORT
// React
import React, { useState, useEffect } from "react";
// Next
import Link from "next/link";
import Image from "next/image";
// Assets
import logo from "../../../public/images/logo.svg";
// Styles
import styles from "./Footer.module.scss";
// Components
import { NavItemsPublic, NavItemsLoggedIn } from "../Nav/NavItems";
// Functional components
export default function Footer({ isLogged }) {
  // State
  const [navItems, setNavItems] = useState(NavItemsPublic);

  // Effect
  useEffect(() => {
    if (isLogged) {
      setNavItems(NavItemsLoggedIn);
    } else {
      setNavItems(NavItemsPublic);
    }
  }, [isLogged]);

  // Return
  return (
    <div className={styles.footer}>
      <div className={styles.footer_hr} />
      <Link href="/">
        <a className={styles.logo}>
          <Image src={logo} width="200" height="100" />
        </a>
      </Link>
      <ul className={styles.nav}>
        {navItems.map((item, id) => {
          return (
            <li key={item.id} className={styles.nav_item}>
              <Link className={styles.nav_item_link} href={item.href}>
                <a className={styles.nav_item_link_a}>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className={styles.copyright}>
        © 2022 JTI Online Kurs. Alle rettigheter reservert. Nettside av{" "}
        <a className={styles.codebydave} href="www.codebydave.no">
          Marong Utvikling
        </a>
        .
      </p>
    </div>
  );
}
