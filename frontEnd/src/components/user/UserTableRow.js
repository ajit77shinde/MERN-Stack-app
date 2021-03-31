import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { url } from '../../config/config';
import dateFormat from 'dateformat';

export default class UserTableRow extends Component {

    constructor(props) {
        super(props);
        // this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete(`${url}/users/delete-user/${this.props.obj._id}`)
            .then((res) => {
                console.log('user successfully deleted!');
                this.props.getUserList()
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.email}</td>
                <td>{dateFormat(this.props.obj.created_date, "mmmm dS, yyyy")}</td>
                <td>{dateFormat(this.props.obj.updated_date, "mmmm dS, yyyy")}</td>
                <td> <Button onClick={() => this.deleteUser()} size="sm" variant="danger">Delete</Button> </td>
            </tr>
        );
    }
}