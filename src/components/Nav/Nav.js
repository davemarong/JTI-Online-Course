//   IMPORT
// React
import React, { useState, useEffect } from "react";
// Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from "@mui/material/IconButton";
// Framer motion
import { motion, useCycle } from "framer-motion";
// Components
import { NavItemsPublic, NavItemsLoggedIn } from "./NavItems";
// Styles
import desktopStyles from "./NavDesktop.module.scss";
import mobileStyles from "./NavMobile.module.scss";
// Assets
import logo from "../../../public/images/logo.svg";
// Functional components

export default function Nav({ isLogged }) {
  // State
  const [navItems, setNavItems] = useState(NavItemsPublic);
  const [styles, setStyles] = useState(desktopStyles);

  // Media query
  const matches = useMediaQuery("(min-width:600px)");

  // Framer motion hook
  const [openNav, cycleOpenNav] = useCycle(0, "auto");

  // Router
  const router = useRouter();
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
  const handleOpenNav = () => {
    cycleOpenNav();
  };
  console.log(router.pathname);
  // Return
  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} width="250" height="100" />
          </a>
        </Link>
      </div>
      <nav>
        {!matches && (
          <IconButton
            className={styles.nav_hamburgerIcon}
            onClick={handleOpenNav}
          >
            <MenuRoundedIcon fontSize="large">Open</MenuRoundedIcon>
          </IconButton>
        )}
        <motion.ul animate={{ height: openNav }} className={styles.nav}>
          {navItems.map((item, id) => {
            return (
              <li className={styles.nav_item} key={item.id}>
                <Link href={item.href}>
                  <a
                    className={
                      router.pathname == item.href
                        ? styles.nav_item_a_active
                        : styles.nav_item_a
                    }
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}

          <Link href="/bli-medlem">
            <a>
              <button className={styles.navMainButton}>Bli Medlem</button>
            </a>
          </Link>
        </motion.ul>
      </nav>
    </>
  );
}
