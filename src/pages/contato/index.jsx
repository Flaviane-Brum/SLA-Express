import Container from "../../Components/ContainerComponent/Container";
import Lista from "../../Components/Lista/Lista";
import Title from "../../Components/Title/Title";
import styles from "./style.module.scss";
import Input from "../../Components/Form/Input";
import TextArea from "../../Components/Form/TextArea";
import Button from "../../Components/Button/Button";
import useForm from "../../Hooks/useForm";
import emailjs from "emailjs-com";
import Loading from "../../Components/Helper/Loading/Loading";
import Sucesso from "../../Components/Helper/Sucesso";
import { useRef } from "react";
import { useAppContext } from "../../GlobalContext";
import MetaHead from "../../Components/Helper/MetaHead";

const Contato = () => {
  const { sucesso, loading, setSucesso, setLoading } = useAppContext();
  const userName = useForm();
  const userEmail = useForm("email");
  const phone = useForm("telefone");
  const message = useForm();
  const form = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      userName.validate(userName) &&
      userEmail.validate(userEmail) &&
      phone.validate(phone) &&
      message.validate(message)
    ) {
      setLoading(true);

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setSucesso(
              "Sua mensagem foi enviada com sucesso! Em breve entraremos em contato!! "
            );
          },
          (error) => {
            console.log(error.text);
            setSucesso(null);
          }
        )
        .finally(() => {
          userName.limparForm();
          userEmail.limparForm();
          phone.limparForm();
          message.limparForm();
          setLoading(false);
          setTimeout(() => {
            setSucesso(null);
          }, 3500);
        });
    }
  }

  return (
    <>
      <MetaHead
        title="SLA Express | Contato"
        desc="Contato - Fale comigo e tire suas dúvidas sobre os meus serviços - Fale comigo e tire suas dúvidas  através do e-mail slaexpress01@gmail.com ou pelo whatsapp (51)98686-6140."
      />
      <section className={`${styles.contato} animeTop`}>
        <Container>
          <Title>Contato</Title>
          <div className={styles.contatoGrid}>
            <form onSubmit={handleSubmit} ref={form}>
              <Input
                label="Nome"
                type="text"
                id="nome"
                name="userName"
                placeholder="O seu nome"
                {...userName}
              />
              <Input
                label="Email"
                name="userEmail"
                type="email"
                id="email"
                placeholder="O seu e-mail"
                {...userEmail}
              />
              <Input
                label="Telefone"
                name="phone"
                type="tel"
                id="telefone"
                placeholder="99-99999-9999"
                {...phone}
              />
              <TextArea
                name="message"
                {...message}
                label="Mensagem"
                id="mensagem"
              />
              {loading && <Loading />}
              <Sucesso sucesso={sucesso} />

              <Button type="submit" value="Send">
                Enviar
              </Button>
            </form>
            <Lista />
          </div>
        </Container>
      </section>
    </>
  );
};
export default Contato;
