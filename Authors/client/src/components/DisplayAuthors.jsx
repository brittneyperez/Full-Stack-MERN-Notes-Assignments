import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DisplayAuthors = () => {
    
    const [ allAuthors, setAllAuthors ] = useState([]) // make sure this dataType matches what it is in the backEnd; this is an array/list
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((response) => {
                console.log(response)
                // console.log(response.data.all_authors) <= see in console the info it gives back
                setAllAuthors(response.data.all_authors)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])
    
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then((res) => {
                console.log('Author deletion successful!')
                // App state needs to be updated to reflect deletion
                const updatedAuthorList = allAuthors.filter((author) => author._id !== id)
                setAllAuthors(updatedAuthorList)
            })
            .catch((err) => console.log(err))
    }
    
    return (
        <div className='container mx-auto'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4'>
                <table className='w-full text-sm text-left text-zinc-700'>
                    <thead className='text-xs text-zinc-900 uppercase bg-zinc-400'>
                        <tr>
                            <th scope="col" className="px-6 py-3">Author</th>
                            <th scope="col" className="px-6 py-3">Available Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        allAuthors.map((author) => {
                            return (
                                <tr key={ author._id } className='bg-white border-b hover:bg-zinc-100'>
                                    <td scope="col" className="px-6 py-3 font-bold font-serif">{ author.authorName }</td>
                                    <td className='flex content-evenly gap-4'>
                                        <Link to={`/author/edit/${author._id}`} className="py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-zinc-200 rounded-lg border border-zinc-300 hover:bg-zinc-400 hover:text-zinc-200 focus:z-10 focus:ring-3 focus:ring-gray-200">
                                            Edit
                                        </Link>
                                        <button onClick={() => deleteHandler(author._id)} className="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2 mr-2 mb-2">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayAuthors