import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
// import CompanyTableRow from './CompanyTableRow';
import CheckLIst from "../list/CheckList";

export default class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companys: [],
      countconpany: 0
    };
  }

  componentDidMount() {
    // axios.get('http://localhost:4000/companys/')
    //   .then(res => {
    //       console.log('=====company data====',res.data)
    //     this.setState({
    //       companys: res.data.data,
    //       countconpany: res.data.totalCount
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
  }

//   DataTable() {
//     return this.state.companys.map((res, i) => {
//       return <CompanyTableRow obj={res} key={i} />;
//     });
//   }
  handleChange =(data) =>{
    console.log('handleChange = ',data);
    this.setState({
      companys: data.data,
      countconpany: data.totalCount
    });
  }

  render() {
    return (
      <div className="">
  <div className="row">
    <div className="col-md-3">
    
      <CheckLIst countconpany ={this.state.countconpany} onchangeclick = {this.handleChange}/>
      </div>
    <div className="col-md-9 table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>JobTitle1</th>
            <th>JobLevel1</th>
            <th>JobFunction1</th>
            <th>Contact Country</th>
            <th>CompanyId</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        {/* <tbody>
          {this.DataTable()}
        </tbody> */}
      </Table>
    </div>
    </div>

    </div>

    );
  }
}