import React from 'react'
import { Link } from 'react-router-dom'

import './link-list.sass'

const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="no-links">There are no links</p>
  }

  return (
    <table style={{ paddingTop: '3rem', color: 'white' }}>
      <thead>
        <tr>
          <th>№</th>
          <th>Original</th>
          <th>Minimized</th>
          <th>Full info</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Full info</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default LinksList
