import React from 'react'

const EmployeeCard = ({employee, selection}) => {
//  console.log(employee)
//  console.log(selection)
    return(
    <div className='employee-card'>
        <div className='empName'>
            <h3>{employee.lastName}</h3>
        </div>
        <div className='empName'>
            <h3>{employee.firstName}</h3>
        </div>
        <div className='empId'>
            <h3>{employee.id}</h3>
        </div>
        <div className='empAge'>
            <h3>{employee.age}</h3>
        </div>
        <div className='empDob'>
            <h3>{employee.dob}</h3>
        </div>
        <div className='empEmail'>
            <h3>{employee.email}</h3>
        </div>
        <div className='empNumber'>
            <h3>{employee.contactNumber}</h3>
        </div>
        <div className='empSalary'>
            <h3>{employee.salary}</h3>
        </div>
        <div className='empAddress'>
            <h3>{employee.address}</h3>
        </div>
    </div>
 )
}

export default EmployeeCard