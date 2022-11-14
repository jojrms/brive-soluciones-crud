import './Header.scss'

export default function Header({h1Title, userLogPhotoUrl, userLogName}){
    return(
        <>
            <header>

                <img className="imgMenuLeft" src="https://img.icons8.com/ios-filled/50/null/menu-rounded.png"/>
                <i/>

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