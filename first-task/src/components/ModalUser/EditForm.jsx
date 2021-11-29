import React, {useContext, useState, useCallback, useEffect} from "react"; 
import { Form, Button } from "react-bootstrap";
import { UsersContext } from "../Users/UsersContext";

const EditForm = ({theUser}) =>{

    const id = theUser.id;
  
    const [name, setName] = useState(theUser.name);
    const [surname, setSurname] = useState(theUser.surname);
    const [email, setEmail] = useState(theUser.email);
    const [role, setRole] = useState(theUser.role);

    const {updateUser} = useContext(UsersContext);
    const updatedUser = {id, name, surname, email, role};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, updatedUser);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="*Name"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="*Surname"
                    value={surname}
                    name="surname"
                    onChange={(e) => setSurname(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="*Email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control as="select" className="form-select"
                    type="text"
                    placeholder="*Role"
                    value={role}
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                    required>
                        <option selected>Admin</option>
                        <option>User</option>
                        <option>Editor</option>
                </Form.Control>
            </Form.Group>

            <Button type="submit">Edit</Button>
        </Form>
    )
}

export default EditForm;