import React, { useState } from 'react';
import "./EscolaCadastro.scss";
import Input from "../Input";
import { Link } from 'react-router-dom';

const EscolaCadastro = () => {
    const [nome, setNome] = useState ("");
    const [quantAlunos, setQuantAlunos] = useState ("");
    const [telefone, setTelefone] = useState ("");
    const [local, setLocal] = useState ("");
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
        window.open("http://localhost:3000/lista-de-produtos")
  
      } else {
        resposta("Os emails não correspondem");
        setStatus(false);
      }
    };

    return (
    <div className="EscolaCadastro">
        <h1>Faça o seu Cadastro!</h1>
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
            value={quantAlunos}
            type="number"
            label="Quantidade de Alunos"
            placeholder="Quantidade de alunos"
            atualizarState={setQuantAlunos}
            />            
            <Input
            value={telefone}
            type="text"
            label="Telefone"
            placeholder="Telefone"
            atualizarState={setTelefone}
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
}

export default EscolaCadastro;