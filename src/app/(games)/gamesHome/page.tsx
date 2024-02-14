import React from 'react'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/footer'
const styles  = require('@/utils/stylesheets/games/gamesHomeStyles.css')
type Props = {}

const GamesHome = (props: Props) => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className="gamesHomeContainer">
            <h1 className="gamesHomeHeading">Games Home</h1>
            <div className="gamesHomeParagraph">
                <p>Here you can find all the games in my developed collection. I will be adding more games in the future. I hope you enjoy playing them.</p>
            </div>
            <div className="gamesHomeList">
                <ul>
                    <li><a href="/matchGame">Match Game</a></li>
                    <li><a href="/puzzleGame">Sliding Puzzle Game</a></li>
                    <li><a href="/tetrisGame">Tetris Game</a></li>
                    {/* <li><a href="/games/word-guessing-game">Word Guessing Game</a></li> */}
                    {/* <li><a href="/games/rock-paper-scissors-lizard-spock">Rock Paper Scissors Lizard Spock</a></li> */}
                </ul>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default GamesHome