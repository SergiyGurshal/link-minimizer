import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import authIcon from '../../images/padlock.svg'
import classNameValidate from '../../modules/inputClassNameValidator'

import './auth-page.sass'

const AuthPage = () => {
  const auth = useContext(AuthContext)
  const { loading, error, request, clearError } = useHttp()
  const [form, setForm] = useState({ email: '', password: '' })
  const [validated, setValidated] = useState(false)

  const onInputChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    classNameValidate(e, e.target.name, setValidated)
  }

  useEffect(() => {
    if (error) {
      alert(error)
      clearError()
    }
  }, [error, clearError])

  const signUpHendler = async () => {
    if (validated) {
      try {
        const data = await request('/api/auth/register', 'POST', { ...form })
        alert(data.message)
      } catch {}
    }
  }

  const signInHendler = async (e) => {
    if (validated) {
      try {
        const data = await request('/api/auth/login', 'POST', { ...form })
        auth.login(data.token, data.userId)
      } catch {}
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-page_icon-container">
        <img src={authIcon} className="auth-page_icon" />
      </div>
      <form action="" className="auth-page_sign-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          name="email"
          className="auth-page_input"
          id="emailInput"
          placeholder="Email Address *"
          onChange={onInputChangeHandler}
        />
        <input
          type="password"
          name="password"
          className="auth-page_input"
          id="passwordInput"
          placeholder="Password *"
          onChange={onInputChangeHandler}
        />
        <input type="submit" value="SIGN IN" className="auth-page_submit-btn" onClick={signInHendler} disabled={loading} />
        <input type="submit" value="SIGN UP" className="auth-page_submit-btn" onClick={signUpHendler} disabled={loading} />
      </form>
    </div>
  )
}

export default AuthPage
