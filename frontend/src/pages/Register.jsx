import { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../services/authService'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    try {
      await registerUser(name, email, password)

      alert('Registration successful!')
    } catch (error) {
      console.error('Registration failed:', error)

      alert(
        error.response?.data?.message ||
        'Registration failed!'
      )
    }
  }

  return (
    <div className="auth-page">

      <div className="auth-brand">
        <div className="brand-icon">EH</div>

        <h1>EmployeeHub</h1>

        <p>Employee Management Portal</p>
      </div>

      <div className="auth-card">

        <h2>Create Account</h2>

        <p className="auth-subtitle">
          Create an account to manage employees
        </p>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          type="button"
          onClick={handleRegister}
        >
          Create Account
        </button>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login">Login</Link>
        </p>

      </div>

    </div>
  )
}

export default Register