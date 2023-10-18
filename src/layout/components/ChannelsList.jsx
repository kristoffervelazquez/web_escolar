import React from 'react'

const ChannelsList = () => {
  return (
    <aside className="channels">
      <header className="channels-header focusable">
        <h3 role="header" className="channels-header-name"> ITEM LIST </h3>
      </header>

      <section className="channels-list">
        <header className="channels-list-header focusable">
          <h5>Item 1</h5>
        </header>

        <header className="channels-list-header focusable">
          <h5>Item 2</h5>
        </header>

        <header className="channels-list-header focusable">
          <h5>Item 3</h5>
        </header>

        <header className="channels-list-header focusable">
          <h5>Item 4</h5>
        </header>
      </section>

    </aside>
  )
}

export default ChannelsList