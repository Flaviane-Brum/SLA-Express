import React from "react";
import styles from "./Tabela.module.scss";

const Tabela = () => (
  <table className={styles.tabela}>
    <thead>
      <tr>
        <th colSpan="1">Preço</th>
        <th colSpan="1">Até</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>R$ 15,00 </td>
        <td>06 km</td>
      </tr>
      <tr>
        <td>R$ 20,00 </td>
        <td>09 km</td>
      </tr>
      <tr>
        <td>R$ 25,00 </td>
        <td>13 km</td>
      </tr>
      <tr>
        <td>R$ 30,00 </td>
        <td>16 km</td>
      </tr>
      <tr>
        <td>R$ 35,00 </td>
        <td>20 km</td>
      </tr>
      <tr>
        <td>R$ 40,00 </td>
        <td>24 km</td>
      </tr>
      <tr>
        <td>R$ 45,00 </td>
        <td>28 km</td>
      </tr>
      <tr>
        <td>R$ 50,00 </td>
        <td>32 km</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colSpan="2">R$ 2,00 o km acima de 32 km</th>
      </tr>
    </tfoot>
  </table>
);

export default Tabela;
