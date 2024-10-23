import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {PostAlbum } from   '../Services/ApiServices'  
import { IoIosInformationCircle } from "react-icons/io";

function CreateAlbum() {
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleTitleIdChange = (e) => {
        setTitle(e.target.value);
        setError('');
    };
    const handleuserIdChange = (e) => {
        setUserId(e.target.value);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            setError('Please enter a Album name');
            return;
        }
        if (userId.trim() === '') {
            setError('Please enter a user ID');
            return;
        }
        const albumData = {
            title: title,
            userId: parseInt(userId),
        };
        const response = PostAlbum(albumData)
        response.then((data)=>{
            if (data === undefined) {
                alert("post is not created");
            }
            else alert("post has been created");
        })

       

        setTitle('');
        setUserId('');
    };
    const GoBack =() =>{
        navigate("/Albums")
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row mb-3">
                    <div className="p-2"><input
                        type="text"
                        placeholder="Enter a album"
                        className='form-control'
                        value={title}
                        onChange={handleTitleIdChange}
                    /></div>
                     <div className="p-2"><input
                        type="text"
                        placeholder="Enter a userid"
                        className='form-control'
                        value={userId}
                        onChange={handleuserIdChange}
                    />
                    <IoIosInformationCircle /><p>Please enter user id as numeric</p>
                    </div>
                    <div className="p-2"><button type="submit" className='btn btn-success'>Create Task</button></div>
                    <div className="p-2"><button type="submit" onClick={GoBack} className='btn btn-secondary mx-2'>Back</button></div>

                </div>
            </form>
            {error && <p className='text-danger'>{error}</p>}


        </div>

    );
};

export default CreateAlbum;