import React from "react";
import './Doacao.scss';
import { Link } from 'react-router-dom';

const Doacao = () => {
    return(
        <div className="Doacao">
            <h1>Faça sua doação!</h1>
            <form>
                <aside> 
                    <input placeholder="Nome do item a ser doado"></input>
                    <textarea className="descricao" name="descrição" id="" cols="30" rows="10" placeholder="Descrição do produto"></textarea>
                </aside>
                <h4>Imagem do item:</h4>
                <input type="file" />
                <Link to="/lista-de-produtos"><button>Enviar</button></Link>
            </form>
        </div>
    );

}
export default Doacao;