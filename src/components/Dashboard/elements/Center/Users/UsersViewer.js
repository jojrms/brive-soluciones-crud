import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import './UsersViewer.scss'

export default function UsersViewer({id, urlPhoto, name, email, phoneNumber}){

    const navigate = useNavigate();

    const deleteUser = (id) => {
        navigate(`/deleteUser/${id}`);
        Axios.delete(`http://localhost:3001/deleteUser/${id}`);
        navigate(`/`)
    }

    return(
        <div className='divBackgroundUser' key={id}>
            <span style={{backgroundImage: `url(${urlPhoto})`}} className='spanPhoto'/>
            <div className='spanInfoUser'>
                <h3>{name}</h3>
                <p>Teléfono: {phoneNumber}</p>
                <p>E-mail: {email}</p>
            </div>
            <div className='divButtonsFunction'>
                <button id='btnEditUser'/>
                <button id='btnSeeUser'/>
                <button id='btnDeleteUser' onClick={() => {deleteUser(id)}} />
            </div>
        </div>
    )
}