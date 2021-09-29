import React from "react";
import styles from "./empresa.module.scss";
import Container from "../../Components/ContainerComponent/Container";
import Title from "../../Components/Title/Title";
import Button from "../../Components/Button/Button";
import MetaHead from "../../Components/Helper/MetaHead";
import Link from "next/link";
const index = () => {
  return (
    <>
      <MetaHead
        title="SLA Express | Empresa"
        desc="Empresa - Sobre a empresa SLA Express e seus valores."
      />
      <section className={`${styles.empresa} animeLeft`}>
        <Container>
          <Title>Empresa</Title>
          <div className={styles.empresaGrid}>
            <div className={styles.empresaTexto}>
              <h2>Qualidade em tele-entregas</h2>
              <p>
                A Sla Express está focada em solucionar todas as suas
                necessidades em logísticas e telentregas,buscando sempre ser
                parceira de seu negócio,de forma a gerar rapidez e segurança
                para sua empresa.
              </p>
              <Link href="/contato" passHref>
                <a>
                  <Button>Entre em contato</Button>
                </a>
              </Link>
            </div>

            <div>
              <h2>Nossos valores</h2>
              <ul>
                <li>Entregar as encomendas no prazo combinado</li>
                <li>Garantiar a mercadoria em perfeito estado</li>
                <li>Possibilitar aos clientes agilidade na sua logística</li>
                <li>Ser parceiro de nossos clientes,visando agregar valores</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default index;
