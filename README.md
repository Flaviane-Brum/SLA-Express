<h1 align="center">
<br>
<img src="https://user-images.githubusercontent.com/77207253/135362314-14d393d5-c22f-49c8-a3d0-da4c12cbc6ae.png" >
<br>
SLA EXPRESS

<h2>:pencil: Sobre o projeto</h2>
<p>
Website feito para um motoboy, com as informações de preços e contato. Onde o usuário poderá enviar e-mail ou entrar em contato via whatsapp.
</p>
<br>

<div >
  <h2>:camera_flash: Screenshots das telas</h2>
  <h3  align="left">:desktop_computer: Desktop</h3>
  <img   src="https://user-images.githubusercontent.com/77207253/135362214-ced6590d-3840-40f9-80da-562fab057895.gif" />
  <br><br>
  <h3 align="left" >:iphone: Mobile</h3>
  <img   src="https://user-images.githubusercontent.com/77207253/135362270-e98aa090-7670-425f-9d5a-7b2a4ca95127.gif"  />
</div>

 <h2> :dart: Objetivo do projeto</h2>
  <p>Este projeto foi desenvolvido para colocar em pratica os conceitos aprendidos em Next.js</p>

<h2> Features</h2>
- Consumo da API Email.js<br>
- Validação de formulário

<h2>Pré-requisitos</h2>
<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js. Além disto é bom ter um editor para trabalhar com o código como VSCode </>
<h2>Rodando o server</h2>

```bash


# Instale as dependências
$ yarn
# ou
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ yarn start
# ou
$ npm run start
```

<h2> Instalação do  EmailJS SDK </h2>

```bash
$ npm install emailjs-com --save
```

## Variaveis de ambiente

<p>Para usar o EmailJS, você vai precisar das seguintes variaveis de ambiente:</p>

```bash
    NEXT_PUBLIC_SERVICE_ID: "YOUR_SERVICE_ID"
    NEXT_PUBLIC_TEMPLATE_ID: "YOUR_TEMPLATE_ID"
    NEXT_PUBLIC_EMAILJS_USER_ID: "YOUR_USER_ID"
```

<h2> Exemplo de uso</h2>

```javascript
import React, { useRef } from "react";
import emailjs from "emailjs-com";
const form = useRef();

emailjs
  .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_USER_ID")
  .then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
```

<h2> 🛠 Tecnologias </h2>
As seguintes ferramentas foram usadas na construção do projeto:

- React
- NextJS
- EmailJS
- Sass
- CSS Modules
- Context API

Made with :hearts: by Flaviane Brum.
