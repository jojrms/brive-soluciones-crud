import "./MenuLeft.scss"

export default function Menuleft(){

    return(
        <div className="divMenuLateralLeft">
            <i/>

            <ul>
                <li>
                    <img width={"30%"} src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/FFFFFF/external-dashboard-ui-essential-kmg-design-glyph-kmg-design.png"/>                    
                    <p>Dashboard</p>
                </li>
                <li>
                    <img src="https://img.icons8.com/material-rounded/24/FFFFFF/speech-bubble-with-dots.png"/>
                    <p>Chat</p>
                </li>
                <li>
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/arms-up.png"/>
                    <p>Empleados</p>
                </li>
                <li>
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/new-job.png"/>
                    <p>Vacantes</p>
                </li>
                <li>
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/to-do.png"/>
                    <p>Tareas</p>
                </li>

                <li>
                    <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/test-account.png"/>
                    <p>Tu Cuenta</p>
                </li>
                <li style={{marginTop: '150%'}}>
                    <img src="https://img.icons8.com/metro/26/FFFFFF/fire-exit.png"/>
                    <p>Salir</p>
                </li>
            </ul>
                
        </div>
    )
}