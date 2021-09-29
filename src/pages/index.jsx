import styles from "../styles/Home.module.scss";
import Banner from "../Components/Banner/Banner";
import Linha from "../Components/Linha/Linha";
import Sobre from "../Components/sobre";
import MetaHead from "../Components/Helper/MetaHead";
function Home() {
  return (
    <>
      <MetaHead
        title="SLA Express | Home"
        desc="SLA Express Entregas e Coletas na região metropolitana de Porto Alegre Motoboy em Porto Alegre."
      />

      <main className={styles.home}>
        <div className={styles.bannerContainer}>
          <Banner />
        </div>
        <Linha />
        <Sobre />
      </main>
    </>
  );
}
export default Home;
