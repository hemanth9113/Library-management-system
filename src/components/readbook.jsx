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
            <h1>Read More : </h1>
            <div className="card">
            <h2>Title: {book.title}</h2>
            <p><span> <h2>ShortDescription:</h2></span> {book.shortDescription}</p>
            <p><span><h2>LongDescription:</h2></span> {book.longDescription}</p>
            </div>
        </div>
    );
}

export default ReadBook;