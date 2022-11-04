import React, { useState } from 'react';

let UserContext = React.createContext();

export default UserContext;

const UsersData = [
    {
        userName: "Person 1",
        position: "System Architect",
        office: 'Edinburgh',
        age: 41,
        startDate: '2011-04-25',
        salary: '320800'
    },
    {
        userName: "Person 2",
        position: "Accountant",
        office: 'Tokyo',
        age: 38,
        startDate: '2020-05-23',
        salary: '170750'
    }
]

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(UsersData)
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}