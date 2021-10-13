import { useContext, useState } from "react";
import { When } from "react-if";
import { LoginContext } from "./context";
import { Button } from "react-bootstrap";
import "./login.css"
import Swal from 'sweetalert2'

export default function Login(props) {
    const context = useContext(LoginContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //   state = {
    //     username: '',
    //     password: '',
    //   }
    const handleSubmit = (event) => {
        event.preventDefault();

        context.login(username, password);


    };

    //   const handleChange = (event) => {
    //        in case of class component
    //        this.setState({ [event.target.name]: event.target.value });
    //   };

    return (
        <div className="logInForm">
            <When condition={!context.loggedIn}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="User Name"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </When>
            <When condition={context.loggedIn}>
                <Button variant="danger" type="button" onClick={context.logout}>
                    {console.log(context.user)}
                    Logout
                </Button>
                <span>{context.user.id}</span>
            </When>
        </div>
    );
}