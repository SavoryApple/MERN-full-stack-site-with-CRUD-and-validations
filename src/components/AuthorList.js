import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data.authorList))
            .catch(err => console.log(err));
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }

    return (
        <div className=' d-flex flex-column align-items-center' >
            <h1>Favorite Authors</h1>
            <Link to ={"/new"}>
                <p>Add an author</p>
            </Link>
            <p>We have quotes by:</p>
            <table className='table w-50'>
                <thead className='thead-dark'>
                    <tr className=''> 
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Actions</th>
                        <th scope='col'>Breed</th>
                        <th scope='col'>Important?</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, idx) => 
                    // {
                        // return (
                            <tr key={idx} >
                                <td >
                                    {author.firstName}
                                </td>
                                <td >
                                    {author.lastName}
                                </td>
                                <td>
                                    <Link className='mb-5' to={"/author/" + author._id + "/edit"}>Edit</Link>
                                    &nbsp;&nbsp;
                                    <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                                </td>
                                <td>
                                    {author.breed}
                                </td>
                                <td>
                                    {
                                    author.isImportant == true?
                                    <p>🌟</p>
                                    :
                                    <></>
                                    }
                                </td>
                            </tr>
                        // )
                    // }
                    )}
                </tbody>
            </table>

        </div>

    )

}

export default AuthorList;



{/* <table class="table">
    <thead class="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table> */}










