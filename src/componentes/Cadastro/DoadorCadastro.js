import React, { useState } from 'react';
import "./DoadorCadastro.scss";
import Input from "../Input";
import { Link } from 'react-router-dom';

const DoadorCadastro = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState ("");
    const [local, setLocal] = useState ("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState ("");
    const [confirmEmail, setConfirmEmail] = useState ("");
    const [senha, setSenha] = useState ("");

    return (
    <div className="DoadorCadastro">
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
            />            
            <Input
            value={idade}
            type="number"
            label="Idade"
            placeholder="Idade"
            atualizarState={setIdade}
            />            
            <Input
            value={local}
            type="text"
            label="Local"
            placeholder="Local"
            atualizarState={setLocal}
            />            
            <Input
            value={cpf}
            type="text"
            label="CPF"
            placeholder="CPF"
            atualizarState={setCpf}
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
            <Link to="/doacao"><button>Cadastrar</button></Link>         
            </form>
            </section>          
    </div>
    );
}

export default DoadorCadastro;