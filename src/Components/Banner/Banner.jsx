import styles from "./Banner.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
const Banner = () => (
  <section className={`${styles.banner} `}>
    <div className={styles.container}>
      <h1>Motoboy em Porto Alegre </h1>
      <h3> Entregas urgentes</h3>
      <span>Serviço de Tele-Entrega</span>
      <p>Coleta e Entrega em toda região de Porto Alegre.</p>
      <div className={styles.whatsapp}>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5551986866140&text=Olá, gostaria de informações sobre  os valores"
          rel="noreferrer"
        >
          <IoLogoWhatsapp color="#25D366" size={65} /> (51)98686-6140
        </a>
      </div>
    </div>
  </section>
);

export default Banner;
