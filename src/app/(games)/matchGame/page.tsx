"use client";

import React from 'react'
// import Navbar from '@/components/navigation/navbar'
import NavbarV2 from '@/components/navigation/NavbarV2'
import Footer from '@/components/footer'
const styles  = require('@/components/gaming/matchGameAssets/matchGameStyles.css')
import MatchGameLogic from '@/components/gaming/matchGameAssets/MatchGameLogic'

type Props = {}

const MatchGamePage= (props: Props) => {
  return (
    <div>
        <div>
            {/* <Navbar /> */}
            <NavbarV2 />
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