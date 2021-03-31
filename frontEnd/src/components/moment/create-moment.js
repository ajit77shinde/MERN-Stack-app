import React, { useState, Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { url } from '../../config/config';
import validate from "./validationRule";
import useForm from "./useForm";
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';
import 'react-bootstrap-tagsinput/dist/index.css'
import "./moment.css";
import { useAlert } from 'react-alert'
// import { TagInput } from '../list/TagInput';
import { InputTags } from 'react-bootstrap-tagsinput'
import { FilesUploadComponent } from "../commonComponent/fileUploadComponent";
export const CreateMoment = () => {
    const history = useHistory();
    const alert = useAlert();

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, validate);

    const [state, setState] = useState([]);
    const [imgCollection, setImgCollection] = useState('');

    function login() {
        console.log('No errors, submit callback called!');

    }
    const submitData = (e) => {
        if (e) e.preventDefault();
        console.log('No errors, submit callback called!');

        var formData = new FormData();
        formData.append('title', values.title)

        for (var i = 0; i < state.length; i++) {
            formData.append('tags', state[i]);
        }
        for (const key of Object.keys(imgCollection)) {
            formData.append('multiple_image', imgCollection[key])
        }
        axios.post(`${url}/moment/create`, formData)
            .then(res => {
                console.log(res.data);
                alert.show(res.data.msg)
                history.push("/moment-list");
            });

    }
    return (
        <div className="form-wrapper">
            <h2>Add New Moment</h2>
            <Form >
                <Form.Group controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control autoComplete="off" name="title" type="text" value={values.title || ''} onChange={handleChange}
                        placeholder="Please Enter First Name" />
                </Form.Group>

                <Form.Group controlId="Tags">
                    <Form.Label>Tags</Form.Label>
                    {/* <TagInput  /> */}
                    <InputTags values={state} onTags={(value) => setState(value.values)} />
                    {/* <Form.Control autoComplete="off" name="tags" type="text" value={values.tags || ''} onChange={handleChange}
                        placeholder="Please Enter Last Name" /> */}
                </Form.Group>

                <Form.Group controlId="Uploading">
                    <Form.Label>Images</Form.Label>
                    <FilesUploadComponent setImgCollection={setImgCollection} />
                    {/* <Form.Control autoComplete="off" name="uploading" type="text" value={values.uploading || ''} onChange={handleChange}
                        placeholder="Please Enter Mobile no" /> */}
                </Form.Group>

                <Button onClick={(e) => submitData(e)} variant="danger" size="lg" block="block" type="submit">
                    Submit
        </Button>

            </Form>

        </div>
    )
}

