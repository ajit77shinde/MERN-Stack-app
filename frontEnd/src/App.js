import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserList } from "./components/user/user-list";
import { CreateUser } from "./components/user/create-user";
// import { ResetPassword } from "./components/user/reset-pass";

import { CreateMoment } from "./components/moment/create-moment";
import { MomentList } from "./components/moment/moment-list";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link
                // to={"/create-User"} 
                className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/"} className="nav-link">
                  Create User
                </Link>
              </Nav>
              <Nav>
                <Link to={"/user-list"} className="nav-link">
                  User List
                </Link>
              </Nav>


              <Nav>
                <Link to={"/create-moment"} className="nav-link">
                  Add New Moment
                </Link>
              </Nav>
              <Nav>
                <Link to={"/moment-list"} className="nav-link">
                  Moment List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>
      <div className="wrapper">
        <Switch>
          {/* <Route exact path='/' component={CreateUser} /> */}
          <Route exact path="/" component={CreateUser} />
          {/* <Route path="/reset-pass" component={ResetPassword} /> */}
          <Route path="/user-list" component={UserList} />
          <Route path="/create-moment" component={CreateMoment} />
          <Route path="/moment-list" component={MomentList} />
        </Switch>
      </div>
    </div>
  </Router>);
}

export default App;