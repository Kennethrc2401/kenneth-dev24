"use client"

import React from 'react'
import styles from '@/utils/stylesheets/WelcomeBanner.module.css'; // Import your CSS module here


type Props = {}

const WelcomeBanner = (props: Props) => {
  return (
    <div className={styles.welcomeBannerContainer}>
      {/* Stunning Welcome Banner */}
      <div className={styles.welcomeBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>Kenneth Ramirez Castro</h1>
          <p className={styles.description}>Web Developer | Designer | Creative</p>
          <a href="/projects" className={styles.button}>View Portfolio</a>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBanner