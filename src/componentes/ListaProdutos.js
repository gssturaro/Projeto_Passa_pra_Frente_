import React from "react";
import './ListaProdutos.scss';
import { Link } from 'react-router-dom';

const ListaProdutos = () => {
    return(
        <div className="ListaProdutos">
            <div className="Perfil">
                <h1>Nome</h1>
                <Link to="/editar-perfil"><button>Editar perfil</button></Link>
            </div>
        </div>
    )
}

export default ListaProdutos;