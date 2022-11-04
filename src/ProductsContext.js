import React, { useState } from 'react';


const ProductContext = React.createContext();

export default ProductContext;

const INITIAL_PRODUCTS = [
    {
        productName: "Product 1",
        productCompany: "Company 1",
        type: "Mobile",
        availableFrom: '2011-04-25',
        price: '32080'
    },
    {
        productName: "Product 2",
        productCompany: "Company 2",
        type: "Laptop",
        availableFrom: '2021-04-25',
        price: '320800'
    }
]
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(INITIAL_PRODUCTS)
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}