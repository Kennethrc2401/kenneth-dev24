"use client";

import React, { useState, useEffect } from 'react';
import styles from './PuzzleGame.module.css';

interface PuzzleProps {
  size: number;
}

const PuzzleGame: React.FC<PuzzleProps> = ({ size }) => {
  const [board, setBoard] = useState<number[][]>([]);
  const [emptyTile, setEmptyTile] = useState<number[]>([]);

  useEffect(() => {
    generateBoard();
    shuffleBoard();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          moveTile(emptyTile[0] - 1, emptyTile[1]);
          break;
        case 'ArrowDown':
          moveTile(emptyTile[0] + 1, emptyTile[1]);
          break;
        case 'ArrowLeft':
          moveTile(emptyTile[0], emptyTile[1] - 1);
          break;
        case 'ArrowRight':
          moveTile(emptyTile[0], emptyTile[1] + 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [emptyTile]); // Make sure to include emptyTile in the dependency array

  const generateBoard = () => {
    let count = 1;
    const newBoard: number[][] = [];
    for (let i = 0; i < size; i++) {
      const row: number[] = [];
      for (let j = 0; j < size; j++) {
        row.push(count++);
      }
      newBoard.push(row);
    }
    newBoard[size - 1][size - 1] = 0; // Empty tile represented by 0
    setBoard(newBoard);
    setEmptyTile([size - 1, size - 1]);
  };

  const shuffleBoard = () => {
    for (let i = 0; i < 1000; i++) {
      const randomDirection = Math.floor(Math.random() * 4);
      switch (randomDirection) {
        case 0: // Up
          moveTile(emptyTile[0] - 1, emptyTile[1]);
          break;
        case 1: // Down
          moveTile(emptyTile[0] + 1, emptyTile[1]);
          break;
        case 2: // Left
          moveTile(emptyTile[0], emptyTile[1] - 1);
          break;
        case 3: // Right
          moveTile(emptyTile[0], emptyTile[1] + 1);
          break;
      }
    }
  };

  const moveTile = (row: number, col: number) => {
    if (row >= 0 && row < size && col >= 0 && col < size) {
      const newBoard = [...board];
      newBoard[emptyTile[0]][emptyTile[1]] = newBoard[row][col];
      newBoard[row][col] = 0;
      setBoard(newBoard);
      setEmptyTile([row, col]);

      if (isSolved()) {
        console.log('Congratulations! You solved the puzzle.');
      }
    }
  };

  const handleTileClick = (row: number, col: number) => {
    if (isAdjacentToEmptyTile(row, col)) {
      moveTile(row, col);
    }
  };

  const isAdjacentToEmptyTile = (row: number, col: number) => {
    return (
      (Math.abs(emptyTile[0] - row) === 1 && emptyTile[1] === col) ||
      (Math.abs(emptyTile[1] - col) === 1 && emptyTile[0] === row)
    );
  };

  const isSolved = () => {
    let count = 1;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] !== count % (size * size)) {
          return false;
        }
        count++;
      }
    }
    return true;
  };

  return (
    <div className={styles['puzzle-board']}>
      {board.map((row, i) => (
        <div key={i} className={styles['puzzle-row']}>
          {row.map((tile, j) => (
            <div
              key={j}
              className={styles['puzzle-tile']}
              onClick={() => handleTileClick(i, j)}
            >
              {tile}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PuzzleGame;
