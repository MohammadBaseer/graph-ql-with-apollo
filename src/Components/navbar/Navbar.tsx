"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";
// import { usePathname } from "next/navigation";

const Navbar = () => {
  // const path = usePathname();
  // console.log("Path::", path);
  return (
    <nav className={styles.container}>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.links} href="/gqlWithFetchSSR">
            GraphQL SSR
          </Link>
        </li>
        <li>
          <Link className={styles.links} href="/gqlWithFetchCSR">
            GraphQL CSR
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
