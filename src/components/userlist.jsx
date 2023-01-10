import { useEffect,useState } from "react";
import "../styles/userlist.css"

const Userlist = () => {
    let [user,setuser]=useState([])

    useEffect(()=>{
        let fetchData= async() =>{
        let response =await fetch('http://localhost:4002/users')
        let data=await response.json()
        setuser(data)
        }
        fetchData()
    },[])
    let handleDelete=(id,name)=>{
        setuser(user.filter(x=> x.id !==id))
        alert(`${name} has been deleted`)
    }
    return (  
        <div className="userlist">
            <h1>User List : {user.length}</h1>
            <div className="user_section">
                {user.map(data=>(
                    <div className="usersec">
                    <div className="user_card">
                        <h3>Name: {data.name}</h3>
                        <h4>Age: {data.age}</h4>
                        <h4>Email: {data.Email}</h4>
                        <h4>PhoneNumber: {data.phoneNumber}</h4>
                        <button onClick={()=> handleDelete(data.id,data.name)}>Delete</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Userlist;