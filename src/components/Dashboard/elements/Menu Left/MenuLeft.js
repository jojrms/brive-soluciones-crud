import "./MenuLeft.scss"

export default function Menuleft(){

    return(
        <div className="divMenuLateralLeft">
            <i/>

            <p className="pMenu">MENU</p>
            <ul>
                <li>
                    <img src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/null/home.png"/>
                    <p>Dashboard</p>
                </li>
                <li>
                    <img src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/null/speech-bubble--v1.png"/>
                    <p>Chat</p>
                </li>
                <li className="active">
                    <img src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/null/user-group-man-man.png"/>
                    <p>Empleados</p>
                </li>
                <li>
                    <img src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/null/find-matching-job.png"/>
                    <p>Vacantes</p>
                </li>
                <li>
                    <img src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/null/personal-video-recorder-menu.png"/>
                    <p>Tareas</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/null/user-shield.png"/>
                    <p>User Role Admin</p>
                </li>
                <li>
                    <img src="https://img.icons8.com/fluency-systems-regular/96/FFFFFF/null/job.png"/>
                    <p>Settings</p>
                </li>
                
            </ul>
                
        </div>
    )
}