import Container from "../../Components/ContainerComponent/Container";
import styles from "./Servico.module.scss";
import Title from "../../Components/Title/Title";
import Tabela from "../../Components/Tabela/Tabela";
import MetaHead from "../../Components/Helper/MetaHead";

const Servico = () => {
  return (
    <>
      <MetaHead
        title="SLA Express | Serviços"
        desc="Serviços da SLA Express: Coletas e entregas de documentos e volumes,Entregas urgentes ,Serviços de malotes ,Delivery de comidas. "
      />
      <section className={`${styles.servico} animeBottom`}>
        <Container>
          <Title>Nossos serviços</Title>
          <div className={styles.servicoGrid}>
            <div className={`${styles.tabelaPrecos}  `}>
              <h2>Tabela de preços</h2>
              <Tabela />
            </div>
            <div className={`${styles.listaServico} `}>
              <h2>Serviços</h2>
              <ul>
                <li>Coletas e entregas de documentos e volumes</li>
                <li>Entregas urgentes</li>
                <li>Serviços de malotes</li>
                <li>Delivery de comidas</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Servico;
