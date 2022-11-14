import Axios from 'axios';

import Header from './Header/Header';
import UsersViewer from './Users/UsersViewer';

import './Center.scss'
import { useEffect, useState } from 'react';

export default function Center(){

    // Creando un Hook con todos los usuarios
    // que está recibiendo del db
    const [userList, setUserList] = useState([]);
    
    // Llama la ruta GET para recibir los usuarios
    useEffect(() => {
        Axios.get("http://localhost:3001")
            .then((res) => {
                setUserList(res.data)
            })
    }, []);

    // Función que vá hacer la div del elemento del archivo
    // "CreateUser.js" quedar visible para crear usuario
    function createUser(){
        document.getElementById('divAbsoluteCreate').style.display = 'flex';
    }
    

    return(
        <aside>

            <Header
                h1Title={"Empleados"}
            />

            <button id='btnCreateUser' onClick={createUser}>
                <img src="https://img.icons8.com/small/96/FFFFFF/add.png"/>
                Crear Usuario
            </button>

            <section className='sectionListUsers'>

                {/* Hace un map en el hook de usuarios para 
                exhibir cada uno con el elemento creado en 
                el archivo "UsersViewer.js" */}
                
                {userList.map((user) => {
                    return(
                    <UsersViewer
                        key={user._id}
                        id={user._id}
                        name={user.name}
                        email={user.email}
                        phoneNumber={user.phone}
                        photoUrl={user.photo_url}
                    />
                    )
                })}
                
            </section>
        </aside>
    )
}