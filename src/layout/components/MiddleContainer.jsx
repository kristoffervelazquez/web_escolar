import React from 'react'
import "../../CSS/MiddleContainer.css"

const MiddleContainer = ({ children }) => {
  return (
    <div className="vert-container">
      <menu type="toolbar" className="menu">
        <h2 className="menu-name"> UES ESCOLAR </h2>
      </menu>
      <div style={{ display: 'flex', flex: 1, padding: '10px' }}>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MiddleContainer