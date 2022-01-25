import { useState } from "react";
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {email: email, password: password}
            const response = await axios.post ('http://localhost:4000/auth/login', body)
            const accessToken = response.data
            console.log(accessToken, "accessToken");
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form className="container" onSubmit={e => handleSubmit(e)}>
            <h2>Login</h2>
            <div className="content-items">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="content-items">
                <label htmlFor="loginPassword">Password :</label>
                <input type="password" name="loginPassword" id="loginPassword" onChange={e => setPassword(e.target.value)}/>
            </div>
                <button>Login</button>
        </form>
      );
}
 
export default Login;