import { useSelector } from 'react-redux';

import {Users} from '../../../../FakeData'

import Header from './Header/Header';
import UsersViewer from './Users/UsersViewer';

import './Center.scss'

export default function Center(){

    // Puxa a lista de usuários fakes criados no arquivo FakeData.js
    const userList = useSelector((state) => state.users.value)
    localStorage.setItem('FakeUsers', JSON.stringify(userList));

    const users = JSON.parse(localStorage.getItem('FakeUsers'));

    return(
        <aside>
            <Header
                h1Title={"Empleados"}
            /> 
            <section className='sectionListUsers'>
                {users.map((user) => {
                    return(
                    <UsersViewer
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        phoneNumber={user.number}
                        urlPhoto={user.urlPhoto}
                    />
                    )
                })}
                
            </section>
        </aside>
    )
}