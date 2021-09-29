import styles from "./Input.module.scss";

const Input = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  inputError,
  placeholder,
}) => (
  <>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    <input
      className={styles.input}
      type={type}
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
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
        <b>Erro</b> {inputError}
      </span>
    )}
  </>
);

export default Input;
