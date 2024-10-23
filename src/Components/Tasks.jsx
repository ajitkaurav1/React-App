import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from './Container';

const Home = () => {
    return (
        <div className='container mt-3'>
            <h1>Welcome to the Tasks component!</h1>
            <p>Here you can  drag and drop card </p>
            <DndProvider backend={HTML5Backend}>
            <Container />
            </DndProvider>
        </div>
    );
};

export default Home;