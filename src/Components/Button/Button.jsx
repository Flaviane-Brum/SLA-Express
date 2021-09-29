import styles from "./Button.module.scss";

const Button = ({ children, ...props }) => (
  <button {...props} className={styles.button}>
    {children}
  </button>
);

export default Button;
