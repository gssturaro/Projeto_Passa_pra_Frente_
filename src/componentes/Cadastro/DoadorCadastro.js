import React, { useState, useEffect } from "react";
import Input from "../Input";

import "./DoadorCadastro.scss";

const DoadorCadastro = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState ("");
    const [local, setLocal] = useState ("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState ("");
    const [confirmEmail, setConfirmEmail] = useState ("");
    const [senha, setSenha] = useState ("");
    const [count, setCount] = useState(1);
    const [mensagem, setMensagem] = useState("");
    const [status, setStatus] = useState();

  const resposta = texto => {
    setMensagem(texto);
    setTimeout(() => {
      setMensagem("")
    }, 1500);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (email === confirmEmail) {
      const payload = {
        name: nome,
        email: email,
        confirm_email: confirmEmail,
        password: senha
    }

      localStorage.setItem(`Dados${count}`, JSON.stringify(payload));
      setCount(count + 1);
      setNome("");
      setEmail("");
      setConfirmEmail("");
      setSenha("");
      resposta("Cadastrado com sucesso")
      setStatus(true)
      window.open("http://localhost:3000/doacao")

    } else {
      resposta("Os emails não correspondem");
      setStatus(false);
    }
  };

  return (
    <div className="DoadorCadastro">
      <h1>Faça seu Cadastro!</h1>
      <p>{mensagem}</p>
      <form onSubmit={handleSubmit}>
        <Input
            value={nome}
            type="text"
            label="Nome"
            placeholder="Nome completo"
            atualizarState={setNome}
            obrigatorio
            />            
            <Input
            value={idade}
            type="number"
            label="Idade"
            placeholder="Idade"
            atualizarState={setIdade}
            obrigatorio
            />            
            <Input
            value={local}
            type="text"
            label="Local"
            placeholder="Local"
            atualizarState={setLocal}
            obrigatorio
            />            
            <Input
            value={cpf}
            type="text"
            label="CPF"
            placeholder="CPF"
            atualizarState={setCpf}
            obrigatorio
            />
            <Input
            value={email}
            type="email"
            label="E-mail"
            placeholder="E-mail"
            atualizarState={setEmail}
            obrigatorio
            />            
            <Input
            value={confirmEmail}
            type="text"
            label="Confirmação de Email"
            placeholder="Confirmação de E-mail"
            atualizarState={setConfirmEmail}
            obrigatorio
            />            
            <Input
            value={senha}
            type="password"
            label="Senha"
            placeholder="Senha"
            atualizarState={setSenha}
            obrigatorio
            />
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default DoadorCadastro;