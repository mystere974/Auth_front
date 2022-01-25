import { useState } from "react";
import axios from 'axios'

const Signin = () => {

    const [sign, setSign] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {email: sign, password: password}
            const response = await axios.post ('http://localhost:4000/auth/signin', body)
        } catch (error) {
            console.error(error)
        }
    }

    return ( 
        <form className="container" onSubmit={(e) => handleSubmit(e)}>
            <h2>Signin</h2>
            <div className="content-items">
                <label htmlFor="ident">Identifier</label>
                <input type="ident" name="ident" id="ident" required onChange={e =>setSign(e.target.value)}/>
            </div>
            <div className="content-items">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" required onChange={e => setPassword(e.target.value)}/>
            </div>
                <button>Sign</button>
        </form>
     );
}
 
export default Signin;