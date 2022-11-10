import {Users} from '../../../../FakeData'

import Header from './Header/Header';
import UsersViewer from './Users/UsersViewer';

import './Center.scss'

export default function Center(){

    console.log(Users);

    return(
        <aside>
            <div className='divImageDecorationAbsolute'/>
            <Header
                h1Title={"Empleados"}
            />
            <section className='sectionListUsers'>
                {Users.map((user) => {
                    return(
                    <UsersViewer
                        key={user.id}
                        name={user.name}
                        urlPhoto={user.urlPhoto}
                    />
                    )
                })}
                
            </section>
        </aside>
    )
}