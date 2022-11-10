import Header from './Header/Header'

import './Center.scss'

export default function Center(){

    return(
        <aside>
            <div className='divImageDecorationAbsolute'/>
            <Header
                h1Title={"Empleados"} 
                h2Title={"Total de Empleados"}
                qtd={45}
            />
        </aside>
    )
}