import './App.css';
import {Switch,Route,BrowserRouter as Router } from  'react-router-dom'
import ListEmployeesComponent from "./components/ListEmployeesComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
      <div>
        <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route exact path={"/"} component={ListEmployeesComponent}/>
                <Route path={"/employees"} component={ListEmployeesComponent}/>
                <Route path={"/add-employee"} component={CreateEmployeeComponent}/>
              </Switch>
            </div>
          <FooterComponent/>
        </Router>
      </div>
  );
}

export default App;
