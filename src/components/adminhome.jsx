import { Route, Routes } from "react-router-dom";
import Addbook from "./addbook";
import Adduser from "./adduser";
import Admindashboard from "./admindashboard";
import AdminNavbar from "./adminnavbar";
import Booklist from "./booklist";
import ReadBook from "./readbook";
import Userlist from "./userlist";

const Adminhome = () => {
    return (
        <div className="page">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<Admindashboard />} />
                <Route path='/booklist' element={<Booklist/>}/>
                <Route path='/userlist' element={<Userlist/>}/>
                                    {/* route parameter */}
                <Route path="/booklist/:id" element={<ReadBook/>}/>
                <Route path="/addbook" element={<Addbook/>}/>
                <Route path="/adduser" element={<Adduser/>}/>
            </Routes>
        </div>
    );
}

export default Adminhome;