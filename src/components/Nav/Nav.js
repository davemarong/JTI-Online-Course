//   IMPORT
// React
import React, { useState, useEffect, useRef } from "react";
// Next
import Link from "next/link";
// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from "@mui/material/IconButton";

// Components
import { NavItemsPublic, NavItemsLoggedIn } from "./NavItems";
// Styles
import desktopStyles from "./NavDesktop.module.scss";
import mobileStyles from "./NavMobile.module.scss";
// Functional components
export default function Nav({ isLogged }) {
  // State
  const [navItems, setNavItems] = useState(NavItemsPublic);
  const [styles, setStyles] = useState(desktopStyles);
  // Media query
  const matches = useMediaQuery("(min-width:600px)");
  // Ref
  const mobileNav = useRef(null);
  // Effect
  useEffect(() => {
    if (isLogged) {
      setNavItems(NavItemsLoggedIn);
    } else {
      setNavItems(NavItemsPublic);
    }
  }, [isLogged]);
  useEffect(() => {
    if (matches) {
      setStyles(desktopStyles);
    } else {
      setStyles(mobileStyles);
    }
  }, [matches]);

  // Functions
  const handleToggleNav = () => {
    if (mobileNav.current.className === `${styles.nav}`) {
      mobileNav.current.className = `${styles.nav_hidden}`;
    } else {
      mobileNav.current.className = `${styles.nav}`;
    }
  };
  // Return
  return (
    <nav className={styles.nav_container}>
      {!matches && (
        <IconButton onClick={handleToggleNav}>
          <MenuRoundedIcon>Open</MenuRoundedIcon>
        </IconButton>
      )}
      <ul ref={mobileNav} className={styles.nav}>
        {navItems.map((item, id) => {
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
