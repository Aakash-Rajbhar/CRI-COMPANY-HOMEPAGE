import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="Logo" className='logo' />
    
    </div>
  )
}

export default Header
