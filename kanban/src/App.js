import {Routes, Route} from 'react-router-dom';
import Authenticate from './components/Authenticate';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';
import './App.css';

function Kanban() {
  const [activeUser, setActiveUser] = useState("")
  return(
    <div>
      <Routes>
        <Route 
          path='/' 
          element={<Authenticate setActiveUser={setActiveUser}/>} 
        />
        <Route 
          path='/dashboard' 
          element={<ProtectedRoute 
            component={<Dashboard activeUser={activeUser} />} 
            activeUser={activeUser} />} 
        />
      </Routes>
      
    </div>
  )
}

export default Kanban;