import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./Sobre.module.scss";
import moto from "../../../public/images/moto.jpg";
import Container from "../ContainerComponent/Container";
const Sobre = () => {
  return (
    <section className={`${styles.sobre} animeLeft`}>
      <Container>
        <Title> SLA Express</Title>

        <div className={styles.sobreGrid}>
          <div className={styles.sobreText}>
            <h2>Entregas e Coletas</h2>
            <p>
              Me chamo Sergio Lemos, presto serviços de entregas na grande
              região metropolitana de Porto Alegre. Sou um profissional
              comprometido e responsável. Ágil nas entregas e eficiente nas
              estradas, tenho disponibilidade das 8h às 23h para atender a você
              ou sua empresa. Podendo levar seu material, com todo o cuidade e
              segurança ao seu destino!
            </p>
            <Link href="/empresa">
              <a>
                <Button>Conheça nossa empresa</Button>
              </a>
            </Link>
          </div>

          <div className={styles.divImg}>
            <Image src={moto} alt="Foto da moto usada nas entregas" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sobre;
