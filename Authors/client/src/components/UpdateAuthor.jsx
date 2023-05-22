import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateAuthor = () => {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const [ authorName, setAuthorName ] = useState("");
    const [ errors, setErrors ] = useState({});
    const [ authorNotFoundError, setAuthorNotFoundError ] = useState("");
    
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                console.log(`Author: ${res.data.authorName} |`, `id: ${res.data._id}`)
                console.log(res.data);
                setAuthorName(res.data.authorName);
                // ? What does this do? Goes inside result > access data > access author object > then we can finally access the key:val pair for authorName
            })
            .catch((err) => {
                console.log(err)
                setAuthorNotFoundError("Author not found using that ID.")
            });
    }, [])
    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/author/edit/${id}`, {authorName}) 
        /* putting {} around authorName updates the name in FrontEnd bc
            // ... authorName is an object
        */
            .then((res) => {
                console.log("AUTHOR NAME:",authorName)
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors); // logs the error for each object; the err message is what we want
                setErrors(err.response.data.errors); // err message will show up in Components > State hooks
            })
    }
    
    
    return (
        <div className='w-full max-w-lg mx-auto'>
            {authorNotFoundError ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{ authorNotFoundError } Add them now in the link above!</p> : null}
            <form onSubmit={ submitHandler }> 
                <h2 className='text-xl font-semibold text-zinc-800 mt-4 mb-3'>Edit this Author</h2>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Author Name:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="text" name="authorName" value={ authorName } onChange={(e) => setAuthorName(e.target.value)}
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        { errors.authorName ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded' >{ errors.authorName.message }</p> : null }
                    </div>
                </div>
                
                <div>
                    <Link to={'/'} className='focus:outline-none text-white bg-zinc-500 hover:bg-zinc-600 focus:ring-2 focus:ring-zinc-200 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Cancel</Link>
                    <input type="submit" value="Submit" className='text-white bg-sky-500 hover:bg-sky-600 focus:ring-2 focus:ring-sky-200 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' />
                </div>
            </form>
        </div>
    )
}

export default UpdateAuthor;