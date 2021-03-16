import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { url } from '../../config/config';
import { useState } from "react";
// import './gift.css';
import validate from "./validationRule";
import useForm from "./useForm";
import { useHistory } from "react-router-dom";

export const CreateUser = () => {
    const history = useHistory();

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);


    function login() {
        console.log('No errors, submit callback called!');
        localStorage.setItem("mobileNo", values.mobileNo);
    const userObject = {
      email: values.email,
      password: values.password
    };
    console.log("userObject = ", userObject)

    // axios.post(`${url}/users/create-user`, userObject)
    //   .then(res => console.log(res.data));


        history.push("/user-list");

    }
    console.log("errors = ", errors)
    return (
        <div className="form-wrapper">
            {/* <Form onSubmit={this.onSubmit}> */}
            <Form >
                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoComplete="off" name="email" type="text" value={values.email || ''} onChange={handleChange}
                        placeholder="Please enter email" />
                    {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                    )}
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoComplete="off" name="password" type="password" value={values.password || ''} onChange={handleChange}
                        placeholder="Please enter password" />
                    {errors.password && (
                        <p className="help is-danger">{errors.password}</p>
                    )}
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} variant="danger" size="lg" block="block" type="submit">
                    Create Company
        </Button>
            </Form>
        </div>
    )
}
// export default class CreateUser extends Component {

//   constructor(props) {
//     super(props)

//     // Setting up functions
//     // this.onChangeUserName = this.onChangeUserName.bind(this);
//     // this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
//     // this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
//     // this.onSubmit = this.onSubmit.bind(this);

//     // Setting up state
//     this.state = {
//       name: '',
//       email: '',
//       password: ''
//     }
//   }

//   onChangeUserName(e) {
//     this.setState({ name: e.target.value })
//   }

//   onChangeUserEmail(e) {
//      let validationEmail = validate(e.target);
//     this.setState({ email: e.target.value })
//   }

//   onChangeUserPassword(e) {
//     this.setState({ password: e.target.value })
//   }

//   onSubmit(e) {
//     e.preventDefault()

//     const studentObject = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password
//     };

//     axios.post(`${url}/students/create-student`, studentObject)
//       .then(res => console.log(res.data));

//     this.setState({
//       name: '',
//       email: '',
//       password: ''
//     });
//   }

//   render() {
//     return (
    // <div className="form-wrapper">
//       <Form onSubmit={this.onSubmit}>

//         <Form.Group controlId="Email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control name="name" type="Company" value={this.state.email} onChange={(e) => this.onChangeUserEmail(e)} />
//         </Form.Group>

//         <Form.Group controlId="Name">
//           <Form.Label>Password</Form.Label>
//           <Form.Control name="password" type="password" value={this.state.password} onChange={(e) => this.onChangeUserPassword(e)} />
//         </Form.Group>

//         <Button variant="danger" size="lg" block="block" type="submit">
//           Create Company
//         </Button>
//       </Form>
//     </div>);
//   }
// }
