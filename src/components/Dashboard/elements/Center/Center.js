import { useSelector } from 'react-redux';
import Axios from 'axios';

import Header from './Header/Header';
import UsersViewer from './Users/UsersViewer';

import './Center.scss'
import { useEffect, useState } from 'react';

export default function Center(){

    const [userList, setUserList] = useState([]);
    
    useEffect(() => {
        Axios.get("http://localhost:3001")
            .then((res) => {
                setUserList(res.data)
            })
    }, []);

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
                {userList.map((user) => {
                    return(
                    <UsersViewer
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        phoneNumber={user.number}
                        urlPhoto={user.urlPhoto}
                    />
                    )
                })}
                
            </section>
        </aside>
    )
}