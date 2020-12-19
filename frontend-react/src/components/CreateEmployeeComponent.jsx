import React, {Component} from 'react';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state={
            firstName:'',
            lastName:'',
            email:''
        };

        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this)
        this.changeEmailHandler=this.changeEmailHandler.bind(this)
        this.saveEmployee=this.saveEmployee.bind(this)
    }

    changeFirstNameHandler(event) {
    this.setState({firstName:event.target.value})
    }

    changeLastNameHandler(event) {
    this.setState({lastName:event.target.value})
    }

    changeEmailHandler(event) {
    this.setState({email:event.target.value})
    }

    saveEmployee(event){
        event.preventDefault();
        let employee= {firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email}
        console.log(JSON.stringify(employee));
        this.props.history.push("/employees");
    }

    cancel(){
        this.props.history.push("/employees");
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"card col-md-6 offset-md-3 offset-md-3"}>
                            <h3 className={"text-center"}>Add Employee</h3>
                            <div className={"card-body"}>
                                <form>
                                    <div className={"form-group"}>
                                        <label> First Name: </label>
                                        <input className={"form-control"} placeholder={"First Name"} name={"firstName"}
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label> Last Name: </label>
                                        <input className={"form-control"} placeholder={"Last Name"} name={"lastName"}
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label> Email: </label>
                                        <input className={"form-control"} placeholder={"Email"} name={"Email"}
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className={"btn btn-success"} onClick={this.saveEmployee}>Apply</button>
                                    <button className={"btn btn-danger"} onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;