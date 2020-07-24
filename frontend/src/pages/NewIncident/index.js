import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import logoimage from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {

    return (

        <div className="new-incident-container">
            {/* a tela em si */}
            <div className="content">
                {/* a caixa dentro de informação */}
                <section>

                    <img src={logoimage} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home.
                    </Link>

                </section>
                
                <form>

                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>

                </form>
            </div>
        </div>



    );
}