import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import "../styles/global.scss";
import { GlobalProvider } from "../GlobalContext";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </GlobalProvider>
    </>
  );
}

export default MyApp;
