import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

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
            {
                listedProducts.map((productInfo, index) => {
                    return (
                        <ul key={ index } className='items-center text-center'>
                            <li className='text-lg font-semibold font-serif mb-3 text-sky-700'>
                                <Link to={`/products/${productInfo._id}`}>
                                    { productInfo.productName }'s Page
                                </Link>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default ProductList;