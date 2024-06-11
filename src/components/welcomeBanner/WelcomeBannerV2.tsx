"use client"

import React from 'react'
import { Button } from '../ui/button'

type Props = {}

const WelcomeBannerV2 = (props: Props) => {

    const desktopStyles = {
        welcomeBennerContainer: 'welcomeBannerContainer bg-gray-100 dark:bg-gray-800 flex justify-center items-center h-96 px-4',
        welcomeBannerContent: 'welcomeBannerContent text-center max-w-2xl px-4',
        welcomeBannerTitle: 'text-4xl font-bold text-gray-800 dark:text-gray-100',
        welcomeBannerSubtitle: 'text-lg text-gray-700 dark:text-gray-200',
        welcomeBannerButton: 'welcomeBannerButton mt-4 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-100 hover:scale-105 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white py-2 px-4 rounded-md bg-red-600 text-white font-bold uppercase cursor-pointer'
    }

    const mobileStyles = {
        
    }

  return (
    <div className={desktopStyles.welcomeBennerContainer}>
        <div className={desktopStyles.welcomeBannerContent}>
            <h1 className={desktopStyles.welcomeBannerTitle}>
                Welcome to my portfolio
            </h1>
            <p className={desktopStyles.welcomeBannerSubtitle}>
                I am a frontend developer with a passion for web design and development
            </p>
            <div >
                <Button
                    className={desktopStyles.welcomeBannerButton}
                    onClick={() => {
                        window.location.href = '/projects'
                    }}
                >
                    View My Work
                </Button>
            </div>
        
        </div>
    </div>
  )
}

export default WelcomeBannerV2