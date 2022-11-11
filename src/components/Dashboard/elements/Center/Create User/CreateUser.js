import { useState } from 'react';
import { useDispatch } from 'react-redux'

import { addUser } from '../../../../../features/Users';

import './CreateUser.scss'

export default function CreateUser(){

    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
    })

    const createUser = () => {

        if(data.name.length < 5 || data.email.length < 10 || data.username.length < 5){
            window.alert('Não foi possível criar este usuário. Preencha todos os campos corretamente')
        } 
        else{

            // Puxa a chave "newUser" para fazer verificação de sua existência
            const newUser = JSON.parse(localStorage.getItem('newUser'));

            // Cria uma constante para armazenar em uma array os dados 
            // do usuário que será criado
            const user = dispatch(addUser({
                id: newUser[newUser.length - 1].id + 1, 
                name: data.name , 
                username: data.username , 
                email: data.email ,
                urlPhoto: "https://img.icons8.com/fluency-systems-regular/96/000000/user.png" ,
            }))

            console.log('novo usuario no dispatch', user.payload);

            // Armazena em uma constante a array com os usuários fakes da
            // chave "users"
            const fakeUsers = JSON.parse(localStorage.getItem('users'));
            console.log('usuarios fakes', fakeUsers);

            // Se existir essa chave com um valor, executa
            if( newUser ){ 

                // Unifico a array do localStorage com o objeto
                // que contem o novo usuário
                newUser.push(user.payload);
                localStorage.setItem('newUser', JSON.stringify(newUser));

                console.log(newUser, 'A lista de usuários existentes foi atualizado');
            }      

            document.getElementById('divAbsoluteCreate').style.display = 'none';
        }

        
    }

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

                <input type='text' placeholder='Nombre y Apellido'/>
                <input type='text' placeholder='Username'/>
                <input type='email' placeholder='Email'/>
                
                <button id='btnAddPerson' onClick={createUser}>
                    <img src="https://img.icons8.com/small/16/F5F5F5/add.png"/>
                    Crear
                </button>  
            </span>

        </div>
    )
}