import { useDispatch } from 'react-redux'

import { deleteUser } from '../../../../../features/Users';

import './UsersViewer.scss'

export default function UsersViewer({id, urlPhoto, name, email, phoneNumber}){

    const dispatch = useDispatch();

    return(
        <div className='divBackgroundUser'>
            <span style={{backgroundImage: `url(${urlPhoto})`}} className='spanPhoto'/>
            <div className='spanInfoUser'>
                <h3>{name}</h3>
                <p>Teléfono: {phoneNumber}</p>
                <p>E-mail: {email}</p>
            </div>
            <div className='divButtonsFunction'>
                <button id='btnEditUser'/>
                <button id='btnSeeUser'/>
                <button id='btnDeleteUser'  onClick={() => {dispatch(deleteUser({id: id}))}}/>
            </div>
        </div>
    )
}