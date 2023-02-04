import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='nav'>
        <ul className='nav_list'>
            <li className='nav_link'><NavLink to='/'>POST</NavLink></li>
            <li className='nav_link'><NavLink to='/gallery'>GALLERY</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
