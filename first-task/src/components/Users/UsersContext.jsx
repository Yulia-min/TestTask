import {createContext, useState} from 'react';

export const UsersContext = createContext()

const UsersContextProvider = (props) => {
    
    const [users, setUsers] = useState([
        {id:1, name:'Yulia', surname:'Klepitskaya', email:'gallavich66@gmail.com', role:'Admin'},
        {id:2, name:'Felix', surname:'Mironsky', email:'felix89@gmail.com', role:'Editor'},
        {id:3, name:'Yuliana', surname:'Volkova', email:'yulia89@mail.com', role:'User'},
    ])

    const addUser = (id, name, surname, email, role) =>{
        setUsers([...users, {id, name, surname, email, role}]);
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const updateUser = (id, updatedUser) => {
        setUsers(users.map((user) => user.id === id ? updatedUser : user));
    }

    return (
        <UsersContext.Provider value={{users, addUser, deleteUser, updateUser}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider;