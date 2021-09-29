import styles from "./TextArea.module.scss";

const TextArea = ({ name, value, onChange, onBlur, inputError, label, id }) => (
  <>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    <textarea
      className={styles.textArea}
      placeholder="Envie sua mensagem"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
    />
    {inputError && (
      <span
        style={{
          border: "1px solid #8C1E1E",
          padding: ".5rem",
          background: "#F0C7C7",
          color: "#8C1E1E",
          marginTop: "0.8rem",
          borderRadius: "0.4rem",
          fontSize: ".9rem",
          display: "inline-block",
        }}
      >
        <b>Erro</b>: {inputError}
      </span>
    )}
  </>
);

export default TextArea;
