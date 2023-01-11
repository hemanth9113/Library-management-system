import { Route, Routes } from "react-router-dom";
import Usernavbar from "./usernavbar";
import Userdashboard from "./userdashboard";
import Booklist from "./booklist";
import ReadBook from "./readbook";

const Userportal = () => {
    return (  
        <div className="userportal">
            <Usernavbar/>
            <Routes>
                <Route path="/" element={<Userdashboard />} />
                <Route path='/booklist' element={<Booklist/>}/>
                <Route path="/booklist/:id" element={<ReadBook/>}/>
            </Routes>
        </div>
    );
}

export default Userportal;