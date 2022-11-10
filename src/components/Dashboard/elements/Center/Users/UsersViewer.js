import './UsersViewer.scss'

export default function UsersViewer({urlPhoto, name, email, phoneNumber}){
    return(
        <div className='divBackgroundUser'>
            <span style={{backgroundImage: `url(${urlPhoto})`}} className='spanPhoto'/>
            <div className='spanInfoUser'>

            </div>
        </div>
    )
}