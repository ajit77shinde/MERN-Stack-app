import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { url } from '../../config/config';
// import './gift.css';
import validate from "./validationRule";
import useForm from "./useForm";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./user.css";
import { useAlert } from 'react-alert'

export const ResetPassword = () => {
    const history = useHistory();
    const alert = useAlert();


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

        axios.put(`${url}/users/update-user`, userObject)
            .then(res => {
                alert.show(res.data.msg)
                console.log(res.data);
                history.push("/user-list");
            });
    }
    console.log("errors = ", errors)
    return (
        <div className="form-wrapper">
            {/* <Form onSubmit={this.onSubmit}> */}
            <Form >
                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoComplete="off" name="email" type="text" value={values.email || ''} onChange={handleChange}
                        placeholder="Please Enter Email" />
                    {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                    )}
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control autoComplete="off" name="password" type="password" value={values.password || ''} onChange={handleChange}
                        placeholder="Please Enter New Password" />
                    {errors.password && (
                        <p className="help is-danger">{errors.password}</p>
                    )}
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} variant="danger" size="lg" block="block" type="submit">
                    Reset Password
        </Button>
                {/* <div className="center-link">
                    <Link className=""
                        to={"/edit-user"}
                    > Forgot password? </Link>
                </div> */}
            </Form>

        </div>
    )
}

