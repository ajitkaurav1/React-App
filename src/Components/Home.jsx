import React from 'react';

const Home = (props) => {
    return (
        <div className='container'>
            <h1>Welcome {props.userName}</h1>
            {/* Add your content here */}
        </div>
    );
};

export default Home;