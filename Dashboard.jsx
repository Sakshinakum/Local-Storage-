import React from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({onLogout}) => {

  const navigate = useNavigate();

  const handleDelete = () => {
    localStorage.removeItem('isAuthenticated')
    navigate("/");
    onLogout();
  }
  return (
    <div>
      <div className="navbar">
        <div className="logo">Dashboard</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><button onClick={handleDelete} className='dlt-btn'>Logout</button></li>
          </ul>
      </div>
    </div>
  )
}

export default Dashboard