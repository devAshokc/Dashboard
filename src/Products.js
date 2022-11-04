import React, { useContext } from 'react';
import {
    Link
} from "react-router-dom";
import ProductContext from './ProductsContext';

export default function Products() {
    const { products, setProducts } = useContext(ProductContext);
    let handledelete = (index) => {
        let confirm = window.confirm("Are you sure, you want to delete?");
        if (confirm) {
            products.splice(index - 1, 1);
            setProducts([...products]);
        }
    }
    return (
        <div>
            <div className="top-container d-flex mb-4">
                <h1 className="h3  text-gray-800 ml-3">Products</h1>
                <Link to='/createproducts' className="btn btn-primary mr-4">Create Product</Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Products List</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTables" style={{ width: "100%", cellspacing: "0" }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Type</th>
                                    <th>Available from</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Type</th>
                                    <th>Available from</th>
                                    <th>Price</th>
                                    <th>Actions</th>

                                </tr>
                            </tfoot>
                            <tbody>
                                {products.map((obj, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{obj.productName}</td>
                                        <td>{obj.productCompany}</td>
                                        <td>{obj.type}</td>
                                        <td>{obj.availableFrom}</td>
                                        <td>${obj.price}</td>
                                        <td><Link to={'/products/edit/' + (index + 1)} className='btn btn-sm btn-primary'>Edit</Link><button onClick={() => { handledelete(index + 1) }} className='btn btn-sm btn-danger ml-1'>Delete</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}