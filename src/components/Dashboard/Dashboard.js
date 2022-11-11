import Menuleft from './elements/Menu Left/MenuLeft'
import Center from './elements/Center/Center'
import CreateUser from './elements/Center/Create User/CreateUser'

import "./Dashboard.scss"

export default function Dashboard(){

    return(
        <section className="sectionAbsolute">

            <CreateUser/>

            <Menuleft/>
            <Center/>

        </section>
    )
}