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
    
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                console.log(res.data);
                const newProductList = listedProducts.filter((product, index) => product._id !== productId)
                setListedProducts(newProductList);
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div className='container mx-auto'>
            <h2 className="mt-3 my-4 font-serif text-3xl font-semibold text-stone-700">My Products</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                listedProducts.map((productInfo, index) => {
                    return (
                        <div key={ index } className='bg-white shadow-md rounded px-3 pt-6 pb-8 mb-4'>
                            <div className='font-serif text-center mb-3 text-stone-700 content-center'>
                                <h3 className='text-xl font-semibold text-stone-800'>{ productInfo.productName }</h3>
                                
                                <div id='productLinks' className='font-semibold text-sky-700 flex justify-center gap-3'>
                                    <Link to={`/products/${productInfo._id}`}>View</Link>
                                    |
                                    <Link to={`/products/edit/${productInfo._id}`}>Edit</Link>
                                    |
                                    <button className='text-red-700' onClick={()=>deleteProduct(productInfo._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProductList;