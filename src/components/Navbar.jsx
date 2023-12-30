import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMosque } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo"> <FontAwesomeIcon icon={faMosque}/> </div>
    </div>
  )
}

export default Navbar