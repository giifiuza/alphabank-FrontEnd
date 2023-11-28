import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import { IconContext } from 'react-icons';

import './style.css'

function Button({title}) {
  return (
    <div>
      <button>
        <IconContext.Provider value={{ color: '#fff', size: '24px' }}>
          <FaSignInAlt />
        </IconContext.Provider>
        {title}
      </button>
    </div>
  )
}

export default Button
