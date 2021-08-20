import React from 'react'
import { Employee } from './Employee'

export const EmployeeList = (props) => {

    return (
        <div className="container">
            <br></br>
            <h3 className="text-center">Employee LIST</h3>
            <br></br><hr></hr> <br></br>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Age</th>
                        <th scope="col">DELETE</th>
                        <th scope="col">UPDATE</th>
                    </tr>
                </thead>

            </table>
            {
                props.employeeList.length <= 0 ? "No Employee Found" :

                    props.employeeList.map((employee) => {

                        return <Employee employee={employee} key={employee.eId} onDelete={props.onDelete} />
                    })


            }
            {/* <Employee employee = {props.employeeList[0]}/> */}
        </div>

    )
}