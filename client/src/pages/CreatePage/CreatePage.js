import React, { useContext, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

import './create-page.sass'

const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const [link, setLink] = useState('')

  const pressHandler = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await request(
          '/api/link/generate',
          'POST',
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        )
        history.push(`/detail/${data.link._id}`)
      } catch (e) {}
    }
  }

  return (
    <div className="create-page">
      <input
        type="text"
        name="link"
        className="create-page_input"
        id="libkInput"
        placeholder="Enter link *"
        onChange={(e) => setLink(e.target.value)}
        onKeyPress={pressHandler}
      />
    </div>
  )
}

export default CreatePage
