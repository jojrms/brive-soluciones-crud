import Menuleft from './elements/Menu Left/MenuLeft'
import Center from './elements/Center/Center'
import CreateUser from './elements/Center/Create User/CreateUser'
import DeleteUser from './elements/Center/Delete User/DeleteUser'

import "./Dashboard.scss"

export default function Dashboard(){

    return(
        <section className="sectionAbsolute">

            <DeleteUser/>
            <CreateUser/>

            <Menuleft/>
            <Center/>

        </section>
    )
}