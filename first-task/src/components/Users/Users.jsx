import { useContext, useState, useCallback } from "react";
import { UsersContext } from "./UsersContext";
import { Modal, Button } from "react-bootstrap";
import EditForm from "../ModalUser/EditForm";

const Users = ({user}) => {

    const {deleteUser} = useContext(UsersContext);
    const [show, setShow] = useState();

    const toggleWindows = useCallback(() => setShow(prevState => !prevState));

    return(
       <>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
                <button onClick={toggleWindows}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
            </td>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Add user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theUser={user}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleWindows}>Close</Button>
                </Modal.Footer>
            </Modal>
       </>
    )
}

export default Users;