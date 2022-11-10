import './Header.scss'

export default function Header({h1Title, description}){
    return(
        <>
            <header>
                <button id='btnReturnHome'/>
                <h1>{h1Title}</h1>
                <div>
                    <button id='btnTheme'/>    
                    <button id='btnNotifications'/>    
                </div>
            </header>
        </>
        
    )
}