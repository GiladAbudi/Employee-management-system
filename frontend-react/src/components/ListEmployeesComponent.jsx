import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService";

class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            employees: []
        }
        this.addEmployee= this.addEmployee.bind(this);
        this.updateEmployee= this.updateEmployee.bind(this)
        this.deleteEmployee= this.deleteEmployee.bind(this)
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res)=>
            this.setState({employees:res.data}))
    }

    addEmployee(){
        this.props.history.push("/add-employee/_add");
    }

    updateEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res =>{
            this.setState({employees:this.state.employees.filter(employee=> employee.id!=id)})
        } );
    }

    render() {
        return (
            <div>
                <h2 className={"text-center"}> Employees List </h2>
                <div className={"row"}>
                    <button className={"btn btn-primary mb-2"} onClick={this.addEmployee}>Add Employee</button>
                </div>
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
                                    <td>
                                        <button className={"btn btn-info"} onClick={() => this.updateEmployee(employee.id)}>Update</button>
                                        <button className={"btn btn-danger ml-2"} onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                    </td>

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