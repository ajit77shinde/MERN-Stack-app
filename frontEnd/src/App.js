import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import CompanyList from "./components/company/company-list.component";
import ContactList from "./components/contact/contact-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-student"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
           
              <Nav>
                <Link to={"/company-list"} className="nav-link">
                  Company List
                </Link>
              </Nav>
              <Nav>
                <Link to={"/contact-list"} className="nav-link">
                  Contact List
                </Link>
              </Nav>
              {/* <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav> */}

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              {/* <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav> */}
                
            </Nav>

          </Container>
        </Navbar>
      </header>
{/* <div className="container">
  <div className="row">
    <div className="col-md-9"> */}
      {/* <Container> */}
        {/* <Row> */}
          {/* <Col md={12}> */}
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateStudent} />
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/student-list" component={StudentList} />
                <Route path="/company-list" component={CompanyList} />
                <Route path="/contact-list" component={ContactList} />
              </Switch>
            </div>
            {/* </div>

            </div>
            </div> */}

          {/* </Col> */}
        {/* </Row> */}
      {/* </Container> */}
    </div>
  </Router>);
}

export default App;