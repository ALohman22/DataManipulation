import { useState, useEffect } from 'react'
import Select from "react-select"
import EmployeeCard from './assets/components/EmployeeCard'
import axios from "axios"
import './App.css'

function App() {

  const [text, setText] = useState("")
  const [selection, setSelection] = useState("")
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    axios.get('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001')
    .then(res=> 
      setEmployees(res.data),
      
      // setLoadedState(!loadedState)
      ).catch(err=> console.log(err))
  }, []);

  

  const mappedEmployees = (emp) => {
    return emp.map((employee)=> {
      return(
        <EmployeeCard key={employee.id} employee={employee} selection={selection}/>
      )
    }).sort((a,b)=> {
      console.log(selection)
      if(selection === "id"){
        return a.props.employee.id.toString().localeCompare(b.props.employee.id)
      } else if(selection === "lastName") {
        return a.props.employee.lastName.toString().localeCompare(b.props.employee.lastName)
      } else if(selection === "dob") {
        return a.props.employee.dob.toString().localeCompare(b.props.employee.dob)
      } else {
        return a.props.employee.salary.toString().localeCompare(b.props.employee.salary)
      }
    
    })
    
  }

  const filterEmployees = () => {
    let empFilter = employees?.filter((employee)=> {
      return (
        employee.firstName.toLowerCase().includes(text) || 
        employee.lastName.toLowerCase().includes(text) || 
        employee.email.toLowerCase().includes(text) || 
        employee.id == text ||
        employee.contactNumber == text ||
        employee.dob.includes(text) ||
        employee.age == text ||
        employee.salary == text ||
        employee.address.toLowerCase().includes(text)
      )})
        return mappedEmployees(empFilter)
    }
  
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
              <Select options={order} onchange={()=>setSelection(value)} placeholder="Order By"/>
            </div>
            <input 
              type='text' 
              onChange={(e)=> setText(e.target.value)} 
              value={text} 
              placeholder="Search Database"/>
          </div>
          <div className='table'>
            <div className='tableContainer'>
              <div className='tableCategory'> 
                <div className='name' onClick={()=>setSelection("firstName")}>
                  <h3>Last Name:</h3>
                </div>
                <div className='name' onClick={()=>setSelection("lastName")}>
                  <h3>First Name:</h3>
                </div>
                <div className='id' onClick={()=>setSelection("id")}>
                  <h3>Id:</h3>
                </div>
                <div className='age' onClick={()=>setSelection("age")}>
                  <h3>Age:</h3>
                </div>
                <div className='dob' onClick={()=>setSelection("dob")}>
                  <h3>DOB:</h3>
                </div>
                <div className='email' onClick={()=>setSelection("email")}>
                  <h3>Email:</h3>
                </div>
                <div className='number' onClick={()=>setSelection("number")}>
                  <h3>Phone Number:</h3>
                </div>
                <div className='salary' onClick={()=>setSelection("salary")}>
                  <h3>Salary:</h3>
                </div>
                <div className='address' onClick={()=>setSelection("address")}>
                  <h3>Address</h3>
                </div>
              </div>
              <div className='tablContentContainer'>
                <div className='tableContent'>
                {text === "" ? mappedEmployees(employees) : filterEmployees()}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default App
