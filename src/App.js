import React from "react";
// import Home from "./Home";
// import PostList from "./PostList";
// import About from "./About";
// import ToDoList from "./ToDoList";
// import Logout from "./Logout";
// import PostDetail from "./PostDetail";
import { Routes } from "./Routes";

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
            <Link to="/PostList" class="item">
              PostList
            </Link>
            <Link to="/ToDoList" class="item">
              ToDoList
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


          {/* <Route path="/" exact
            component={Home}
          />
          <Route path="/About"
            component={About}
          />
          <Route path="/PostList"
            component={PostList}
          />
          <Route path="/ToDoList"
            component={ToDoList}
          />
          <Route path="/Logout"
            component={Logout}
          />
          <Route path="/PostDetail/:id"
            component={PostDetail}
         /> */}

          <switch>
            <Route path={Routes[0].pathname} exact component={Routes[0].component} />
            <Route path={Routes[1].pathname} exact component={Routes[1].component} />
            <Route path={Routes[2].pathname} exact component={Routes[2].component} />
            <Route path={Routes[3].pathname}  component={Routes[3].component} />
            <Route path={Routes[4].pathname} exact component={Routes[4].component} />
            <Route path={Routes[5].pathname} exact component={Routes[5].component} />
            <Route path={Routes[6].pathname}  component={Routes[6].component} />

          </switch>
          {/* <Redirect to='/not-found' /> */}


        </div>
      </Router>
    );
  }
};

export default App;