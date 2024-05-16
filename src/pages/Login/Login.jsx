// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Login.module.css'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  console.log(message)
  return (
    <main className={styles.container}>
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <h1>Log In</h1>
        <div className={styles.formSection}>
          <label className={styles.label}>
            Email
          </label>
            <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
            />
        </div>

        <div className={styles.formSection}>
          <label className={styles.label}>
            Password
          </label>
            <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            />
        </div>

        <div className={styles.bottomContainer}>
          <Link to="/">Cancel</Link>
          <button className={styles.button} disabled={isFormInvalid()}>
            Log In
          </button>
        </div>
      </form>
    </main>
  )
}

export default LoginPage
