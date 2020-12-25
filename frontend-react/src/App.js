import './App.css';
import {Switch,Route,BrowserRouter as Router } from  'react-router-dom'
import ListEmployeesComponent from "./components/ListEmployeesComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import CreateOrUpdateEmployeeComponent from "./components/CreateOrUpdateEmployeeComponent";

function App() {
  return (
      <div>
        <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route exact path={"/"} component={ListEmployeesComponent}/>
                <Route path={"/employees"} component={ListEmployeesComponent}/>
                <Route path={"/add-employee/:id"} component={CreateOrUpdateEmployeeComponent}/>
              </Switch>
            </div>
          <FooterComponent/>
        </Router>
      </div>
  );
}

export default App;
