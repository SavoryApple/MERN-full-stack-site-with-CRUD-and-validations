import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
import {
    Link
} from "react-router-dom";


const Create = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);

                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author/create', author)
            .then(res => {
                if (isError === false) {
                    setAuthor(author);
                    history.push("/");
                }
            })
            .catch(err => {
                console.log("ERROR:", err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                setIsError(true);
            });
        }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1>Favorite Authors</h1>
            <hr />
            <h3>Add a new author:</h3>
            <AuthorForm
                onSubmitProp={createAuthor}
                initialFirstName=""
                initialLastName=""
            />
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <hr />
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Create;