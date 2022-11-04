import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ProductContext from './ProductsContext';


function Editproducts(props) {


    const { products, setProducts } = useContext(ProductContext);
    let product = products[props.match.params.id - 1];
    const [productName, setProductName] = useState(product.productName);
    const [productCompany, setProductCompany] = useState(product.productCompany);
    const [productType, setProductType] = useState(product.type);
    const [availableFrom, setAvailableFrom] = useState(product.availableFrom);
    const [price, setPrice] = useState(product.price);
    let history = useHistory();

    let handleSubmit = (e) => {
        e.preventDefault();
        let obj = { productName, productCompany, type: productType, availableFrom, price };
        products[props.match.params.id - 1] = obj;
        setProducts([...products]);
        history.push('/products');
    }
    return (
        <div>
            <h3 className="ml-3">Edit Existing Product</h3>

            <div className="container">
                <form onSubmit={handleSubmit} className="p-2">
                    <div className="row p-1">
                        <div className="col-lg-6">
                            <label>Product Name</label>
                            <input type="text" value={productName} onChange={(e) => { setProductName(e.target.value) }} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Product Company</label>
                            <input type="text" value={productCompany} onChange={(e) => { setProductCompany(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row p-1">
                        <div className="col-lg-6">
                            <label>Product Type</label>
                            <input type="text" value={productType} onChange={(e) => { setProductType(e.target.value) }} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Available From</label>
                            <input type="date" value={availableFrom} onChange={(e) => { setAvailableFrom(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row p-1">
                        <div className="col-lg-6">
                            <label>Price</label>
                            <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row p-1 submitbtn">
                        <input type="submit" value="Update" className="btn btn-primary " />
                    </div>
                </form>
            </div>
        </div >
    )

}

export default Editproducts