import Head from "next/head";
const MetaHead = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={props.desc} />
    <meta
      name="keywords"
      content="Motoboy em Porto Alegre,Entregas e Coletas na região metropolitana de Porto Alegre, Express, delivery, entregas em Porto Alegre, motoboy,Sergio Lemos "
    />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SLA Express" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:url" content="https://sla-express.vercel.app/" />
    <meta name="author" content="Flaviane Brum" />
    {/*  link manifest.json  */}
    <link rel="manifest" href="/manifest.json" />
    {/* <!-- this sets the color of url bar  --> */}
    <meta name="theme-color" content="#15171b" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href="https://sla-express.vercel.app/" />
  </Head>
);
export default MetaHead;
