import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='py-4 md:flex md:items-center md:justify-center gap-4 bg-sky-100 mb-4'>
            <h1 className='text-3xl font-serif font-bold'>Favorite Authors</h1>
            
            <div id="nav__links" className='flex justify-center text-sky-600 no-underline font-semibold ms-8 flex gap-4'>
                <Link to={'/'} className='hover:underline hover:text-rose-400'>Home</Link>
                <span className='text-zinc-400'>|</span>
                <Link to={'/authors/create'} className='hover:underline hover:text-rose-400'>Add an author</Link>
            </div>
        </div>
    )
}

export default Navigation