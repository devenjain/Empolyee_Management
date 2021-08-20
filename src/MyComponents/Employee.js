import React from 'react'

export const Employee = ({ employee, onDelete }) => {

    return (
        // <div>
        //     <h4>{employee.eId}</h4>
        //     <h4>{employee.eName}</h4>
        //     <h4>{employee.eAge}</h4>
        //     <button className="btn btn-danger" onClick={() => { onDelete(employee) }}>DELETE</button>
        // </div>

        <table className="table">
            <tbody>
                <tr scope="row">
                    <td><b>{employee.eId}</b></td>
                    <td>{employee.eName}</td>
                    <td>{employee.eEmail}</td>
                    <td>{employee.ePassword}</td>
                    <td>{employee.eAge}</td>
                    <td> <button className="btn btn-danger" onClick={() => { onDelete(employee) }}>DELETE</button></td>
                    <td> <button className="btn btn-dark" onClick={() => { onDelete(employee) }}>UPDATE</button></td>
                </tr>
            </tbody>
        </table>

            )

}