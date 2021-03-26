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
            email: values.email,
            password: values.password
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
                <div className="center-link">
                    <Link className=""
                        to={"/reset-pass"}
                    > Forgot password? </Link>
                </div>
            </Form>

        </div>
    )
}

