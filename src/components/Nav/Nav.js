import React from "react";
import Link from "next/link";
import { NavItems } from "./NavItems";
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
