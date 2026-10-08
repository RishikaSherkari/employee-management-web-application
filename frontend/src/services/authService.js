import axios from 'axios'

const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`
export const loginUser = (email, password) => {
  return axios.post(`${API_URL}/login`, {
    email: email,
    password: password
  })
}

export const registerUser = (name, email, password) => {
  return axios.post(`${API_URL}/register`, {
    name: name,
    email: email,
    password: password
  })
}