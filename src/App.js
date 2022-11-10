import { Users } from './FakeData';

import Dashboard from './components/Dashboard/Dashboard';

import './components/General.css'

function App() {

  // Poniendo el array con los usuarios fakes en el localStorage 
  // con la llave 'fakeUsers'
  localStorage.setItem('fakeUsers', JSON.stringify(Users));

  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
