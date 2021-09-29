import styles from "./Lista.module.scss";
const Lista = () => {
  return (
    <ul className={`${styles.dados}  `}>
      <li>slaexpress01@gmail.com</li>
      <li>(51)98686-6140</li>
      <li>Rua Clemente Pereira, n° 475</li>
      <li>Seg a Sáb das 8h às 23h</li>
    </ul>
  );
};
export default Lista;
