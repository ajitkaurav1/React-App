// Container.jsx
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Card from './Card';

const Container = () => {
    const [cards, setCards] = useState([
        { id: 1, text: 'Card 1' },
        { id: 2, text: 'Card 2' },
        { id: 3, text: 'Card 3' },
    ]);

    const [, drop] = useDrop(() => ({
        accept: 'CARD',
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            const index = cards.findIndex((card) => card.id === item.id);
            const newCards = [...cards];
            newCards.splice(index, 1);
            newCards.splice(index + Math.round(delta.y / 100), 0, cards[index]);
            setCards(newCards);
        },
    }));

    return (
        <div ref={drop} style={{ width: '400px', minHeight: '400px', border: '1px solid black' }}>
            {cards.map((card) => (
                <Card key={card.id} id={card.id} text={card.text} />
            ))}
        </div>
    );
};

export default Container;