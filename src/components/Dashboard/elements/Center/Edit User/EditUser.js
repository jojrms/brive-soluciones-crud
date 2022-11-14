import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

import MenuLeft from '../../Menu Left/MenuLeft'

import './EditUser.scss';


export default function EditUser(){

    const navigate = useNavigate();
    const params = useParams();

    const [dataUser, setDataUser] = useState({
        name: '',
        email: '',
        phone: '', 
        photoUrl: '',
    });

    let datasUser;

    console.log('lleno', dataUser);

    useEffect(() => {
        Axios.post('http://localhost:3001/user', {id: params.id})
        .then(res => {
            datasUser = res.data[0];

            console.log(datasUser);

            setDataUser({...datasUser, name: datasUser.name, email: datasUser.email, phone: datasUser.phone, photoUrl: datasUser.photo_url})
        })

    }, [])

    function editUser(){

        const newDatas = {
            id: params.id,
            name: dataUser.name,
            email: dataUser.email,
            phone: dataUser.phone,
        }

        Axios.post("http://localhost:3001/editUser", newDatas)
            .then(res => {
                console.log(res.data);
                alert(res.data)

                navigate('/')
            })
            .then(err => {
                console.log(err);
            })

        console.log(newDatas);
    }


    return(
            <aside className='asideAbsolute' id='asideAbsoluteEditUser'>
                <MenuLeft/>

                <section>
                    <span className='spanHeader'>
                        <span id='spanImageUser' style={{backgroundImage: `url(${dataUser.photoUrl})`}}/>
                    </span>               
                    <span id="spanBackgroundEdit">
                        <aside>
                            <label>Nombre</label>
                            <input type='text' placeholder={dataUser.name} onChange={(e) => setDataUser({...dataUser, name: e.target.value})}/>
                            <label>Email</label>
                            <input type='email' placeholder={dataUser.email} onChange={(e) => setDataUser({...dataUser, email: e.target.value})}/>
                            <label>Teléfono</label>
                            <input type='text' placeholder={dataUser.phone} onChange={(e) => setDataUser({...dataUser, phone: e.target.value})}/>
                            
                            <button id='btnEditUser1' onClick={editUser}>Confirmar Edição</button>
                        </aside>

                    </span>
                </section>
                

            </aside>
    )
}