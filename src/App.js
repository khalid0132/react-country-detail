import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Country from './components/Country/Country';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path= "/home">
          <Home></Home>
          </Route>
          <Route path= "/country/:countryName">
            <CountryDetail></CountryDetail>
          </Route>
          <Route exact path= "/">
            <Home></Home>
          </Route>
          <Route path= "*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
