import ActiveLink from "../Components/ActiveLink/ActiveLink";
import Title from "../Components/Title/Title";
export default function Custom404() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Title>404 - Página não encontrada</Title>
      <ActiveLink href="/">Voltar para a home</ActiveLink>
    </div>
  );
}
