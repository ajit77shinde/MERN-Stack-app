import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { url } from '../../config/config';
import dateFormat from 'dateformat';
import Badge from 'react-bootstrap/Badge'

export default class MomentTableRow extends Component {

    // constructor(props) {
    //     super(props);
    // }

    deleteMoment() {
        axios.delete(`${url}/moment/delete-moment/${this.props.obj._id}`)
            .then((res) => {
                console.log('user successfully deleted!');
                this.props.getUserList()
            }).catch((error) => {
                console.log(error)
            })
    }
        badgeComponent(){
            return this.props.obj.tags.map(obj => <><Badge pill variant="primary">
            {obj}
          </Badge>{'   '}</>)
        }
    render() {
        console.log(" =========== ", this.props);
        return (
            <tr>
                <td>{ this.props.serNo }</td>
                <td>
                    {/* {this.props.obj.image} */}
                    <img src={this.props.obj.multiple_image[0]} alt="alternatetext" style={{width: '50px',
    borderRadius: '50%'}}></img>
                </td>
                <td>{this.props.obj.title}</td>
                {/* <td>{this.props.obj.tags}</td> */}
                <td>{this.badgeComponent()}</td>
                
                <td> 
                <Link className="edit-link" to={"/edit-moment/" + this.props.obj._id}>
                        Edit
                    </Link><Button onClick={() => this.deleteMoment()} size="sm" variant="danger">Delete</Button> </td>
            </tr>
        );
    }
}