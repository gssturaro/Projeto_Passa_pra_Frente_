import React, { useState } from 'react';
import "./EscolaCadastro.scss";
import Input from "../Input";


const EscolaCadastro = () => {
    const [nome, setNome] = useState ("");
    const [diretor, setDiretor] = useState ("");
    const [quantAlunos, setQuantAlunos] = useState ("");
    const [telefone, setTelefone] = useState ("");
    const [local, setLocal] = useState ("");
    const [email, setEmail] = useState ("");
    const [confirmEmail, setConfirmEmail] = useState ("");
    const [senha, setSenha] = useState ("");
    return (
    <div className="EscolaCadastro">
        <h1>Faça o seu Cadastro!</h1>
        <form>
            <Input
            value={nome}
            type="text"
            label="Nome"
            placeholder="Nome completo"
            atualizarState={setNome}
            />            
            <Input
            value={diretor}
            type="text"
            label="Diretor"
            placeholder="Diretor"
            atualizarState={setDiretor}
            />            
            <Input
            value={quantAlunos}
            type="text"
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
            />          
            <Input
            value={local}
            type="text"
            label="Local"
            placeholder="Local"
            atualizarState={setLocal}
            />   

            <Input
            value={email}
            type="email"
            label="E-mail"
            placeholder="E-mail"
            atualizarState={setEmail}
            />            
            <Input
            value={confirmEmail}
            type="text"
            label="Confirmação de Email"
            placeholder="Confirmação de E-mail"
            atualizarState={setConfirmEmail}
            />            
            <Input
            value={senha}
            type="password"
            label="Senha"
            placeholder="Senha"
            atualizarState={setSenha}
            />   
            <button>Cadastrar</button>         
        </form>
    </div>
    );
}
export default EscolaCadastro;
