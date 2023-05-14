import React, { useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = (props) => {
    
    const [ products, setProducts ] = useState([]);
    
    return (
        <div>
            <ProductForm formProducts={ products } setFormProducts={ setProducts } />
            <ProductList listedProducts={ products } setListedProducts={ setProducts } />
        </div>
    )
}

export default Main