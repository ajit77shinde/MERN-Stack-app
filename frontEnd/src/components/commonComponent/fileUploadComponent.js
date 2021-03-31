
import React, { useState, Component } from 'react';
// import axios from 'axios';

export const FilesUploadComponent = (props) => {
    const [imgCollection, setImgCollection] = useState('');


    // constructor(props) {
    //     super(props);

    //     this.onFileChange = this.onFileChange.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);

    //     this.state = {
    //         imgCollection: ''
    //     }
    // }

    const onFileChange = (e) => {
        setImgCollection( e.target.files )
        props.setImgCollection(e.target.files)

    }

    // onSubmit(e) {
    //     e.preventDefault()

    //     var formData = new FormData();
    //     for (const key of Object.keys(this.state.imgCollection)) {
    //         formData.append('imgCollection', this.state.imgCollection[key])
    //     }
    //     axios.post("http://localhost:4000/api/upload-images", formData, {
    //     }).then(res => {
    //         console.log(res.data)
    //     })
    // }

    
        return (
            <div className="container">
                <div className="row">
                        <div className="form-group">
                            <input type="file" name="imgCollection" 
                            onChange={(e) => onFileChange(e)} 
                            multiple 
                            />
                        </div>
                        {/* <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div> */}
                </div>
            </div>
        )
    
}