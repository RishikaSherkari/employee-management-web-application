import axios from 'axios'

const API_URL = `${import.meta.env.VITE_API_URL}/api/employees`

export const getAllEmployees = () => {
  const token = localStorage.getItem('token')

  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const createEmployee = (employee) => {
  const token = localStorage.getItem('token')

  return axios.post(API_URL, employee, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const updateEmployee = (id, employee) => {
  const token = localStorage.getItem('token')

  return axios.put(`${API_URL}/${id}`, employee, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const deleteEmployee = (id) => {
  const token = localStorage.getItem('token')

  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const searchEmployees = (name, department) => {
  const token = localStorage.getItem('token')

  return axios.get(`${API_URL}/search`, {
    params: {
      name: name || undefined,
      department: department || undefined
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}