"use client";
import React from 'react'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/footer'
const styles  = require('@/components/gaming/tetrisGameAssets/tetrisGamePageStyles.css')
import Tetris from '@/components/gaming/tetrisGameAssets/TetrisGame'

type Props = {}

const TetrisGame = (props: Props) => {
  return (
    <div className="mainParentContainer">
        <div className="navbarContainer">
            <Navbar />
        </div>
        <div className="gameContainer">
            <h1 className="gameHeading">Tetris Game</h1>
            <div className="tetris-board">
                <Tetris />
            </div>
        </div>
        <div className="footerContainer">
            <Footer />
        </div>
    </div>
  )
}

export default TetrisGame