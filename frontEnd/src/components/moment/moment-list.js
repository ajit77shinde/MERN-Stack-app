import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MomentTableRow from './MomentTableRow';
import { url } from '../../config/config';


export class MomentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      moments: []
    };
  }

  componentDidMount() {
    console.log("component did mount");
    this.getUserList();
  }

  getUserList(){
    axios.get(`${url}/moment/find`)
      .then(res => {
        console.log("moment data = ", res.data.data);
        this.setState({
          moments: res.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    return this.state.moments.map((moment, i) => {
      return <MomentTableRow obj={moment} serNo={++i} key={i} getUserList={() => this.getUserList()}/>;
    });
  }


  render() {
    return (
    <div className="table-wrapper">
      <h2>Moments</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Image</th>
            <th>Title</th>
            <th>Tags</th>
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