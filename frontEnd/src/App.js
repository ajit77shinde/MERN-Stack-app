import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserList } from "./components/user/user-list";
import { CreateUser } from "./components/user/create-user";
import { ResetPassword } from "./components/user/reset-pass";

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
                <Link to={"/create-User"} className="nav-link">
                  Create User
                </Link>
              </Nav>
              <Nav>
                <Link to={"/user-list"} className="nav-link">
                  User List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>
      <div className="wrapper">
        <Switch>
          <Route exact path='/' component={CreateUser} />
          <Route path="/create-user" component={CreateUser} />
          <Route path="/reset-pass" component={ResetPassword} />
          <Route path="/user-list" component={UserList} />
        </Switch>
      </div>
    </div>
  </Router>);
}

export default App;