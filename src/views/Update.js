import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
import {
    Link
} from "react-router-dom";

const Update = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);

                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1>Favorite Authors</h1>
            <hr/>
            <h3>Update Author</h3>
            {loaded && (
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialFirstName={author.firstName}
                        initialLastName={author.lastName}
                    />
            )}
            <hr/>
            <Link to = '/'>Home</Link>
        </div>
    )
}

export default Update;