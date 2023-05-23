import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateTest = () => {
    
    const navigate = useNavigate();
    const { id } = useParams(); // this id is destructured from the frontEnd (from the URL)
    const [ authorName, setAuthorName ] = useState("");
    
    const [ errors, setErrors ] = useState({});
    
    // TODO: This error needs to be located wherever its invovled in looking for that id the user is searching for
    const [ authorNotFoundError, setAuthorNotFoundError ] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                console.log(`Author: ${res.data.authorName} |`, `id: ${res.data._id}`)
                console.log(res);
                console.log(res.data);
                /* What does res.data do?
                    This is the ONE Document we are calling back for the specific id.
                    We are now going to go one level deeper so we can setAuthorName with
                    its corresponding property key from the backend.
                */
                
                setAuthorName(res.data.authorName) // ? What does this do? Goes inside result > access data > access author object > then we can finally access the key:val pair for authorName
            })
            .catch((err) => {
                console.log(err);
                
                // ? The authorNotFoundError will come from the GET request. 
                setAuthorNotFoundError("Author not found using that ID.")
            });
    }, [])
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        // parameters needed from controller:      id from link  & req.body attribute(s)
        axios.patch(`http://localhost:8000/api/author/edit/${id}`, { authorName }) // {authorName} is short-hand for key:val pair of authorName:authorName
            .then((res) => {
                console.log("AUTHOR NAME:",authorName)
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                /* My attempts to find the error messages
                    * console.log(err.response)
                    * console.log(err.response.data)
                    * console.log(err.response.data.errors)
                    ? err message will show up in Components > State hooks
                */
                setErrors(err.response.data.errors);
            })
    }
    
    
    return (
        <div className='w-full max-w-lg mx-auto'>
            
            { authorNotFoundError ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{ authorNotFoundError } Add them now in the link above!</p> :
            
            <form onSubmit={ submitHandler }> 
                <h2 className='text-xl font-semibold text-zinc-800 mt-4 mb-3'>Edit this Author</h2>
                
                <div className='md:flex md:items-center mb-3'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Author Name:</label>
                    </div>
                    <div className='md:w-3/5'>
                        <input 
                            type="text"
                            name="authorName" 
                            onChange={ (e) => setAuthorName(e.target.value) }
                            value={ authorName } 
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                    </div>
                </div>
                { errors.authorName ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-3 rounded' >{ errors.authorName.message }</p> : "" }
                
                <div>
                    <Link to={'/'} className='focus:outline-none text-white bg-zinc-500 hover:bg-zinc-600 focus:ring-2 focus:ring-zinc-200 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'>Cancel</Link>
                    <input type="submit" value="Update" className='text-white bg-sky-500 hover:bg-sky-600 focus:ring-2 focus:ring-sky-200 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' />
                </div>
            </form>
            }
        </div>
    )
}

export default UpdateTest;