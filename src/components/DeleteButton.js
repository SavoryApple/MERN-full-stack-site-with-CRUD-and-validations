import React from 'react'
import axios from 'axios';

export default props => {

    const { authorId, successCallback } = props;

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                successCallback();
            })
            .catch(err => console.error(err));
    }

    return (
        <button className='btn btn-danger btn-sm' onClick={deleteAuthor}>
            Delete
        </button>
    )
}