import { useNavigate } from "react-router-dom";
import '../styles/adminlogin.css'
const Userlogin = () => {
    let navigate = useNavigate();
    let login = () => {
        navigate('/user/')
    }
    return (
        <div className="page">
            <div className="contanier">
                <h1>Login as User</h1>
                <div className="form">
                    <form action="" onSubmit={login}>
                        <div className="mail">
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Enter your password" />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Userlogin;