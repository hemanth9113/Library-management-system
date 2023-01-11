import {Link} from 'react-router-dom';
import '../styles/landingpage.css'
const Landingpage = () => {
    return ( 
        <div className="page">
            <div className="contanier">
                <h1>Library Management System</h1>
                <img src="images/admin.png" alt="" />
                <Link to='/admin-login' className='btn'>Admin Login</Link>
                <img src="images/user.png" alt="" />
                <Link to='/user-login' className='btn'>User Login</Link>
            </div>
        </div>
     );
}
 
export default Landingpage;