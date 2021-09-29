import styles from "./Menu.module.scss";
import ActiveLink from "../ActiveLink/ActiveLink";

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.desktop}>
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
export default Menu;
