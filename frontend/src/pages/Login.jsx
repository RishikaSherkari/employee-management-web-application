import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser } from '../services/authService'

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password)

      localStorage.setItem('token', response.data.token)

      alert('Login successful!')

      navigate('/dashboard')
    } catch (error) {
      console.error('Login failed:', error)

      alert(
        error.response?.data?.message ||
        'Login failed!'
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

        <h2>Welcome Back</h2>

        <p className="auth-subtitle">
          Sign in to manage your employees
        </p>

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
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="auth-footer">
          Don't have an account?{' '}
          <Link to="/register">Create an account</Link>
        </p>

      </div>

    </div>
  )
}

export default Login