
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';

import logoimage from '../../assets/logo.svg';

export default function Register() {

    function handleRegister(e){
        e.preventDefault();
    }

    return (

        <div className="register-container">
            {/* a tela em si */}
            <div className="content">
                {/* a caixa dentro de informação */}
                <section>

                    <img src={logoimage} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para o logon
                    </Link>

                </section>
                <form onSubmit={handleRegister}>

                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">

                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />

                    </div>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>

                </form>
            </div>
        </div>



    );
}