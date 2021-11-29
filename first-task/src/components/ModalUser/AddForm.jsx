import React, {useContext, useEffect, useState} from "react"; 
import { Form, Button } from "react-bootstrap";
import { UsersContext } from "../Users/UsersContext";

const AddForm = () =>{
    const {addUser} = useContext(UsersContext);

    const [addUserItem, setAddUserItem] = useState({
       id:"", name:"", surname:"", email:"", role:""
    });

    const addInput = (e) => {
        setAddUserItem({...addUserItem,[e.target.name]: e.target.value});
    }

    const {id, name, surname, email, role} = addUserItem;

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(id, name, surname, email, role);
    }

    return(
        <Form onSubmit={handleSubmit}>
             <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="*Id"
                    name="id"
                    value={id}
                    onChange = {addInput}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="*Name"
                    name="name"
                    value={name}
                    onChange = {addInput}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="*Surname"
                    name="surname"
                    value={surname}
                    onChange = {addInput}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="*Email"
                    name="email"
                    value={email}
                    onChange = {addInput}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control as="select" className="form-select"
                    type="text"
                    placeholder="*Role"
                    name="role"
                    value={role}
                    onChange = {addInput}
                    required>
                       <option selected>Admin</option>
                       <option>User</option>
                       <option>Editor</option>
                </Form.Control>
            </Form.Group>

            <Button type="submit">Add user</Button>
        </Form>
    )
}

export default AddForm;