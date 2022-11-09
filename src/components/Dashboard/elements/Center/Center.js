import './Center.scss'

export default function Center(){

    return(
        <aside>
            <div className='divImageDecorationAbsolute'/>
            <header>
                <h1>Empleados</h1>  
                <span>
                    <input type='search' placeholder={'Ex.: Mirta Hernandez'}/>    
                </span>  
            </header>
            
        </aside>
    )
}