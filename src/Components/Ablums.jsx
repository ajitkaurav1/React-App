import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {GetAlbum } from   '../Services/ApiServices'  
   

function Albums(){
    const [data, setData] = useState([]);
    const navigate =useNavigate()       
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData()
    }, []);

     function fetchData(){
        const albumdata =  GetAlbum();
        albumdata.then((data)=>setData(data))
     }
   
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filter =()=>{  
        if (searchQuery === '') {
            fetchData()
            return;
        } 
        let filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
        setData(filteredData);
    }
    const GOTOTaskPage =()=>{
        navigate("/CreateAlbum")
    }

    return (
        <div className='container mt-3'>
            
            <div className='d-flex flex-row m-3'>
                <div className='p-2'>
                    <input
                        type="text"
                        placeholder="Search by Album title"
                        className='form-control'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className='p-2'>
                    <button type="button" className="btn btn-primary" onClick={filter}>Search</button>
                </div>
                <div className='p-2 text-end'>
                    <button type="button" className="btn btn-primary" onClick={GOTOTaskPage}>Create New Album</button>
                </div>
            </div>
            <div>
                <h1>Album List</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Albums;