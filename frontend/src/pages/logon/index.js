import React from 'react';
import {Link} from 'react-router-dom';
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
                    <button className='button' type='submit'>Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                </Link>

                </form>

            </section>
            
            <img src={heroesmage} alt="Heroes" />
        </div>

    );
}