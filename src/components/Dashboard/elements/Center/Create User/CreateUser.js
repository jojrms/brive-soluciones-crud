import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

import './CreateUser.scss'

export default function CreateUser(){

    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        photo_url: '',
    })

    const addUser = () => {

        Axios.post("http://localhost:3001/createUser", {
                name: data.name,
                email: data.email,
                phone: data.phone,
                photo_url: data.photo_url,
        });

        document.getElementById("divAbsoluteCreate").style.display = 'none';
        
    };

    function closeDiv(){
        document.getElementById("divAbsoluteCreate").style.display = 'none';
    }

    return(
        <div className='divAbsolute' id='divAbsoluteCreate'>

            <span id="spanBackgroundCreate">
                <div>
                    <img src="https://img.icons8.com/small/32/000000/user-group-man-man.png"/>
                    <h1>Haz la configuración de la cuenta del usuario</h1>
                    <button id='btnClose' onClick={closeDiv}>
                        <img src="https://img.icons8.com/windows/32/null/macos-close.png"/>
                    </button>
                </div>

                <p>Agregue una cuenta a uno de tus empleados para que tenga acceso al dashboard</p>

                <input type='text' placeholder='Nombre Completo' onChange={(event) => {setData({...data, name: event.target.value})}}/>
                <input type='text' placeholder='Teléfono' onChange={(event) => {setData({...data, phone: event.target.value})}}/>
                <input type='email' placeholder='Email' onChange={(event) => {setData({...data, email: event.target.value})}}/>
                
                <button id='btnAddPerson' onClick={addUser}>
                    Concluir la creación
                </button>  
            </span>

        </div>
    )
}