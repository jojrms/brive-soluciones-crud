import './Header.scss'

export default function Header({h1Title, userLogPhotoUrl, userLogName}){
    return(
        <>
            <header>
                <button id='btnReturnHome'/>

                <h1>{h1Title}</h1>

                <div>
                    <button id='btnSearch'/>
                    <button id='btnTheme'/>    
                    <button id='btnNotifications'/>    
                </div>

                <div className='divProfileExb'>
                    <span style={{backgroundImage: `url(${userLogPhotoUrl})`}} className='spanPhotoProfile'/> 
                    <p>{userLogName}</p>
                </div>

            </header>
        </>
        
    )
}