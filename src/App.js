import React from 'react';
import Card from './card'; // Import the reusable Card component
import './style.css';


const App = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: 'https://example.com/card1-image.jpg',
      links: [
        { url: 'https://example.com/link1', label: 'Link 1' },
        { url: 'https://example.com/link2', label: 'Link 2' },
      ],
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'https://example.com/card2-image.jpg',
      links: [
        { url: 'https://example.com/link3', label: 'Link 3' },
        { url: 'https://example.com/link4', label: 'Link 4' },
      ],
    },
    // Add more cards data as needed
  ];

  return (
    <div className="app-container">
      <h1>My Reusable Cards App</h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
