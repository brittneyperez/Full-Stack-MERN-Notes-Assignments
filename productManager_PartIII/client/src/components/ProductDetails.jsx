import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    
    const [ itemDetails, setItemDetails ] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setItemDetails(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);
    
    return (
        <div className='container mx-auto'>
            <h2 className="mt-3 my-4 font-serif text-2xl font-semibold text-stone-700">
                { itemDetails.productName }
            </h2>
            
            <div className='font-serif items-center text-center mb-3'>
                <p className='font-bold text-gray-500'>${ itemDetails.productPrice }</p>
                <p className='bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4'>
                    { itemDetails.productDescription }
                </p>
            </div>
            
        </div>
    )
}

export default ProductDetails