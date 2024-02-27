"use client";
import React, { useState, useEffect } from 'react';
import Message from '@/components/Message/Message'; // Import the Message component
import './matchGameStyles.css'; // Import CSS for styling

type Props = {}

const MatchGameLogic: React.FC<Props> = (props) => {
  const [cards, setCards] = useState<number[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [matchedIndexes, setMatchedIndexes] = useState<number[]>([]);
  const [isBoardGenerated, setIsBoardGenerated] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    generateBoard();
  }, []);

  useEffect(() => {
    if (matchedPairs === 8) {
      setMessage('Congratulations! You have found all pairs.');
      setShowMessage(true);
    }
  }, [matchedPairs]);

  useEffect(() => {
    if (matchedPairs === 8) {
      setIsBoardGenerated(false);
    }
  }, [matchedPairs]);

  const generateBoard = () => {
    const pairs: number[] = [];
    
    // Generate pairs of numbers from 1 to 8
    for (let i = 1; i <= 8; i++) {
      pairs.push(i);
      pairs.push(i);
    }

    // Shuffle the pairs randomly
    const shuffledPairs = shuffleArray(pairs);

    setCards(shuffledPairs);
    setIsBoardGenerated(true);
  };

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: number[]): number[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (cardIndex: number) => {
    if (selectedCards.length === 2) {
      setSelectedCards([]);
    }

    setSelectedCards(prevSelectedCards => [...prevSelectedCards, cardIndex]);
  };

  const checkMatch = () => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      if (cards[firstCard] === cards[secondCard]) {
        setMatchedPairs(prevMatchedPairs => prevMatchedPairs + 1);
        setMatchedIndexes(prevMatchedIndexes => [...prevMatchedIndexes, firstCard, secondCard]);
      }
    }
  };

  const isMatched = (index: number) => {
    return matchedIndexes.includes(index);
  };

  const handleNewBoard = () => {
    generateBoard();
    setMatchedPairs(0);
    setMatchedIndexes([]);
  };

  const handleAnimationEnd = () => {
    if (matchedPairs === 8) {
      setShowMessage(false);
    }
  };

  return (
    <div className="MainParentContainer">
      <div className="gameInstructions">
        <h1>Match Game</h1>
        <h2>Rules</h2>
        <p>Click on a card to reveal the number on the other side. Click on a second card to try and find a match to the first. If you succeed, the pair will be removed from play. If not, try again!</p>
        <h2>How To Win</h2>
        <p>You win when all pairs have been found.</p>
      </div>
      <div className="gameScore">
        <div>
          <h2>Matched Pairs: {matchedPairs}</h2>
          {matchedPairs === 8 && <h2>Congratulations! You have found all pairs.</h2>}
        </div>
      </div>
      <div className="buttonContainer">
        {matchedPairs < 8 && isBoardGenerated && (
          <button className="newBoardButton" onClick={handleNewBoard}>Generate New Board</button>
        )}
      </div>
      <br />
      <div className="matchGameCardContainer" id="game">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${selectedCards.includes(index) || isMatched(index) ? 'flipped' : ''} ${isMatched(index) ? 'matched' : ''}`}
            onClick={() => {
              handleCardClick(index);
              checkMatch();
            }}
          >
            {selectedCards.includes(index) || isMatched(index) ? card : '?'}
          </div>
        ))}
      </div>
      <div className="message-container">
        {showMessage && <Message message={message} onAnimationEnd={handleAnimationEnd} />}
      </div>
    </div>      
  );
}

export default MatchGameLogic;
