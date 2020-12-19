import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService";

class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            employees: []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res)=>
            this.setState({employees:res.data}))
    }

    render() {
        return (
            <div>
                <h2 className={"text-center"}> Employees List </h2>
                <div className={"row"}>
                    <table className={"table table-striped table-bordered"}>
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>

                                </tr>
                            )
                        }

                        </tbody>
                    </table>


                </div>
            </div>
        );
    }
}

export default ListEmployeesComponent;