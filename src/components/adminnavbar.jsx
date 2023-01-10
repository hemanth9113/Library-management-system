import '../styles/navbar.css'
import { Link } from 'react-router-dom';
const AdminNavbar = () => {
    return (
        <div className="page">
            <div className="navbar">
                <h3>Admin Portal</h3>
                <div className="nav_links">
                    <li><Link to="/admin/"> Dashboard</Link></li>
                    <li><Link to="/admin/addbook">Add Books</Link></li>
                    <li><Link to="/admin/adduser">Add User</Link></li>
                    <li><Link to="/admin/booklist">Book List</Link></li>
                    <li><Link to="/admin/userlist">User List</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;