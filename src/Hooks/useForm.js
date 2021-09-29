import { useState } from "react";

const tipos = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message:
      "O endereço usado no campo Email não é um endereço de e-mail válido.",
  },
  telefone: {
    regex: /\([1-9]\d\)\s9?\d{4}-\d{4}/,
    message: "Utilize o seguinte formato: (xx) xxxxx-xxxx",
  },
};
const useForm = (tipo) => {
  const [value, setValue] = useState("");
  const [inputError, setInputError] = useState(null);
  function maskValidate(valor) {
    return valor
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  }

  function validate(valor) {
    if (tipo === false) return true;
    if (valor.length === 0) {
      setInputError(" Este campo é de preenchimento obrigatório");
      return false;
    }
    if (tipos[tipo] && !tipos[tipo].regex.test(valor)) {
      setInputError(tipos[tipo].message);
      return false;
    }
    if (valor.length !== 0) {
      setInputError(null);
      return true;
    }
    return true;
  }
  function limparForm() {
    setValue("");
  }
  function onChange({ target }) {
    if (inputError) validate(target.value);
    setValue(target.value);
    if (tipo === "telefone") setValue(maskValidate(target.value));
  }

  return {
    value,
    onChange,
    inputError,
    setValue,
    onBlur: () => validate(value),
    limparForm: () => limparForm(value),
    validate: () => validate(value),
  };
};

export default useForm;
