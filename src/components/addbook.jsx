import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addbook.css";
const Addbook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,url

    let [title,setTitle]=useState("")
    let [author,setAuthor]=useState("")
    let [categories,setCategories]=useState("")
    let [pageCount,setPagecount]=useState("")
    let [shortDescription,setShortDescription]=useState("")
    let [longDescription,setLongDescription]=useState("")
    let [thumbnailUrl,setThumbnailUrl]=useState("")


    let navigate = useNavigate()

    let handleSubmit =(e) =>{
    e.preventDefault();
    //data to be posted
    let bookData = { title,author,categories,pageCount,shortDescription,longDescription,thumbnailUrl}

    //posting to server
    fetch(`http://localhost:4002/books`,{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify(bookData)
    })
    alert('book added successfully')
    navigate('/admin/booklist')
    }

    return (  
        <div className="addbook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                    <input value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" required placeholder="author of the book" />
                    </div>
                    <div className="categories">
                    <input value={categories} onChange={(e)=>setCategories(e.target.value)} type="text" required placeholder="category" />
                    </div>
                    <div className="pageCount">
                    <input value={pageCount} onChange={(e)=>setPagecount(e.target.value)} type="number" required placeholder="pagecount of the book" />
                    </div>
                    <div className="shortDescription">
                    <textarea value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} placeholder="shortDescription of the book" cols="80" rows="10"/>
                    </div>
                    <div className="longDescription">
                    <textarea value={longDescription} onChange={(e)=>setLongDescription(e.target.value)}  placeholder="longDescriptionof the book"  cols="80" rows="10"/>
                    </div>
                    <div className="thumbnailUrl">
                    <input value={thumbnailUrl} required placeholder="add image" onChange={(e)=>setThumbnailUrl(e.target.value)} />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default Addbook;