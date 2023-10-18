import React from 'react'

const MiddleContainer = ({children}) => {
  return (
    <div className="vert-container">
      <menu type="toolbar" className="menu">
        <h2 className="menu-name"> 111 </h2>
      </menu>
      <div style={{display: 'flex', flex: 1, padding: '10px' }}>
        {children}
      </div>
    </div>
  )
}

export default MiddleContainer