import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProductForm = () => {
    
    const { id } = useParams();
    const [ productName, setProductName ] = useState("");
    const [ productPrice, setProductPrice ] = useState("");
    const [ productDescription, setProductDescription ] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProductName(res.data.productName);
                setProductPrice(res.data.productPrice);
                setProductDescription(res.data.productDescription);
            })
            .catch(err => console.log(err));
    }, [])
    
    const submitUpdatedProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, {
            productName, productPrice, productDescription}) // aka: productName: productName,... etc
            .then(res => {
                console.log(res);
                navigate('/'); // returns to the Main.js component after submission
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div className="w-full max-w-lg mx-auto">
            <form onSubmit={ submitUpdatedProduct } className='bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4'>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-700">Update Product Information</h2>
                
                <div className="md:flex md:items-center my-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Name:
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setProductName(e.target.value)} value={ productName } name='productName' type="text"
                            className="bg-stone-100 appearance-none border-2 border-stone-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                        />
                    </div>
                </div>
                
                <div className="md:flex md:items-center my-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Price:
                        </label>
                    </div>
                    <div className="md:w-2/3 relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg style={{color:"#9E9E9E"}} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.999,8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245,0.298-5,1.592-5,4.429c0,2.706,2.666,4.113,5,4.43V17.9 c-1.448-0.251-3-1.024-3-2.4h-2c0,2.589,2.425,4.119,5,4.436v1.063V22h2v-1.001V19.93c2.245-0.298,5-1.593,5-4.43 s-2.755-4.131-5-4.429V6.1C14.329,6.339,15.999,7.041,15.999,8.5z M7.999,8.5c0-1.459,1.67-2.161,3-2.4v4.799 C9.628,10.646,7.999,9.897,7.999,8.5z M15.999,15.5c0,1.459-1.67,2.161-3,2.4V13.1C14.329,13.339,15.999,14.041,15.999,15.5z"></path>
                            </svg>
                        </div>
                        <input onChange={(e) => setProductPrice(e.target.value)} value={ productPrice } name='productPrice' type="text"
                            className="bg-stone-100 appearance-none border-2 border-stone-200 rounded w-full py-2 ps-7 pe-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                        />
                    </div>
                </div>
                
                <div className="md:flex md:items-center my-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Description:
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setProductDescription(e.target.value)} value={ productDescription } name='productDescription' type="text"
                            className="bg-stone-100 appearance-none border-2 border-stone-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                        />
                    </div>
                </div>
                
                <div className="flex justify-center">
                    <input type="submit" value="Update Product" 
                        className="shadow bg-teal-500 hover:bg-teal-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    />
                </div>
            </form>
        </div>
    )
}

export default UpdateProductForm