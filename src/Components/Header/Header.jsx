import styles from "./Header.module.scss";
import logo from "../../../public/images/Logotipo.png";
import Menu from "../Menu/Menu";
import Link from "next/link";
import Image from "next/image";
import MenuMobile from "../MenuMobile/MenuMobile";
import useMedia from "../../Hooks/useMedia";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const mobile = useMedia("(max-width:40rem)");
  const [btnMobile, setBtnMobile] = useState(false);
  const [className, setClassName] = useState("");
  const ref = useRef();
  const handleMobile = () => {
    setBtnMobile(!btnMobile);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setClassName("active");
    } else {
      setClassName("");
    }
  };
  return (
    <header className={styles.header} ref={ref}>
      <div className={`${styles.container} ${className && styles.active}`}>
        <div className={styles.headerFixed}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image src={logo} alt="Logo da Sla Express" />
              </a>
            </Link>
          </div>

          {mobile ? (
            <>
              {btnMobile && (
                <MenuMobile btnMobile={btnMobile} setBtnMobile={setBtnMobile} />
              )}
              <button
                type="button"
                onClick={handleMobile}
                className={`${styles.buttonMobile} ${
                  btnMobile && styles.btnMobileActive
                }`}
                aria-label="Menu"
              />{" "}
            </>
          ) : (
            <Menu />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
