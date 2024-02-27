"use client";
import React from 'react';
// import Navbar from '@/components/navigation/navbar';
import NavbarV2 from '@/components/navigation/NavbarV2'
import Footer from '@/components/footer';
import PuzzleGame from '@/components/gaming/puzzleGameAssets/PuzzleGame';
const styles = require('@/components/gaming/puzzleGameAssets/puzzleGamePage.css');

const PuzzlePage: React.FC = () => {
  return (
    <div>
      <div>
        {/* <Navbar /> */}
        <NavbarV2 />
      </div>
      <div className="mainParentContainer">
        <h1 className="puzzleGameHeading">
            Sliding Puzzle Game
        </h1>
        <p className="puzzleGameInstructions">
            Instructions: Click on the tiles to move them around and solve the puzzle.
        </p>
        <PuzzleGame size={3} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PuzzlePage;
