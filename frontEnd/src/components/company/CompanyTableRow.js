import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import {url } from '../../config/config';

export default class CompanyTableRow extends Component {

    constructor(props) {
        super(props);
        // this.deleteStudent = this.deleteStudent.bind(this);
    }

    // deleteStudent() {
    //     axios.delete(`${url}/students/delete-student/${this.props.obj._id}`)
    //         .then((res) => {
    //             console.log('Student successfully deleted!')
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }

    render() {
        return (
            <tr>
                <td>{this.props.obj.Company}</td>
                <td>{this.props.obj.CompanyId}</td>
                <td>{this.props.obj.EmployeeSizeFromValue}</td>
                <td>{this.props.obj.EmployeeSizeToValue}</td>
                <td>{this.props.obj.IndustryType1}</td>
                <td>{this.props.obj.Speciality}</td>
                <td>{this.props.obj.SubIndustryType1}</td>
                {/* <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                </td> */}
            </tr>
        );
    }
}