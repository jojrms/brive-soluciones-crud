# SOBRE EL PROJECTO
Este desarrollo fue hecho por Jordana y es una listaje de usuarios cadastrados en la base de datos con algumas funciones, como agregar más uno, cambiar los datos del usuário cadastrado y excluir. 

## DB
Fue usado el mongoDB para armazenar y hacer las rutas con las funciones de GET, POST y DELETE. 

Todas las rutas están guardadas en la pasta "server/index.js".

### PARA EL ACCESO DEL DB
1. Accesa el site: "https://account.mongodb.com/account/login?n=%2Fv2%2F636ea0121e1d3c1182d9306d&nextHash=%23clusters" para hacer login con las credenciales dichas abajo:

Email: jordanarmos@gmail.com
Password: password123&

2. Después de hacer el login, entre en el Atlas, en la url: "https://cloud.mongodb.com/v2/636ea0121e1d3c1182d9306d#clusters"
Vá hasta "Security" y "Network Access" y clique en el botón "+ADD IP ADRESS", y cadastre el IP de tu computadora en el botón "ALLOW ACCESS FROM ANYWHERE"

3. Vá en "Database" y en el deploy llamado "CRUD", ponga "Connect". Selecione la opción "MongoDB Compass", seguido de "I have MongoDB Compass" y copia el string de conexión.

4. Haz el download de MongoDB Compass y acessa con:
"mongodb+srv://admin:PaRcb3PEzKa2YFc1@crud.bfowslq.mongodb.net/test"

Todos los datos estan en el db "users", table "users"

## REQUISICIONES
React = ^18.2.0,
Node = >=6.0.0

## LENGUAJE, FRAMEWORKS Y BIBLIOTECAS
Lenguaje: JavaScript 
Framework: React.js 
Bibliotecas: react, react-router-dom, axios, yup, 

## MOCKUP
Los mockups usado para las telas fueron sacados del site Dribbble, haciendo algunas modificaciones en ellos. Actualmente el design no está responsivo, pués fue creado solo para desktop. Los valores usados fueron, en su gran mayoria, con "vh", "vw" e "%".

## COMO EMPREZAR
1. Clona este código en el CMD usando el comando "git clone URL_AQUI",
2. Despúes de clonado, entre en el arquivo y abra en su editor de codigo,
3. Haga un 'npm install' para hacer download de todos los modulos node,
4. Finalize con un 'npm start' para abrir un localhost