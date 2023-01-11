import { Link } from "react-router-dom";

const Usernavbar = () => {
    return (  
        <div className="page">
            <div className="navbar">
                <h3>User Portal</h3>
                <div className="nav_links">
                    <li><Link to="/user/"> Dashboard</Link></li>
                    <li><Link to="/user/booklist">Book List</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </div>
            </div>
        </div>
    );
}
 
export default Usernavbar;