import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import heroesmage from '../../assets/heroes.png';
import logoimage from '../../assets/logo.svg';


export default function Logon() {

    return (

        <div className="logon-container">

            <section className="form">

                <img src={logoimage} alt='Be The Hero' />


                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder='Sua ID'></input>
                    <button type='submit'>Entrar</button>
                    <a href='/register'>
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                </a>

                </form>

            </section>
            
            <img src={heroesmage} alt="Heroes" />
        </div>

    );
}