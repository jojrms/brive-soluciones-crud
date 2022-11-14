import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import EditUser from './components/Dashboard/elements/Center/Edit User/EditUser';

import './components/General.css'

function App() {

  return(
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path="/editUser/:id" element={<EditUser/>}/>
          </Routes>
        </div>   
      </BrowserRouter>
    
  );
}

export default App;
