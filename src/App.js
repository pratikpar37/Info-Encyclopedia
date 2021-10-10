import React from "react";
import Home from "./Home";
import Users from "./Users";
import About from "./About";
import Contacts from "./Contacts";
import Logout from "./Logout";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect

} from "react-router-dom";





class App extends React.Component {


  render() {
    return (
      <Router>
        <div>
          <div class="ui pointing menu" style={{ marginTop: "10px", backgroundColor: "DodgerBlue" }} >
            <Link to="/" class="active item">
              Home
            </Link>
            <Link to="/About" class="item" >
              About
            </Link>
            <Link to="/Users" class="item">
              Users
            </Link>
            <Link to="/Contacts" class="item">
              Contacts
            </Link>
            <div class="right menu">
              <div class="item">
                <div class="ui transparent icon input">
                  <input type="text" style={{ color: "purple" }} placeholder="Search..." />
                  <i class="search link icon" style={{ color: "purple" }}></i>
                </div>
              </div>
              <Link to="/Logout" class="ui item">
                Logout
              </Link>
            </div>
          </div>


          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/Contacts">
            <Contacts />
          </Route>
          <Route path="/Logout">
            <Logout />
          </Route>

        </div>
      </Router>
    );
  }
};

export default App;