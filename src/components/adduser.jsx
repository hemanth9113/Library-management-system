import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Adduser = () => {
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [Email,setEmail]=useState("")
    let [phoneNumber,setPhonenumber]=useState("")


    let navigate = useNavigate()

    let handleSubmit =(e) =>{
    e.preventDefault();
    //data to be posted
    let userData = {name,age,Email,phoneNumber}

     //posting to server
    fetch(`http://localhost:4002/users`,{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify(userData)
    })
    alert('user added successfully')
    navigate('/admin/userlist')
    }

    return (  
        <div className="adduser">
            <h1>Add a New user</h1>
            <div className="form">
                <form action=""onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" value={name} onChange={ (e)=>setName(e.target.value)} placeholder="Enter the user name" />
                    </div>
                    <div className="age">
                    <input type="number" value={age} onChange={ (e)=>setAge(e.target.value)} min='1' placeholder="Enter the user age" />
                    </div>
                    <div className="Email">
                    <input type="text" value={Email} onChange={ (e)=>setEmail(e.target.value)} placeholder="Enter the user Email" />
                    </div>
                    <div className="phoneNumber">
                    <input type="tel" value={phoneNumber} onChange={ (e)=>setPhonenumber(e.target.value)} minLength='10' maxLength='10' placeholder="Enter the user Phonenumber" />
                    </div>
                    <button className="bb">Add User</button>
                </form>
            </div>
        </div>
    );
}

export default Adduser;