import React, { useState, useEffect } from 'react';
import '../components/Styles/accountuser.css';
import Header from '../components/Header';
import { useAuthStore } from '../stores/authStores';
import axios from 'axios';

import ImageAccount from '../assets/accountuser.svg';

function AccountUser() {

    //Constantes para armazenar dados para mandar para api
    const [saldo, setSaldo] = useState("");
    const [agencia, setAgencia] = useState("");
    const [conta, setConta] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [loading, setLoading] = useState(true);

    //Token
    const accessToken = useAuthStore(state => state.accessToken);

    //Busca o nome
    async function fetchName() {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/user/me/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log(response.data);
            const { first_name, last_name } = response.data;
            setFirstname(first_name);
            setLastname(last_name);
        } catch (error) {
            console.error("Error fetching name:", error);
        }
    }
    
    //Busca informação da conta do usuario
    async function fetchAccountInformation() {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/accounts/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log(response.data);
            const accountData = response.data[0];
            setSaldo(accountData.saldo);
            setAgencia(accountData.agencia);
            setConta(accountData.numero);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching account information:", error);
        }
    }

    useEffect(() => {
        fetchName();
        fetchAccountInformation();
    }, [accessToken]);

    return (
        <>
            <Header />
            <form className='containerAccount'>
                <div className="informations">
                    <h1>Hello {firstname} {lastname}!</h1>
                    {loading ? (
                        <p>Você não tem conta. Crie uma e tente novamente!</p>
                    ) : (
                        <>
                            {saldo !== "" ? (
                                <>
                                    <div className="details">
                                        <h2>Your agency <span>{agencia}</span></h2>
                                        <h2>Account number <span>{conta}</span></h2>
                                    </div>
                                    <h2>Your balance is <span className='saldo'> R$ {saldo}</span></h2>
                                </>
                            ) : (
                                <p>No balance information available.</p>
                            )}
                        </>
                    )}
                </div>
                <div className="mais-inform">
                    <h3>For more information download the app</h3>
                    <img src={ImageAccount} alt='Logo' />
                </div>
            </form>
        </>
    );
}

export default AccountUser;
