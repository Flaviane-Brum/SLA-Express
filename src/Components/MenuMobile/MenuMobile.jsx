import ActiveLink from "../ActiveLink/ActiveLink";

import styles from "./MenuMobile.module.scss";

const MenuMobile = ({ btnMobile }) => {
  return (
    <nav
      className={`${styles.menuMobile} ${btnMobile && styles.activeMobile}
       animeLeft`}
    >
      <ul className={btnMobile && styles.activeMobile}>
        <li>
          <ActiveLink href="/" passHref>
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/empresa">Empresa</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/servico" passHref>
            Serviços
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contato">Contato</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
