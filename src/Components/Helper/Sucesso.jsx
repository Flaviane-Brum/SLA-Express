const Sucesso = ({ sucesso }) => {
  if (!sucesso) return null;
  return (
    <p
      style={{
        border: "1px solid #38621D",
        padding: ".5rem",
        background: "#D1E5C4",
        color: "##38621D",
        marginTop: "0.8rem",
        borderRadius: "0.4rem",
        fontSize: ".9rem",
        display: "inline-block",
      }}
    >
      <b>Sucesso</b>: {sucesso}
    </p>
  );
};

export default Sucesso;
