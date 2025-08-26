import React, { useEffect, useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const auth = localStorage.getItem('isAuthenticated');
      if(auth === 'true'){
        setIsAuthenticated(true);
      }
    }, []);

    const handleLogin = () => {
      setIsAuthenticated(true);
    }

    const handleLogout = () => {
      setIsAuthenticated(false);
    }

  return (
    <div>
      <Routes>
        <Route path='/' exact element={ isAuthenticated ? <Navigate to={"/dashboard"}/> : <Login onLogin={handleLogin}/>}></Route>
        <Route path='/dashboard' exact element={ isAuthenticated ? <Dashboard onLogout={handleLogout}/> : <Navigate to="/"/>}></Route>
      </Routes>
    </div>
  )
}

export default App