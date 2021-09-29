import React from "react";
import styles from "./Footer.module.scss";
import { FaHeart, FaArrowCircleUp } from "react-icons/fa";
import ActiveLink from "./ActiveLink/ActiveLink";
const Footer = () => (
  <footer className={styles.footer}>
    <p>
      Criado com <FaHeart color="#764701" /> por Flaviane Brum
    </p>
    <div className={styles.arrow}>
      <ActiveLink href="/">
        <FaArrowCircleUp size={30} color="#764701" />
      </ActiveLink>
    </div>
  </footer>
);

export default Footer;
