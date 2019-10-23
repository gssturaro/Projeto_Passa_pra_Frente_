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
    return (
    <div className="EscolaCadastro">
        <header>
        <h1>Faça o seu Cadastro!</h1>
        </header>
        <aside>
        <form>
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
        </form>
        </aside>
        <section>
        <form>

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
            </form>
            <Link to="/lista-de-doacoes"><button>Cadastrar</button></Link>
        </section>
            
    </div>
    );
}

export default EscolaCadastro;