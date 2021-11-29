import React, { useCallback, useContext, useEffect, useState } from "react";
import { UsersContext } from './UsersContext'
import Users from "./Users";
import { Modal, Button } from "react-bootstrap";
import AddForm from "../ModalUser/AddForm"

const UserList = () => {

    const {users} = useContext(UsersContext);

    const [show, setShow] = useState();

    const toggleWindows = useCallback(() => setShow(prevState => !prevState));

    return (
        <div>
            <div>
                <Button onClick={toggleWindows}>Add user</Button>	
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <Users user={user}/>
                            </tr>   
                        ))
                    }
                </tbody>
            </table>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Add user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleWindows}>Close</Button>
                </Modal.Footer>
            </Modal>
           
        </div>
        )
}

export default UserList; 