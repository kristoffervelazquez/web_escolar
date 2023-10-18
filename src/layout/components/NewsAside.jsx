import React from 'react'

const NewsAside = () => {
  return (
    <aside className="news">
      <header className="channels-header focusable">
        <h3 role="header" className="channels-header-name"> Noticias </h3>
      </header>
      <header className="channels-list-header focusable">
        <h3 role="header" className="channels-list-header-name"> #general </h3>
      </header>
    </aside>
  )
}

export default NewsAside