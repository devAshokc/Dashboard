import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UserContext from './UsersContext';


function Edituser(props) {
    const { userData, setUserData } = useContext(UserContext);
    console.log(props)

    const user = userData[props.match.params.id - 1]

    const [userName, setUserName] = useState(user.userName);
    const [position, setPosition] = useState(user.position);
    const [office, setOffice] = useState(user.office);
    const [age, setAge] = useState(user.age);
    const [startDate, setStartDate] = useState(user.startDate);
    const [salary, setSalary] = useState(user.salary);
    const history = useHistory();
    let handlesubmit = (e) => {
        e.preventDefault();
        let objvalues = { userName, position, office, age, startDate, salary };
        userData[props.match.params.id - 1] = objvalues;
        setUserData([...userData]);
        history.push('/users')
    }

    return (
        <div>
            <h3 className="ml-3">Edit Existing user</h3>
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
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <label>StartDate</label>
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control" />
                        </div>
                        <div className="col-lg-6">
                            <label>Salary</label>
                            <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="submitbtn"><input type="submit" value="Update" className="btn submitbtnn btn-primary" /></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edituser