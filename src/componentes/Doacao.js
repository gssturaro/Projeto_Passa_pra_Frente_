import React from "react";
import './Doacao.scss';
import { Link } from 'react-router-dom';

const Doacao = () => {
    return(
        <div className="Doacao">
            <h1>Faça sua doação!!</h1>
            <form>
            <input placeholder="Nome do item a ser doado"></input>
            <h4>Imagem do item:</h4>
            <input type="file" />
            <input type="text" placeholder="Descrição do item" />
            <Link to="/lista-de-produtos"><button>Enviar</button></Link>
            </form>
        </div>
    );

}
export default Doacao;