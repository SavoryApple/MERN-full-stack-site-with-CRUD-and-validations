import React, { useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

export default props => {
    const { initialFirstName, initialLastName, initialBreed, initialIsImportant, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [breed, setBreed] = useState(initialBreed);
    const [isImportant, setIsImportant] = useState(initialIsImportant);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        // console.log(firstName, lastName, breed, checkbox)
        onSubmitProp({ firstName, lastName, breed, isImportant });
    }

    //onChange to update firstName and lastName
    return (
        <div>
            <hr></hr>
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
                    <select onChange={(e) => setBreed(e.target.value)} name="search" id="search" value={breed}>
                        <option value="choose">Choose...</option>
                        <option value="Human">Human</option>
                        <option value="Alien">Alien</option>
                    </select>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <input onChange={(e) => setIsImportant(e.target.checked)} className="form-check-input" type="checkbox" checked={isImportant} id="flexCheckDefault" />
                            Important
                        </label>
                    </div>
                </div>
                <hr />
                <div className='d-flex flex-row justify-content-between'>
                    <input className='btn btn-primary' type="submit" />
                    <Link to='/' className='btn btn-danger' >Cancel</Link>
                </div>
            </form>
        </div>
    )
}