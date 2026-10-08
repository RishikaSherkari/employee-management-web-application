import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getAllEmployees,
  deleteEmployee,
  searchEmployees
} from '../services/employeeService'
import EmployeeForm from '../components/EmployeeForm'

function Dashboard() {

  const navigate = useNavigate()
  const [employees, setEmployees] = useState([])
  const [editingEmployee, setEditingEmployee] = useState(null)
  const [searchName, setSearchName] = useState('')
  const [searchDepartment, setSearchDepartment] = useState('')
  const [loading, setLoading] = useState(false)

  const totalEmployees = employees.length

  const totalDepartments = new Set(
  employees.map((employee) => employee.department)
  ).size

  const loadEmployees = async () => {
  setLoading(true)

  try {
    const response = await getAllEmployees()

    setEmployees(response.data)
    
  } catch (error) {
    console.error('Failed to load employees:', error)
  }finally {
    setLoading(false)
  }
}

const handleLogout = () => {
  localStorage.removeItem('token')
  navigate('/login')
}

const handleSearch = async () => {
  try {
    const response = await searchEmployees(
      searchName,
      searchDepartment
    )

    setEmployees(response.data)
  } catch (error) {
    console.error('Search failed:', error)
  }
}

const handleClearSearch = () => {
  setSearchName('')
  setSearchDepartment('')
  loadEmployees()
}

useEffect(() => {
  loadEmployees()
}, [])
  

  return (
  <div className="dashboard-page">

    <header className="dashboard-header">
      <div>
        <h1>
          <span className="brand-icon">EH</span>
          EmployeeHub
        </h1>
        <p>Employee Management Portal</p>
      </div>

      <button
        type="button"
        className="logout-button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>

    <main className="dashboard-content">

      <div className="dashboard-stats">

  <div className="stat-card">
    <div className="stat-icon">👥</div>
    <div>
      <p>Total Employees</p>
      <h3>{totalEmployees}</h3>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">🏢</div>
    <div>
      <p>Departments</p>
      <h3>{totalDepartments}</h3>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">✓</div>
     <div>
      <p>System Status</p>
      <h3>Active</h3>
     </div>
  </div>

    </div>

      <section className="employee-form-card">
        <EmployeeForm
          onEmployeeCreated={loadEmployees}
          editingEmployee={editingEmployee}
        />
      </section>

      <section className="search-section">
        <h2>Search Employees</h2>

        <div className="search-controls">
          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={(event) => setSearchName(event.target.value)}
          />

          <input
            type="text"
            placeholder="Search by department"
            value={searchDepartment}
            onChange={(event) => setSearchDepartment(event.target.value)}
          />

          <button
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>

          <button
            type="button"
            className="clear-button"
            onClick={handleClearSearch}
          >
            Clear
          </button>
        </div>
      </section>

      <section className="employees-section">
        <div className="section-title">
          <div className="employees-title">
           <div>
             <h2>Employees</h2>
             <p>Manage your team members</p>
            </div>

            <span className="employee-count">
              {employees.length} employees
            </span>
          </div>

          {loading && <span className="loading-text">Loading...</span>}
        </div>

        <div className="employee-table-wrapper">
          <table className="employee-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.date}</td>

                  <td className="action-buttons">
                    <button
                      type="button"
                      onClick={() => setEditingEmployee(employee)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="delete-button"
                      onClick={async () => {
                        const confirmed = window.confirm(
                          `Are you sure you want to delete ${employee.name}?`
                        )

                        if (confirmed) {
                          try {
                            await deleteEmployee(employee.id)

                            alert('Employee deleted successfully!')

                            loadEmployees()
                          } catch (error) {
                            console.error(
                              'Failed to delete employee:',
                              error
                            )
                            alert(
                              error.response?.data?.message ||
                              'Failed to delete employee!'
                            )
                          }
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </main>
  </div>
)
}

export default Dashboard