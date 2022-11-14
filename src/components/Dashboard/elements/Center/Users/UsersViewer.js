import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import './UsersViewer.scss'

export default function UsersViewer({id, photoUrl, name, email, phoneNumber}){

    const navigate = useNavigate();

    // Función que vá hacer la navegación hasta 
    // la url que hace edición de las informaciones del
    // usuario
    const editUser = (id) => {
        navigate(`/editUser/${id}`)
    }

    function exbDelete(){
        navigate(`/deleteUser/${id}`)
        document.getElementById('spanBackgroundAbsoluteDeleteUser').style.display = 'flex'
    }

    return(
        <div className='divBackgroundUser' key={id}>
            <span style={{backgroundImage: `url(${photoUrl})`}} className='spanPhoto'/>
            <div className='spanInfoUser'>
                <h3>{name}</h3>
                <p>Teléfono: {phoneNumber}</p>
                <p>E-mail: {email}</p>
            </div>
            <div className='divButtonsFunction'>
                <button id='btnEditUser' onClick={() => {editUser(id)}}/>
                <button id='btnDeleteUser' onClick={exbDelete}/>
            </div>
        </div>
    )
}