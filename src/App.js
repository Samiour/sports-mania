import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';


function App() {
  return (
    <div>
      <Router>
      <Switch>

          <Route path="/league/:serial">
           <LeagueDetail></LeagueDetail>
          </Route>

          <Route path="/home">
           <Home></Home>
          </Route>

          <Route path="">
            <Home></Home>
          </Route>
         

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
