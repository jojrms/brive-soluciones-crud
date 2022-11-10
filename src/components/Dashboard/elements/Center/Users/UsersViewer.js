import './UsersViewer.scss'

export default function UsersViewer({urlPhoto, name, email, phoneNumber}){
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
                <button id='btnDeleteUser'/>
            </div>
        </div>
    )
}