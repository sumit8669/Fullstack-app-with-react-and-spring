import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployee extends Component {
 constructor(props){super(props)
                this.state ={
                    employees:[]
    }
  }
  componentDidMount(){
    EmployeeService.getEmployee().then((res) =>{
      this.setState({employees : res.data})
    })
  }
  render() {
    return (
      <div>
        <h2 className='text-center'>ListEmployee</h2>
        <div className='row'>
          <button className='btn btn-prime' onClick={this.addEmployee}>Add Employee</button>
        </div>
        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Email</th>
                        <th>Employee Department</th>
                        <th>Employee Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      this.state.employees.map(
                        employees =>
                          <tr key={employees.id}>
                            <td>{employees.empName}</td>
                            <td>{employees.email}</td>
                            <td>{employees.department}</td>
                            <td>{employees.salary}</td>
                          </tr>
                      )
                    }
                </tbody>
            </table>

        </div>
      </div>
    )
  }
}
