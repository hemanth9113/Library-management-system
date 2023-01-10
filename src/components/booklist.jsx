import '../styles/booklist.css'
import { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
const Booklist = () => {
    let [books,setbooks]=useState([])

    useEffect(()=>{
        let fetchData= async() =>{
        let response =await fetch(' http://localhost:4002/books')
        let data=await response.json()
        setbooks(data)
        }
        fetchData()
    },[books])

    // delete a book from server
    let handleDelete=(id,title)=>{
        fetch(` http://localhost:4002/books/${id}`,{
            method:'DELETE'
    });
    alert(`${title} will be deleted permanently`)
    }

    let navigate =useNavigate();
    let Read = (id) => {
        navigate(`/admin/booklist/${id}`)
    }

    return (  
        <div className="booklist">
            <h1>Book List : {books.length}</h1>
            <div className="book_section">
                {books.map(data=>(
                    <div className="booksec">
                        <img src={data.thumbnailUrl} alt="" />
                    <div className="book_card">
                        <h3>{data.title}</h3>
                        <h4>Authors: {data.authors}</h4>
                        <h4>Category: {data.categories}</h4>
                        <h6>pageCount: {data.pageCount}</h6>
                        <button onClick={()=> Read(data.id)}>Read more</button>
                        <button onClick={()=> handleDelete(data.id,data.title)}>Delete</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Booklist;