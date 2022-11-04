import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UserContext from './UsersContext';

function CreateUser() {
    const [userName, setUserName] = useState('');
    const [position, setPosition] = useState('');
    const [office, setOffice] = useState('');
    const [age, setAge] = useState('');
    const [startDate, setStartDate] = useState('');
    const [salary, setSalary] = useState('');
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();
    let handlesubmit = (e) => {
        e.preventDefault();
        let objvalues = { userName, position, office, age, startDate, salary };
        setUserData([...userData, objvalues]);
        history.push('/users')
    }

    return (
        <div>
            <h3 className="ml-3 mb-4">Create New user</h3>
            <div className="container">
                <form className="p-2" onSubmit={handlesubmit}>
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <label>UserName</label>
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Position</label>
                            <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <label>Office</label>
                            <input type="text" value={office} onChange={(e) => setOffice(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Age</label>
                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-lg-6">
                            <label>StartDate</label>
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Salary</label>
                            <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="submitbtn"><input type="submit" value="Create" className="btn submitbtnn btn-primary" /></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser