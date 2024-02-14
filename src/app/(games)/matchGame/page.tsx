"use client";

import React from 'react'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/footer'
const styles  = require('@/components/gaming/matchGameAssets/matchGameStyles.css')
import MatchGameLogic from '@/components/gaming/matchGameAssets/MatchGameLogic'

type Props = {}

const MatchGamePage= (props: Props) => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className="matchGamePageContent">
            <MatchGameLogic />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default MatchGamePage