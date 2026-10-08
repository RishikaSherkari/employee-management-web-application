import { useEffect, useState } from 'react'
import {
  createEmployee,
  updateEmployee
} from '../services/employeeService'

function EmployeeForm({ onEmployeeCreated, editingEmployee }) {
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [salary, setSalary] = useState('')
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)

  const validateForm = () => {
  if (!name.trim()) {
    alert('Employee name is required')
    return false
  }

  if (!department.trim()) {
    alert('Department is required')
    return false
  }

  if (!salary || Number(salary) <= 0) {
    alert('Salary must be greater than 0')
    return false
  }

  if (!date) {
    alert('Date is required')
    return false
  }

  return true
}

  useEffect(() => {
  if (editingEmployee) {   
    setName(editingEmployee.name)
    setDepartment(editingEmployee.department || '')
    setSalary(editingEmployee.salary)
    setDate(editingEmployee.date)
  }
}, [editingEmployee])

const handleSubmit = async () => {
   if (!validateForm()) {
    return
  }
    setLoading(true)

  const employee = {
    name: name,
    department: department,
    salary: Number(salary),
    date: date
  }

  try {
    if (editingEmployee) {
      await updateEmployee(
        editingEmployee.id,
        employee
      )

      
      alert('Employee updated successfully!')
    } else {
      await createEmployee(employee)

      
      alert('Employee created successfully!')
    }

    onEmployeeCreated()
  } catch (error) {
    console.error('Failed to save employee:', error)
    alert(error.response?.data?.message || 'Failed to save employee!')
  }finally {
    setLoading(false)
  }
}

  return (
    <div>
      <h2>{editingEmployee ? 'Edit Employee' : 'Add Employee'}</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
      />

      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(event) => setSalary(event.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <button
       type="button"
       onClick={handleSubmit}
       disabled={loading}
       >
       {loading
       ? (editingEmployee ? 'Updating...' : 'Creating...')
       : (editingEmployee ? 'Update Employee' : 'Create Employee')}
      </button>
    </div>
  )
}

export default EmployeeForm