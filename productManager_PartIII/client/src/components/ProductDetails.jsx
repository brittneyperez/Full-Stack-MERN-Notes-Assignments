import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    
    const [ itemDetails, setItemDetails ] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setItemDetails(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);
    
    const deleteProductHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div className='w-full max-w-lg mx-auto'>
            <div className='bg-white shadow-md rounded px-3 pt-6 pb-6 mb-4'>
                <h2 className="mt-3 my-4 font-serif text-2xl font-semibold text-stone-700">
                    { itemDetails.productName }
                </h2>
                
                <div className='font-serif items-center text-center mb-3'>
                    <p className='font-bold text-gray-500'>${ itemDetails.productPrice }</p>
                    <p className='my-3'>{ itemDetails.productDescription }</p>
                    <button onClick={ deleteProductHandler } className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                        Delete
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetails