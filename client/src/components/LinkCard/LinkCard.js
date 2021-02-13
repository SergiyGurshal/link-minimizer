import React from 'react'

import './link-card.sass'

const LinkCard = ({ link }) => {
  return (
    <div className="link-card">
      <h2>Link</h2>

      <p>
        {'Minimized link: '}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        {'From: '}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Clicks: <strong>{link.clicks}</strong>
      </p>
      <p>
        Date: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </div>
  )
}

export default LinkCard
