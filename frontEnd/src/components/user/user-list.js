import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UserTableRow from './UserTableRow';
import { url } from '../../config/config';

export class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Users: []
    };
  }

  componentDidMount() {
    console.log("component did mount");
    this.getUserList();
  }

  getUserList(){
    axios.get(`${url}/Users/`)
      .then(res => {
        this.setState({
          Users: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    return this.state.Users.map((res, i) => {
      return <UserTableRow obj={res} key={i} getUserList={() => this.getUserList()}/>;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <h2>Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Created Date</th>
            <th>Updated date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}