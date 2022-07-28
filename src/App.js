import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import TaskListComponent from "./components/container/task_list"
import Notfoundpage from './pages/404/NotFoundPage';
import Registerpage from './pages/auth/RegisterPage';
import Loginpage from './pages/auth/LoginPage';

function App() {
  const logged = localStorage.getItem('credentials')
  return (
    <Router>
      <Switch>
          <Route exact path='/'>
            {
              logged?
              (<TaskListComponent/>) :
              (<Redirect from="/" to="/login" />)
            }
          </Route>
          <Route exact path="/login">
            { 
              logged?
                ()=>{
                  alert("Ya iniciaste sesion!")
                  return <Redirect from="/login" to="" />
                } 
                :
              <Loginpage/>
            }
          </Route>
          <Route exact path="/register" component={ Registerpage }></Route>
          <Route component={ Notfoundpage }/>
        </Switch>
    </Router>
  );
}

export default App;
