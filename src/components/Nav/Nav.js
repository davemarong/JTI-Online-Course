//   IMPORT
// React
import React from "react";
// Next
import Link from "next/link";
// Components
import { NavItems } from "./NavItems";
// Functional components
export default function Nav() {
  return (
    <div>
      <ul>
        {NavItems.map((item, id) => {
          return (
            <li key={item.id}>
              <Link href={item.href}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
