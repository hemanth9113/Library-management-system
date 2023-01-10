import '../styles/readbook.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ReadBook = () => {
    let [book,setbook]=useState([])
    let params = useParams()
    useEffect(()=>{
        let fetchData= async() =>{
        let response =await fetch(` http://localhost:4002/books/${params.id}`)
        let data=await response.json()
        setbook(data)
        }
        fetchData()
    })
    return (  
        <div className="readbook">
            <h1>Read More</h1>
            <div className="card">
            <h1>Title: {book.title}</h1>
            <p><span> <h1>ShortDescription:</h1></span> {book.shortDescription}</p>
            <p><span><h1>LongDescription:</h1></span> {book.longDescription}</p>
            </div>
        </div>
    );
}

export default ReadBook;