import Menuleft from './elements/Menu Left/MenuLeft'
import Center from './elements/Center/Center'

import "./Dashboard.scss"

export default function Dashboard(){

    return(
        <section className="sectionAbsolute">

            <Menuleft/>
            <Center/>

        </section>
    )
}