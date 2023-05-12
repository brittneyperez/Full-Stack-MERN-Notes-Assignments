import React, { useEffect } from 'react'
import axios from 'axios'

const ProductList = ({ listedProducts, setListedProducts }) => {
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setListedProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    
    return (
        <div className='container mx-auto'>
            <h2 className="mt-3 my-4 font-serif text-3xl font-semibold text-stone-700">My Products</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                listedProducts.map((productInfo, index) => {
                    return (
                        <div key={ index } className='bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4'>
                            <div className='font-serif items-center text-center mb-3'>
                                <h3 className='text-xl font-semibold text-stone-800'>{ productInfo.productName }</h3>
                                <h4 className='font-bold text-gray-500'>${ productInfo.productPrice }</h4>
                            </div>
                            <p>{ productInfo.productDescription }</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProductList;