import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

import './DeleteUser.scss'

export default function DeleteUser(){

    const navigate = useNavigate();
    const params = useParams();

    // Crea la funcion que vá llamar la ruta de 
    // DELETE de usuarios
    const deleteUser = (id) => {
        Axios.delete(`http://localhost:3001/deleteUser/${id}`);
        
        document.getElementById('spanBackgroundAbsoluteDeleteUser').style.display = 'none';

        navigate('/');
        window.location.reload();
    }

    function closeDelete(){
        document.getElementById('spanBackgroundAbsoluteDeleteUser').style.display = 'none';
    }

    return(
        <span id='spanBackgroundAbsoluteDeleteUser'>
            <div>
                <h1>Tienes certeza que quieres <br/> excluir este usuário?</h1>

                <div className='divButtonsAction'>
                    <button id='btnCancel' onClick={closeDelete}>Cancelar</button>
                    <button id='btnDelete' onClick={() => {deleteUser(params.id)}}>Excluir</button>
                </div>
            </div>
        </span>
    )
}