import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { url } from '../../config/config';
import validate from "./validationRule";
import useForm from "./useForm";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./user.css";
import { useAlert } from 'react-alert'

export const CreateUser = () => {
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
            firstName: values.firstName,
            lastName: values.lastName,
            mobileNo: values.mobileNo,
            city: values.city,
            email: values.email,
            password: values.password,
           
        };
        console.log("userObject = ", userObject)

        axios.post(`${url}/users/create-user`, userObject)
            .then(res => {
                console.log(res.data);
                alert.show(res.data.msg)
                history.push("/user-list");
            });

    }

    console.log("errors = ", errors);
    return (
        <div className="form-wrapper">
            <h2>Sign up</h2>
            <h6>To be a member</h6>
            <Form >
                <Form.Group controlId="firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control autoComplete="off" name="firstName" type="text" value={values.firstName || ''} onChange={handleChange}
                        placeholder="Please Enter First Name" />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control autoComplete="off" name="lastName" type="text" value={values.lastName || ''} onChange={handleChange}
                        placeholder="Please Enter Last Name" />
                </Form.Group>
                <Form.Group controlId="mobileNo">
                    <Form.Label>Mobile no </Form.Label>
                    <Form.Control autoComplete="off" name="mobileNo" type="text" value={values.mobileNo || ''} onChange={handleChange}
                        placeholder="Please Enter Mobile no" />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control autoComplete="off" name="city" type="text" value={values.city || ''} onChange={handleChange}
                        placeholder="Please Enter City" />
                </Form.Group>

                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoComplete="off" name="email" type="text" value={values.email || ''} onChange={handleChange}
                        placeholder="Please Enter Email" />
                    {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                    )}
                </Form.Group>
                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoComplete="off" name="password" type="password" value={values.password || ''} onChange={handleChange}
                        placeholder="Please Enter Password" />
                    {errors.password && (
                        <p className="help is-danger">{errors.password}</p>
                    )}
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} variant="danger" size="lg" block="block" type="submit">
                    Create User
        </Button>
                {/* <div className="center-link">
                    <Link className=""
                        to={"/reset-pass"}
                    > Forgot password? </Link>
                </div> */}
            </Form>

        </div>
    )
}

