import { useState } from 'react';
import Axios from 'axios';
import * as yup from 'yup';

import './CreateUser.scss'

export default function CreateUser(){

    // Crea un hook que vá armazenar todas las informaciónes
    // del usuário que vá ser creado
    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        photo_url: '',
    })

    // Para hacer verificación y validación de los datos que
    // están en el hook
    let schema = yup.object().shape({
        name: yup
            .string()
            .required(),
        email: yup
            .string()
            .email()
            .required(),
        phone: yup
            .number()
            .required()
            .positive()
            .integer(),
        photo_url: yup  
            .string()
            .required()
    });
    

    // Función que vá crear el usuário en el db
    const addUser = () => {

        // Verifica si los datos inseridos son validos o no
        schema
        .isValid(data)
        .then( valid => {

            if( valid ==  true ){

                Axios.post("http://localhost:3001/createUser", {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    photo_url: data.photo_url,
                });

                console.log(data)
                document.getElementById("divAbsoluteCreate").style.display = 'none';
                window.location.reload();

            } else{
                alert('Los datos no estan correctos. Por favor, arregle y intente otra vez.')
            }

        });
        
    };


    // Función que vá cerrar y ocultar la tela
    // de creación de usuários
    function closeDiv(){
        document.getElementById("divAbsoluteCreate").style.display = 'none';
    }
    

    return(
        <div className='divAbsolute' id='divAbsoluteCreate'>
            
            <aside id="asideBackgroundCreate">

                <div>
                    <span className='spanImgIcon'/>
                    <h1>Agregue al equipo</h1>
                    <button id='btnClose' onClick={closeDiv}>
                        <img src="https://img.icons8.com/windows/32/null/macos-close.png"/>
                    </button>
                </div>

                {/* OPICIONES DE FOTOS PARA EL USUARIO CON MEMOJI */}
                <section className='sectionInputImagesProfile'>
                    <label id='sectionInputLabel'>Selecciona un avatar</label>
                    <div className='divExbDivsWithInput'>
                        <div>
                            <input type='radio' name='bitmoji-profile' onChange={() => {setData({...data, photo_url: 'https://th.bing.com/th/id/R.9ac1c2910c6fdae617058daa3129038e?rik=6tFP6TDn0Y9xUw&pid=ImgRaw&r=0'})}}/>
                            <img src='https://th.bing.com/th/id/R.9ac1c2910c6fdae617058daa3129038e?rik=6tFP6TDn0Y9xUw&pid=ImgRaw&r=0'/>
                        </div>
                        <div>
                            <input type='radio' name='bitmoji-profile' onChange={() => {setData({...data, photo_url: 'https://smart-loads.com/uploads/images/2020-11/8894/icons/x170/8894-memoji-emojis-stickers-for-whatsapp-wastickerapps.png'})}}/>
                            <img src='https://th.bing.com/th/id/R.dd892f36f22a4ecb7383ff6c126b5a2c?rik=2NdNfU%2b8KZN1lw&pid=ImgRaw&r=0'/>
                        </div>
                        <div>
                            <input type='radio' name='bitmoji-profile' onChange={() => {setData({...data, photo_url: 'https://www.whatphone.net/wp-content/uploads/2020/07/memoji_waves.png'})}}/>
                            <img src='https://www.whatphone.net/wp-content/uploads/2020/07/memoji_waves.png'/>
                        </div>
                        <div>
                            <input type='radio' name='bitmoji-profile' onChange={() => {setData({...data, photo_url: 'https://th.bing.com/th/id/R.1193ab56d270a10551bc9d0fb706b0c9?rik=iEGirDg96sZljw&riu=http%3a%2f%2fwww.somewhere-magazine.com%2fwp-content%2fuploads%2f2020%2f07%2fapple-memoji-update-headwear-masks-hairstyles-2.png&ehk=J2oGh50UUFrTZ%2bW0%2bdd1f0oTSqn5ysWaq1LP5TUSSWI%3d&risl=&pid=ImgRaw&r=0'})}}/>
                            <img src='https://th.bing.com/th/id/R.1193ab56d270a10551bc9d0fb706b0c9?rik=iEGirDg96sZljw&riu=http%3a%2f%2fwww.somewhere-magazine.com%2fwp-content%2fuploads%2f2020%2f07%2fapple-memoji-update-headwear-masks-hairstyles-2.png&ehk=J2oGh50UUFrTZ%2bW0%2bdd1f0oTSqn5ysWaq1LP5TUSSWI%3d&risl=&pid=ImgRaw&r=0'/>
                        </div>
                    </div>
                </section>
                
                {/* INPUTS QUE VAN A RECIBIR LAS INFORMACIONES DEL USUÁRIO */}
                <section className='sectionInputs'>
                    <label>Nombre Completo</label>
                    <input type='text' placeholder='Ex.: Joana Lopez' onChange={(event) => {setData({...data, name: event.target.value})}}/>
                    <label>Email</label>
                    <input type='email' placeholder='email@email.com' onChange={(event) => {setData({...data, email: event.target.value})}}/>
                    <label>Teléfono</label>
                    <input type='text' placeholder='Ex.: +55 (67) 99999-9999' onChange={(event) => {setData({...data, phone: event.target.value})}}/>    
                    
                </section>
                
                <button id='btnAddPerson' onClick={addUser}>
                    Concluir la creación
                </button>  
            </aside>

        </div>
    )
}