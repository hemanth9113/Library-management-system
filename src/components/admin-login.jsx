import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/adminlogin.css'
const Adminlogin = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();


    let login = (e) => {
        e.preventDefault();
        let data={email,password} //data from input

        //admin validation
        
        if (email == '123@gmail.com' && password == '1234') {
            navigate('/admin/')
        } else {
            alert('Invalid Credentials')
        }
    }
    return (
        <div className="page">
            <div className="contanier">
                <h1>Login as Admin</h1>
                <div className="form">
                    <form action="" onSubmit={login}>
                        <div className="mail">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your mail id" />
                        </div>
                        <div className="password">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
                        </div>
                        <button className="admn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Adminlogin;