import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const CreateAuthor = () => {
    
    const [ newAuthor, setNewAuthor ] = useState({ authorName: "" })
    const [ errors, setErrors ] = useState({})
    
    const navigate = useNavigate();
    
    const changeHandler = (e) => {
        setNewAuthor({ ...newAuthor, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors/create", newAuthor)
        .then((res) => {
            console.log(res);
            navigate('/');
        })
        .catch((err) => {
            console.log(err.response);
            console.log(err.response.data.errors); // * to see our err --> response --> data --> errors (this is an object)
            setErrors(err.response.data.errors); // err message will show up in Components > State hooks
        })
    }
    
    return (
        <div className='w-full max-w-lg mx-auto'>
            <form onSubmit={ submitHandler }> 
                <h2 className='text-xl font-semibold text-zinc-800 mt-4 mb-3'>Add a New Author</h2>
                
                <div className='md:flex md:items-center mb-3'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Author Name:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="text" name="authorName" onChange={ changeHandler }
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                    </div>
                </div>
                { errors.authorName ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-3 rounded' >{ errors.authorName.message }</p> : null }
                
                <div>
                    <Link to={'/'} className='focus:outline-none text-white bg-zinc-500 hover:bg-zinc-600 focus:ring-2 focus:ring-zinc-200 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Cancel</Link>
                    <input type="submit" value="Submit" className='text-white bg-sky-500 hover:bg-sky-600 focus:ring-2 focus:ring-sky-200 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' />
                </div>
            </form>
        </div>
    )
}

export default CreateAuthor