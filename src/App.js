import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';

import './components/General.css'

function App() {

  return(
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
          </Routes>
        </div>   
      </BrowserRouter>
    
  );
}

export default App;
