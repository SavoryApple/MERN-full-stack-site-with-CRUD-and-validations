import React, { useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

export default props => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({ firstName, lastName });
    }

    //onChange to update firstName and lastName
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </p>
                <div className='d-flex flex-row justify-content-between'>
                    <input type="submit" />
                    <Link to='/' className='btn btn-danger' >Cancel</Link>
                </div>
            </form>
        </div>
    )
}