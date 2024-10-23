// Card.jsx
import React from 'react';
import { useDrag } from 'react-dnd';

const Card = ({ id, text }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'CARD',
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: '16px',
                margin: '8px',
                backgroundColor: 'white',
                border: '1px solid gray',
                cursor: 'move',
            }}
        >
            {text}
        </div>
    );
};

export default Card;