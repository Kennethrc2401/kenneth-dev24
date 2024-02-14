"use client";
import React, { useState, useEffect, useCallback, KeyboardEvent } from 'react';

const ROWS = 20;
const COLS = 10;
const EMPTY_CELL = 0;
const BLOCK_SIZE = 30;

enum Direction {
  Left = 'left',
  Right = 'right',
  Down = 'down',
}

const Tetris: React.FC = () => {
  const [board, setBoard] = useState<number[][]>([]);
  const [currentBlock, setCurrentBlock] = useState<number[][]>([]);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initBoard = () => {
      const newBoard: number[][] = Array.from({ length: ROWS }, () =>
        Array(COLS).fill(EMPTY_CELL)
      );
      setBoard(newBoard);
    };
    initBoard();
  }, []);

  const generateBlock = (): number[][] => {
    // Define different block shapes
    const blockShapes: number[][][] = [
      // Square block (2x2)
      [
        [1, 1],
        [1, 1],
      ],
      // Line block (1x4)
      [
        [1, 1, 1, 1],
      ],
      // L block
      [
        [1, 0],
        [1, 0],
        [1, 1],
      ],
      // T block
      [
        [1, 1, 1],
        [0, 1, 0],
      ],
      // Z block
      [
        [1, 1, 0],
        [0, 1, 1],
      ],
      // S block
      [
        [0, 1, 1],
        [1, 1, 0],
      ],
      // J block
      [
        [0, 1],
        [0, 1],
        [1, 1],
      ],
    ];

    // Randomly select a block shape
    const randomIndex = Math.floor(Math.random() * blockShapes.length);
    return blockShapes[randomIndex];
  };

  const moveBlock = (direction: Direction) => {
    let newBlockPosition = { ...currentPosition };
    switch (direction) {
      case Direction.Left:
        newBlockPosition.x -= 1;
        break;
      case Direction.Right:
        newBlockPosition.x += 1;
        break;
      case Direction.Down:
        newBlockPosition.y += 1;
        break;
      default:
        break;
    }

    if (!isCollision(currentBlock, newBlockPosition)) {
      setCurrentPosition(newBlockPosition);
    } else if (direction === Direction.Down) {
      settleBlock();
    }
  };

  const isCollision = (block: number[][], position: { x: number; y: number }): boolean => {
    for (let row = 0; row < block.length; row++) {
      for (let col = 0; col < block[row].length; col++) {
        if (
          block[row][col] &&
          (board[row + position.y] && board[row + position.y][col + position.x]) !== EMPTY_CELL
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const settleBlock = () => {
    // Update the board with the current block
    const newBoard = [...board];
    for (let row = 0; row < currentBlock.length; row++) {
      for (let col = 0; col < currentBlock[row].length; col++) {
        if (currentBlock[row][col]) {
          newBoard[row + currentPosition.y][col + currentPosition.x] = 1;
        }
      }
    }
    setBoard(newBoard);

    // Generate a new block
    const newBlock = generateBlock();
    setCurrentBlock(newBlock);
    setCurrentPosition({ x: Math.floor(COLS / 2), y: 0 });
  };

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          moveBlock(Direction.Left);
          break;
        case 'ArrowRight':
          moveBlock(Direction.Right);
          break;
        case 'ArrowDown':
          moveBlock(Direction.Down);
          break;
        default:
          break;
      }
    },
    [currentPosition, currentBlock, board]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress as unknown as (event: Event) => void);
    return () => window.removeEventListener('keydown', handleKeyPress as unknown as (event: Event) => void);
  }, [handleKeyPress]);

  useEffect(() => {
    const interval = setInterval(() => {
      moveBlock(Direction.Down);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentBlock, currentPosition]);

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} style={{ display: 'flex' }}>
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            style={{
              width: BLOCK_SIZE,
              height: BLOCK_SIZE,
              backgroundColor: cell === EMPTY_CELL ? 'white' : 'black',
              border: '1px solid #ccc',
              display: 'inline-block',
            }}
          >
            {/* Render the current block */}
            {rowIndex >= currentPosition.y &&
            rowIndex < currentPosition.y + currentBlock.length &&
            colIndex >= currentPosition.x &&
            colIndex < currentPosition.x + currentBlock[0].length &&
            currentBlock[rowIndex - currentPosition.y][colIndex - currentPosition.x] === 1 ? (
              <div
                style={{
                  width: BLOCK_SIZE,
                  height: BLOCK_SIZE,
                  backgroundColor: 'blue',
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', width: 'fit-content' }}>
      {renderBoard()}
    </div>
  );
};

export default Tetris;
