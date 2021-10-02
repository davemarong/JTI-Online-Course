//   IMPORT
// React
import React, { useState, useEffect } from "react";

// Next
import Link from "next/link";
// Components
import { NavItemsPublic, NavItemsLogginIn } from "./NavItems";
// Styles
import styles from "../../styles/Nav.module.scss";
// Functional components
export default function Nav({ isLogged, navItems }) {
  // State

  return (
    <nav className={styles.nav_container}>
      <ul className={styles.nav}>
        {NavItemsPublic.map((item, id) => {
          return (
            <li className={styles.nav_item} key={item.id}>
              <Link href={item.href}>
                <a className={styles.nav_item_a}>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
