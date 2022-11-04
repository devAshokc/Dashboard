import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from './UsersContext';

function Users() {
    let { userData, setUserData } = useContext(UserContext);
    const handledelete = (index) => {
        let confirm = window.confirm("Are you sure, you want to delete?");
        if (confirm) {
            userData.splice(index - 1, 1);
            setUserData([...userData]);
        }
    }

    return (
        <div>
            <div className='top-container d-flex mb-4'>
                <h1 className="h3 mb-2 text-gray-800 ml-3">Users</h1>
                <Link to="/createuser" className="btn btn-primary mr-4">Create User</Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">User Lists</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" style={{ width: "100%", cellspacing: "0" }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Actions</th>

                                </tr>
                            </tfoot>
                            <tbody>
                                {userData.map((obj, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{obj.userName}</td>
                                        <td>{obj.position}</td>
                                        <td>{obj.office}</td>
                                        <td>{obj.age}</td>
                                        <td>{obj.startDate}</td>
                                        <td>$ {obj.salary}</td>
                                        <td><Link to={'/users/edit/' + (index + 1)} className='btn btn-sm btn-primary'>Edit</Link><button onClick={() => { handledelete(index + 1) }} className='btn btn-sm btn-danger ml-1'>Delete</button></td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users