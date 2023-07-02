import { useState, useEffect } from 'react'
import Select from "react-select"
import EmployeeCard from './assets/components/EmployeeCard'
import axios from "axios"
import './App.css'

function App() {

  const [text, setText] = useState("")
  const [employees, setEmployees] = useState([])

  const mappedRes = (res) => {
    
  }

  useEffect(() => {
    axios.get('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001')
    .then(res=> 
      // console.log(res.data)
     
      setEmployees(res.data)
      
      ).catch(err=> console.log(err))
  }, []);


  
  const order = [
    {value: 'id', label: 'ID'},
    {value: 'name', label: 'Name'},
    {value: 'dob', label: 'DOB'},
    {value: 'salary', label: 'Salary'}
  ]

  return (
    
      <div className='page'>
          <div className='tableTop'>
            <div className='select-container'>
              <Select options={order} placeholder="Order By"/>
            </div>
            <input type='text' onChange={()=>setText} value={text} placeholder="Search Database"/>
          </div>
          <div className='table'>
            <div className='tableContainer'>
              <div className='tableCategory'> 
                <div className='empName'>
                  <h3>Last Name:</h3>
                </div>
                <div className='empName'>
                  <h3>First Name:</h3>
                </div>
                <div className='empId'>
                  <h3>Id:</h3>
                </div>
                <div className='empAge'>
                  <h3>Age:</h3>
                </div>
                <div className='empDob'>
                  <h3>DOB:</h3>
                </div>
                <div className='empEmail'>
                  <h3>Email:</h3>
                </div>
                <div className='empNumber'>
                  <h3>Phone Number:</h3>
                </div>
                <div className='empSalary'>
                  <h3>Salary:</h3>
                </div>
                <div className='empAddress'>
                  <h3>Address</h3>
                </div>
              </div>
              <div className='tablContentContainer'>
                <div className='tableContent'>
                  {employees?.map((employee)=> {
                    return(
                      <EmployeeCard key={employee.id} employee={employee}/>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default App
